import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'filterName'
})
export class FilterName implements PipeTransform {
   transform(obj: any): string {
       const data = JSON.parse(obj);
       return data.name;
   }
}
