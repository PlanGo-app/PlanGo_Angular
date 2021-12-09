import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AccueilComponent } from './accueil/accueil.component';
import { TravelService } from './services/travel-service/travel-service.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
  AccueilComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule, 
		FormsModule, 
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
		HttpClientModule
	],
	providers: [TravelService],
	bootstrap: [AppComponent]
})
export class AppModule { }
