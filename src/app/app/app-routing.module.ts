import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
 {
    path: '',
    loadChildren: () => import('./start-page/start-page.module').then(mod => mod.StartPageModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
