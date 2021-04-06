import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductItem} from '../../model/product-item.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              // public dialogRef: MatDialogRef<ProductItemComponent>,
              // @Inject(MAT_DIALOG_DATA) public data: ProductItem
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      price: new FormControl(null, Validators.compose([Validators.min(0.01), Validators.required])),
      quantity: new FormControl(1, Validators.compose([Validators.min(1), Validators.required])),
      description: new FormControl('')
    });
  }

}
