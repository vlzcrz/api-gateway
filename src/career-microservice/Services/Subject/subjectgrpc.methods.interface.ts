import { Observable } from 'rxjs';

export interface SubjectService {
  /**
   * Obtiene una lista de todas las materias.
   * @returns Un Observable con una lista de materias.
   */
  GetAll(data: Empty): Observable<SubjectList>;

  /**
   * Obtiene una lista de todas las relaciones entre materias (prerrequisitos y correlativas).
   * @returns Un Observable con una lista de relaciones.
   */
  GetAllRelationships(data: Empty): Observable<SubjectRelationshipList>;

  /**
   * Obtiene un mapa de prerrequisitos para las materias.
   * @returns Un Observable con una lista de prerrequisitos por materia.
   */
  GetPreRequisitesMap(data: Empty): Observable<SubjectPreRequisiteList>;

  /**
   * Obtiene un mapa de correlativas posteriores para las materias.
   * @returns Un Observable con una lista de correlativas posteriores por materia.
   */
  GetPostRequisitesMap(data: Empty): Observable<SubjectPostRequisiteList>;
}

export interface Subject {
  Code: string;
  Name: string;
  Department: string;
  Credits: number;
  Semester: number;
}

export interface SubjectList {
  Subjects: Subject[];
}

export interface SubjectRelationship {
  SubjectCode: string;
  PreSubjectCode: string;
}

export interface SubjectRelationshipList {
  SubjectRelationships: SubjectRelationship[];
}

export interface SubjectPreRequisite {
  SubjectCode: string;
  PreRequisiteCodes: string[];
}

export interface SubjectPreRequisiteList {
  SubjectPreRequisites: SubjectPreRequisite[];
}

export interface SubjectPostRequisite {
  SubjectCode: string;
  PostRequisiteCodes: string[];
}

export interface SubjectPostRequisiteList {
  SubjectPostRequisites: SubjectPostRequisite[];
}

export interface Empty {}
