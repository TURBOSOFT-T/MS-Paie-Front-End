import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private baseUrl = 'http://localhost:8080/api/v1/classes';

  constructor(private http: HttpClient) { }

  getClasse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createClasse(classe: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, classe);
  }

  updateClasse(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteClasse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getClassesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
