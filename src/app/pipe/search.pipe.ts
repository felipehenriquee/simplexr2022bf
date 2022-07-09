import { Itens } from './../models/itens';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Itens[], searchTerm: string): Itens[] {
    if(!list  || !searchTerm){
      return list;
    }
    return list.filter(lis => lis.Nome.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
  }

}
