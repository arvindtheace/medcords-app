import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery-pinch/dist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
