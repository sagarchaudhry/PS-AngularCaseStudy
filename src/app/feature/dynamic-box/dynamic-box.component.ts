import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dynamic-box',
  templateUrl: './dynamic-box.component.html',
  styleUrls: ['./dynamic-box.component.css']
})
export class DynamicBoxComponent implements OnInit {
  count = 100;
  dataCount: any = [];
  constructor(private renderer: Renderer2,
    private el: ElementRef) { }


  ngOnInit(): void {
    this.dataCount = Array(this.count).fill(this.count);
    this.renderer.addClass(this.el.nativeElement.children[0].children[0], 'row');
  }
  btnClick(val: number) {
    alert(`Button '${val}' is clicked`);
  }
}
