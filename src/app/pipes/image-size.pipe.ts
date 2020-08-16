import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSize'
})
export class ImageSizePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    
    return null;
  }

}
