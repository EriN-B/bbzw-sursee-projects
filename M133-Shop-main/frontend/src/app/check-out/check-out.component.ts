import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  checkOutForm: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.initializeFormFields();
  }

  private initializeFormFields() {
    this.checkOutForm = this.formBuilder.group({
      prename: ['', {validators: [Validators.required, Validators.max(25)]}],
      name: ['', {validators: [Validators.required, Validators.max(25)]}],
      email: ['', {validators: [Validators.required, Validators.email]}]
    });
  }

  submitForm(): void {
    this.http.post("http://localhost:4200/api/order/place", {
        name: this.checkOutForm.get('name').value,
        firstName: this.checkOutForm.get('prename').value,
        email: this.checkOutForm.get('email').value,
    });
  }
}
