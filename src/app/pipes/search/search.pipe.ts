import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Contact[], args: string) {
    if (!value) return null;
    if (!args) return value;

    return value.filter(item => {
        return item.fullName.includes(args);
    });  
  }

}
