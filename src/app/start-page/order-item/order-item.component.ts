import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

import {ProductItem} from '../../model/product-item.model';
import {OrderSubmitItemComponent} from './order-submit-item/order-submit-item.component';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  public form: FormGroup;
  public sumPrice = 0;

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: ProductItem,
              private dialogRef: MatDialogRef<OrderItemComponent>,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      quantity: new FormControl(1, Validators.compose([Validators.min(1), Validators.max(this.data.quantity), Validators.required])),
      mail: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  public get calculateSum(): number {
    return this.form.get('quantity').value * this.data.price;
  }

  public submitOrder(): void {
    const dialogRef = this.dialog.open(OrderSubmitItemComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        let json = this.form.getRawValue();
        json.price = this.calculateSum;
        this.dialogRef.close(json);
      }
    });
  }

}
