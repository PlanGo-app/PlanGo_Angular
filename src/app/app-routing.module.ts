import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ShareComponent } from './pages/share/share.component';

const routes: Routes = [
	{ path: 'accueil', component: AccueilComponent },
	{ path: 'share/:invitationCode', component: ShareComponent },
	{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
