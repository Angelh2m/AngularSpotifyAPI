import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noPhoto'
})

export class NoPhotoPipe implements PipeTransform {

  transform(images: any): any {

    const noImage = 'assets/noimage.jpg';

    if(!images){
      return noImage;
    }
    return (images.length > 0) ? images[1].url : noImage ;

  }
}
