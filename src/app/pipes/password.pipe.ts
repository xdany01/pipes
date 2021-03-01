import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, visible: boolean = true): string {
    const log = value.length;
    let retorno = value;
    if (visible === false) {
      retorno = '*'.repeat(log);
    }
    return retorno;
  }

}
