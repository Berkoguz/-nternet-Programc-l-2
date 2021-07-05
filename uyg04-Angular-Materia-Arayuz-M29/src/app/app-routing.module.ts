import { KullanicilisteleComponent } from './components/kullanicilistele/kullanicilistele.component';
import { ArabalisteleComponent } from './components/arabalistele/arabalistele.component';
import { ArabaComponent } from './components/araba/araba.component';
import { KullanicilarComponent } from './components/kullanicilar/kullanicilar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kullanicilar',
    component: KullanicilarComponent
  },
  {
    path: 'araba',
    component: ArabaComponent
  },
  {
    path: 'arabalistele/:kullaniciId',
    component: ArabalisteleComponent
  },
  {
    path: 'kullanicilistele/:arabaId',
    component: KullanicilisteleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
