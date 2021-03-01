import {Component} from '@angular/core';
import {DataInterface} from './data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: DataInterface;

  constructor() {
    this.data = {
      nombre: 'daniel',
      array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      PI: Math.PI,
      porcentaje: 0.234,
      salario: 1234.56,
      heroe: {
        nombre: 'Logan',
        clave: 'Wolverine',
        edad: 500,
        direccion: {
          calle: 'Primera',
          casa: 20
        }
      },
      valorPromesa: new Promise<string>(resolve => {
        setTimeout(() => {
          resolve('Llego la data');
        }, 4500);
      }),
      fecha: new Date(),
      idioma: 'es-AR',
      videoUrl: 'https://www.youtube.com/embed/Y2O4RCdwCGM',
      password: 'Daniel',
      visible: true
    };

  }
}


