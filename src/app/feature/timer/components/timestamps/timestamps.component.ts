import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.css']
})
export class TimestampsComponent implements OnInit {
  @Input() timeStamps: any;
  constructor() { }

  ngOnInit(): void {
  }


}
