/**
 * @Author: Patrick Wertal <wertalp>
 * @Date:   07-Oct-2017
 * @Email:  patrick.wertal@gmail.com
 * @Last modified by:   wertalp
 * @Last modified time: 22-Oct-2017
 * @License: Licenced by PW @2016
 */



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalenderComponentComponent } from './components/calender-component/calender-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import {TestDataService} from './test-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    CalenderComponentComponent,
    NavbarComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [TestDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
