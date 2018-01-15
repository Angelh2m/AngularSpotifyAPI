import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Token } from '../models/token';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/items';


@Injectable()
export class TokenService {

  // Data schema
  itemsCollection: AngularFirestoreCollection<Token>;
  // Observable. Fetch and watch data from db
  items;
  itemDoc: AngularFirestoreDocument<Token>;

  // =======================================
  constructor(
    public afs: AngularFirestore,
  ) {

    // Valuechanges is in charge of observing changes in the db
    // this.items = this.afs.collection('items').valueChanges();

    // All this code is to get the id from firestore

    this.items =  this.afs.collection('token')
      .snapshotChanges()
      .map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Token;
          data.id = a.payload.doc.id;
          return data;
        })
      });

    this.itemsCollection = this.afs.collection('token');

  }

  getItems(){
    return this.items;
  }

  addItem(item: Item){
    // This will add to the db
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item){
    // This will find the record and delete
    console.log(item);
    this.itemDoc = this.afs.doc(`token/${item.id}`);
    this.itemDoc.delete();
  }



}

