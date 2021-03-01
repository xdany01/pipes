import {DireccionInterface} from './direccion.interface';

export interface HeroeInterface {
  nombre: string;
  clave: string;
  edad: number;
  direccion: DireccionInterface;
}
