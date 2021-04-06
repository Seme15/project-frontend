import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductItem} from '../model/product-item.model';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  products: ProductItem[] = [];
  code: string;
  useLocalStorage = true;

  ngOnInit(): void {
    this.products = this.useLocalStorage ? this.initDataFromLocalStorage() : this.initData();
  }

  openProductForm(): void {
    const dialogRef = this.dialog.open(ProductItemComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name) {
        this.products.push(result);
      }
      if (this.useLocalStorage) {
        localStorage.setItem('products', JSON.stringify(this.products));
      }
    });
  }

  private initData(): ProductItem[] {
    return [
      {
        id: 1,
        name: 'Produkt A',
        price: 5.00,
        quantity: 2,
        description: 'Lorem ipsum'
      },
      {
        id: 2,
        name: 'Produkt B',
        price: 4.99,
        quantity: 4,
        description: 'Lorem ipsum'
      },
      {
        id: 3,
        name: 'Produkt C',
        price: 6.16,
        quantity: 14,
        description: 'Lorem ipsum dolor sit amen'
      }
    ];
  }

  private initDataFromLocalStorage(): ProductItem[] {
    const result: ProductItem[] = JSON.parse(localStorage.getItem('products'));
    return result && result.length > 0 ? result : [];
  }

}
