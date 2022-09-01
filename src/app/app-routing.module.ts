import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PrincipalComponent } from './principal/principal.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:'',component: AppComponent},
  {path:'login', component: PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
