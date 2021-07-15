import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { students } from './students';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  getStudentList() {
    let url = "./assets/table.json";
    return this.httpClient.get<students[]>(url);
  }
}
