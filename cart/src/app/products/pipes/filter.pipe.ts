import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts: [], searchkey: String, propertyname: any): any[] {
   const result:any=[];
   //initial condition no search key
    if (!allproducts || searchkey == '' || propertyname == '') {
      return allproducts;
    }

    //when there is search key
    allproducts.forEach((product:any)=>{
      if(product[propertyname].toLowerCase().trim().includes(searchkey.toLowerCase().trim())){
        result.push(product)
      }
    })
    return result;
  }
}
