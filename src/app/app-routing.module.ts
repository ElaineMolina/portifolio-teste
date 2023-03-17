import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './features/blog-component/blog.component';
import { HomeComponent } from './features/home-component/home.component';
import { PortifolioComponent } from './features/portifolio-component/portifolio.component';


const routes: Routes = [
  { path: '',  redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'portifolio', component: PortifolioComponent },
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
