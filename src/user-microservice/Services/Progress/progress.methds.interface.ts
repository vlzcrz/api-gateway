import { Observable } from 'rxjs';

// Interface para ProgressRequest
export interface ProgressService {
  GetUserProgress(request: ProgressRequest): Observable<ProgressResponse>;
  UpdateUserProgress(
    request: UpdateProgressRequest,
  ): Observable<UpdateProgressResponse>;
}

export interface ProgressRequest {
  UserId: string;
}

// Interface para ProgressResponse
export interface ProgressResponse {
  SubjectIds: string[]; // Lista de IDs de asignaturas
}

// Interface para UpdateProgressRequest
export interface UpdateProgressRequest {
  UserId: string;
  AddSubjectIds: string[]; // IDs a agregar
  RemoveSubjectIds: string[]; // IDs a remover
}

// Interface para UpdateProgressResponse
export interface UpdateProgressResponse {
  success: boolean;
}
