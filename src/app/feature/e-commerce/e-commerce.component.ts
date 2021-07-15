import { Component, OnInit } from '@angular/core';
import { sortList } from 'src/app/common/sort';
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
  priceFilter: any = [];
  view = 'grid';
  priceDropdown = "select";
  itemsDetails: Items[] = [];

  ngOnInit(): void {
    this.priceFilter = [{ value: "LTH", name: "Low to High" },
    { value: "HTL", name: "High to Low" }];
    this.getCartDetails();
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
  sortBy(arg: string) {
    this.changeView(arg);
  }
  sortingBy(event: any) {
    if (event.target.value == 'select') {
      this.filteredList = this.itemsDetails;
    }
    else {
      this.filteredList = sortList(event.target.value, this.filteredList);
    }

  }

}
