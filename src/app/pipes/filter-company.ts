import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'filterCompany'
})
export class FilterCompany implements PipeTransform {
   transform(obj: any): string {
       const data = JSON.parse(obj);
       return data.company;
   }
}
