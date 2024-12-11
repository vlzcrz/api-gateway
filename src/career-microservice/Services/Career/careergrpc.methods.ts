import { Observable } from 'rxjs';

export interface CareerService {
  /**
   * Devuelve un listado con todas las carreras disponibles
   * @returns Un Observable con la lista de carreras
   */
  GetAll(data: {}): Observable<CareerList>;
}

export interface Career {
  Name: string;
}

export interface CareerList {
  Careers: Career[];
}

export interface Empty {}
