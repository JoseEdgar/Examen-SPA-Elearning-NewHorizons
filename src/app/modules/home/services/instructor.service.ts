import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInstructor } from '../components/instructor/interface/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

    url= 'http://examen-nh.jcramireztello.com/api/v1/instructor/';

  constructor(private http: HttpClient) { }

  getinstructor() {
    return this.http.get<IInstructor[]>(`${this.url}`);
  }
}
