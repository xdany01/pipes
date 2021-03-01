import {HeroeInterface} from './heroe.interface';

export interface DataInterface {
  nombre: string;
  array: number[];
  PI: number;
  porcentaje: number;
  salario: number;
  heroe: HeroeInterface;
  valorPromesa: Promise<string>;
  fecha: Date;
  idioma: string;
  videoUrl: string;
  password: string;
  visible: boolean;
}
