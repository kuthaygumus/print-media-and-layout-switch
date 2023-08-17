import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicInFlowLayoutComponent } from './basic-in-flow-layout/basic-in-flow-layout.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInFlowLayoutComponent,
    BasicLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
