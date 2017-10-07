/**
 * @Author: Patrick Wertal <wertalp>
 * @Date:   07-Oct-2017
 * @Email:  patrick.wertal@gmail.com
 * @Last modified by:   wertalp
 * @Last modified time: 07-Oct-2017
 * @License: Licenced by PW @2016
 */



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
