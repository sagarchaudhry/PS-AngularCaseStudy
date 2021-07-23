import { Component, OnInit } from '@angular/core';
import { sortMethod } from 'src/app/common/sort';
import { SortType } from 'src/app/common/sortType.modal';
import { ECommerceService } from './e-commerce.service';
import { Items } from './items';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {

  constructor(private ecommerceService: ECommerceService) { }
  filteredList: Items[] = [];
  priceFilter: any;
  view = 'grid';
  priceDropdown = "select";
  itemsDetails: Items[] = [];

  ngOnInit(): void {
    this.getCartDetails();
    this.priceFilter = SortType;
  }

  changeView(value: string) {
    this.view = value;
  }
  getCartDetails() {
    this.ecommerceService.getItems().subscribe(
      (data: Items[]) => {
        this.itemsDetails.push(...data);
        this.filteredList.push(...data);
      });
  }
  sortingBy(event: any) {
    if (event.target.value == SortType.NONE) {
      this.filteredList = this.itemsDetails;
    }
    else {
      this.filteredList.sort(sortMethod('price', event.target.value));
    }

  }

}
