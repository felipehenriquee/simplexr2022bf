import { IndividualComponent } from './pages/individual/individual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErroComponent } from './pages/erro/erro.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [{
  path:"home/:id",
  component: HomeComponent,
},
{
  path:"model/:id",
  component: IndividualComponent,
},
{
  path:"admin/:id",
  component: AdminComponent,
},
{
  path:"erro",
  component: ErroComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
