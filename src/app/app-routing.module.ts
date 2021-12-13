import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';

const routes: Routes = [
	{ path: 'accueil', component: AccueilComponent },
	{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
    // { path: '**', component: ConnectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
