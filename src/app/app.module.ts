import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { TravelService } from './services/travel-service/travel-service.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './pages/accueil/bottom-sheet/bottom-sheet.component';

import { SwipeAngularListModule } from 'swipe-angular-list';
import { ShareComponent } from './pages/share/share.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { JoinComponent } from './pages/join/join.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CreateComponent } from './pages/create/create.component';
import { LoadingComponent } from './pages/loading/loading.component';
export function playerFactory() {
	return player;
  }

@NgModule({
	declarations: [
		AppComponent,
		AccueilComponent,
		BottomSheetComponent,
		ShareComponent,
  JoinComponent,
  CreateComponent,
  LoadingComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		[LottieModule.forRoot({ player: playerFactory })],
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
		MatBottomSheetModule,
		MatProgressSpinnerModule,
		HttpClientModule,
		HammerModule,
		SwipeAngularListModule,
		ClipboardModule,
		MatSnackBarModule
	],
	providers: [TravelService],
	bootstrap: [AppComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
