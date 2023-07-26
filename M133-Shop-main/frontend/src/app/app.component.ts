import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faWarehouse, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

    //Font-Awesome icons
    faShoppingCart = faShoppingCart;
    faWarehouse = faWarehouse;
    faCartPlus = faCartPlus;

}
