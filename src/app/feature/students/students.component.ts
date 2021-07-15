import { Component, OnInit } from '@angular/core';
import { sortList } from 'src/app/common/sort';
import { students } from './students';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentItems: students[] = [];
  studentHeader: string[] = [];
  sortType: boolean = false;
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getStudentList();
  }
  getStudentList() {
    this.studentService.getStudentList().subscribe(
      (res) => {
        this.studentItems = res;
        this.studentHeader = Object.keys(res[0]);
      }
    )
  }

  sortTable(value: string) {
    this.sortType = !this.sortType;
    this.studentItems.sort(this.sortByProperty(value, this.sortType));
  }
  sortByProperty(value: string, sortType: boolean) {
    return (obj1: any, obj2: any) => {
      if ((sortType ? obj1[value] : obj2[value]) < (sortType ? obj2[value] : obj1[value])) {
        return -1;
      }
      if ((sortType ? obj1[value] : obj2[value]) < (sortType ? obj2[value] : obj1[value])) {
        return 1;
      }
      return 0;
    }
  }

}
