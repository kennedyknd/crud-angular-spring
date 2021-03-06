import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpCliente: HttpClient) { }

  list(): Course[]{
    return [
      {id: "1", name: 'Angular', category: 'Front'}
    ];
  }
}
