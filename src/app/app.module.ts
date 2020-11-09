import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { Column1Component } from './column1/column1.component';
import { Column2Component } from './column2/column2.component';
import { Column3Component } from './column3/column3.component';
import { Column4Component } from './column4/column4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Column1Component,
    Column2Component,
    Column3Component,
    Column4Component
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
