import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CreateComponent } from './pages/create/create.component';
import { JoinComponent } from './pages/join/join.component';
import { ShareComponent } from './pages/share/share.component';

const routes: Routes = [
	{ path: 'accueil', component: AccueilComponent },
	{ path: 'share/:invitationCode', component: ShareComponent },
	{ path: 'join', component: JoinComponent },
	{ path: 'create', component: CreateComponent },
	{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
