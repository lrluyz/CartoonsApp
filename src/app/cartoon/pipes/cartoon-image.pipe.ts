import { Pipe, PipeTransform } from '@angular/core';
import { Cartoon } from '../interfaces/cartoon.interface';

@Pipe({
  name: 'cartoonImage'
})
export class CartoonImagePipe implements PipeTransform {

  transform(toon: Cartoon): string {
    let urlImg: string = `assets/heroes/${toon.id}.jpg`;
    
    if(!toon.id && !toon.alt_img){
      urlImg = 'assets/no-image.png';
    }

    if(toon.alt_img){
      urlImg = toon.alt_img; 
    }

    return urlImg;
  }

}
