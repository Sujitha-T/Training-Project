import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { HelloComponent } from './hello.component';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from '../products/products.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout/module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatToolbarModule,MatIconModule,AppRoutingModule,MatGridListModule,MatCardModule,MatDividerModule,FlexLayoutModule,BrowserAnimationsModule],
  declarations: [ AppComponent,HeaderComponent,HelloComponent,ProductsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
