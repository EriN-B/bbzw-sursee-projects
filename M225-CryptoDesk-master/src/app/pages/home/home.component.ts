import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CoinService} from "../../services/coin.service";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoadingDialogComponent } from "../loading-dialog/loading-dialog.component";

export interface Coin {
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public coinService:CoinService,private router: Router,public dialog: MatDialog) { }

  // @ts-ignore
  public coinID: string[] = [];

  myControl = new FormControl();
  options: Coin[] = [];
  filteredOptions: Observable<Coin[]> | undefined;
  inputId: any;

  async ngOnInit() {
    this.openDialog();
    await this.coinService.getCoins().then((data =>{
      this.coinID = data;
    }));
    this.closeDialog();
  }

  addItemsToAutoComplete(){
    if(this.options.length == 0){
      for(let id of this.coinID){
        this.options.push({
          id: id
        })
      }
      this.setupAutocomplete();
    }
  }

  navigateToDetailPage(){
    this.router.navigate(['/detail', { id: this.inputId.id }]);
  }


  setupAutocomplete(){
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.id),
        map(id => id ? this._filter(id) : this.options.slice())
      );
  }

  displayFn(user: Coin): string {
    return user && user.id ? user.id : '';
  }

  private _filter(name: string): Coin[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.id.toLowerCase().indexOf(filterValue) === 0);
  }

  openDialog(){
    this.dialog.open(LoadingDialogComponent);
  }

  closeDialog(){
    this.dialog.closeAll();
  }
}
