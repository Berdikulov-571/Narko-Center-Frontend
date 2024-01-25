import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: string): string {
  let localhost = "https://localhost:7106/";
  return  localhost + value;
  }

}
