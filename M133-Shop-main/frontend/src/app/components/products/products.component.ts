import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faWarehouse, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  constructor(private toastr: ToastrService, private http: HttpClient, private matDialog: MatDialog, private productService: ProductService) {
  }

  async ngOnInit() {
    this.http.get<any>('http://localhost:8000/api/products/').subscribe(data => {
        this.products = data;
        console.log(data);
    });
  }

  //Font-Awesome icons
  faCartPlus = faCartPlus;

  openDialog(product:any) {
    this.productService.setProduct(product)
    this.matDialog.open(ModalComponent);
  }
}
