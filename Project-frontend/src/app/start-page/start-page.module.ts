import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [ProductItemComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class StartPageModule { }
