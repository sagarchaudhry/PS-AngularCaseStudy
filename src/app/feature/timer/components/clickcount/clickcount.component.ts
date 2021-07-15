import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickcount',
  templateUrl: './clickcount.component.html',
  styleUrls: ['./clickcount.component.css']
})
export class ClickcountComponent implements OnInit {

  constructor() { }
  @Input() startCount: any = 0;
  @Input() pauseCount: any = 0;
  ngOnInit(): void {
  }

}
