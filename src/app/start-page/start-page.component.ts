import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductItem} from '../model/product-item.model';
import {ProductService} from '../service/product.service';
import {Subscription} from 'rxjs';
import {LoginComponent} from '../login/login.component';
import {User} from '../model/user.model';
import {OrderItemComponent} from './order-item/order-item.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit, OnDestroy {

  constructor(public dialog: MatDialog, private productService: ProductService, private orderService: OrderService) {
  }

  products: ProductItem[] = [];
  code: string;
  useLocalStorage = false;
  useService = true;
  user: User = null;
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    if (this.useService) {
      this.getDataFromService();
    } else {
      this.products = this.useLocalStorage ? this.initDataFromLocalStorage() : this.initData();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  openProductForm(): void {
    const dialogRef = this.dialog.open(ProductItemComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // if (result && result.name) {
      //   this.products.push(result);
      // }
      if (result && result.name && this.useService) {
        this.persist(result);
      } else if (this.useLocalStorage) {
        localStorage.setItem('products', JSON.stringify(this.products));
      }
    });
  }

  openLoginForm(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name) {
        console.log(result);
        this.user = result;
        this.products = this.products.filter(p => p.userId === 1);
      }
    });
  }

  openOrderForm(product: ProductItem): void {
    const dialogRef = this.dialog.open(OrderItemComponent, {
      width: '550px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        result.productId = product.id;
        result.userId = 1; // TODO: TEMP
        this.subscriptions.push(this.orderService.save(this.mapOrder(result)).subscribe(val => {
          console.log(val);
        }));
      }
    });
  }

  private mapOrder(order: any): any {
    return {
      user_id: order.userId,
      product_id: order.productId,
      customer_first_name: order.firstName,
      customer_last_name: order.lastName,
      customer_mail: order.mail,
      customer_address: order.address,
      quantity: order.quantity,
      price: order.price,
      accepted: 0,
    };
  }

  openOrders(): void {
    const dialogRef = this.dialog.open(OrderListComponent, {
      width: '80%'
    });

    dialogRef.afterClosed().subscribe(() => {
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

  private getDataFromService(): void {
    this.subscriptions.push(
      this.productService.getAll().subscribe(products => {
        this.products = products.map(pr => {
          const row: ProductItem = {
            id: pr.Id,
            name: pr.Name,
            price: pr.Price,
            quantity: pr.Quantity,
            description: pr.Description,
            userId: Number.parseInt(pr.user_id, 0)
          };
          return row;
        });
        if (this.user != null) {
          this.products = this.products.filter(p => p.userId === 1);
        }
      })
    );
  }

  private persist(item: ProductItem): void {
    console.log('item', item);
    const row = {
      Name: item.name,
      Price: item.price,
      Quantity: item.quantity,
      Description: item.description,
      user_id: 1 // TODO: TEMP
    };
    this.subscriptions.push(
      this.productService.save(row).subscribe(() => {
        this.getDataFromService();
      })
    );
  }

  public deleteProduct(id: number): void {
    console.log(id);
    this.subscriptions.push(
      this.productService.delete(id).subscribe(() => {
        this.getDataFromService();
      })
    );
  }

}
