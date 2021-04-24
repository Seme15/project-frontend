import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order.service';

export interface Order {
  id: number;
  customerFirstName: string;
  customerLastName: string;
  customerMail: string;
  customerAddress: string;
  quantity: number;
  price: number;
  accepted: boolean;
  productId?: number;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['imię', 'nazwisko', 'adres', 'mail', 'ilość', 'cena', 'zatwierdzono'];
  dataSource = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders(): void {
    this.orderService.getAll(1).subscribe(orders => {
      this.dataSource = this.map(orders);
    });
  }

  private map(orders: any[]): Order[] {
    return orders.map(order => {
      const o: Order = {
        id: order.id,
        customerMail: order.customer_mail,
        customerFirstName: order.customer_first_name,
        customerLastName: order.customer_last_name,
        customerAddress: order.customer_address,
        quantity: order.quantity,
        price: order.price,
        accepted: order.accepted === '1',
        productId: order.product_id
      };
      return o;
    });
  }

  finish(data: any): void {
    this.orderService.finish('1', data.id).subscribe(() => {
      data.accepted = true;
    });
  }

  delete(data: any): void {
    console.log(data);
    this.orderService.delete(data.id).subscribe(() => {
      this.getOrders();
    });
  }

}
