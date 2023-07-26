import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private http: HttpClient, private toastr: ToastrService, private productService : ProductService) { }

  product: any;
  priceWithDiscount: number = 0;

  ngOnInit(): void {
    this.product = this.productService.getProduct();
    this.getPriceWithDiscount();
  }

  showSuccess(title : string) {
    this.toastr.success(title + ' \n wurde zu deinem Account hinzugefügt');
  }

  getPriceWithDiscount(): void {
    this.priceWithDiscount = (this.product.price / 100) * (100 - this.product.discount);
  }

  addToCart(): void {
    this.http.post<any>('http://localhost:8000/api/cart/add', {
      amount: 1,
      id: this.product.id
    });
    this.showSuccess(this.product.title);
  }
}
