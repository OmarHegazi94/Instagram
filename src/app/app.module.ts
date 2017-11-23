import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule, MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
// import { FileUploaderModule } from 'ng4-file-upload/file-uploader.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdCardModule,
    MdSliderModule,
    MdSlideToggleModule,
    // FileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
