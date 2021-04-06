import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ChartsModule} from 'ng2-charts';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
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
        MatIconModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
