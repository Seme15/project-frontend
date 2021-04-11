import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ChartsModule} from 'ng2-charts';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginComponent,
  ],
  imports: [
    NoopAnimationsModule,
    RouterModule,
    ToastrModule.forRoot({}),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ChartsModule,
    MatIconModule,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
