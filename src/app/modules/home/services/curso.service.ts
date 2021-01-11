import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurso } from '../interface/cursointerface';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://examen-nh.jcramireztello.com/api/v1/course/';

  constructor(private http: HttpClient) { }

}
