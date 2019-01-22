import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'filterAddress'
})
export class FilterAddress implements PipeTransform {
   transform(obj: any): string {
       const data = JSON.parse(obj);
       return data.address;
   }
}
