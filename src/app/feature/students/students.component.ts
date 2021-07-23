import { Component, OnInit } from '@angular/core';
import { sortMethod } from 'src/app/common/sort';
import { SortType } from 'src/app/common/sortType.modal';
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
  sortType: any;
  sortingType = SortType;
  currentSortColumn!: string;
  studentList: students[] = [];
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.sortType = this.sortingType.NONE;
    this.getStudentList();
  }
  getStudentList() {
    this.studentService.getStudentList().subscribe(
      (res) => {
        this.studentList.push(...res)
        this.studentItems.push(...res);
        this.studentHeader = Object.keys(res[0]);
      }
    )
  }

  sortTable(type: string, sortColumn: string) {
    if (this.currentSortColumn !== sortColumn) {
      this.sortType = this.sortingType.ASC;
      this.currentSortColumn = sortColumn;
    }
    if (type === this.sortingType.NONE) {
      this.studentItems.length = 0;
      this.studentItems.push(...this.studentList);
      this.sortType = this.sortingType.ASC;
    }
    if (type === this.sortingType.ASC) {
      this.studentItems.sort(sortMethod(sortColumn, type))
      this.sortType = this.sortingType.DESC;
    }
    if (type === this.sortingType.DESC) {
      this.studentItems.sort(sortMethod(sortColumn, type))
      this.sortType = this.sortingType.NONE;
    }
  }

}
