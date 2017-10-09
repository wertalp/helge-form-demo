/**
 * @Author: Patrick Wertal <wertalp>
 * @Date:   07-Oct-2017
 * @Email:  patrick.wertal@gmail.com
 * @Last modified by:   wertalp
 * @Last modified time: 09-Oct-2017
 * @License: Licenced by PW @2016
 */



import { Component, OnInit } from '@angular/core';
import {Customer } from '../../model/Customer';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {


  private customers: Customer[];
  private selectedCustomer: Customer;
  private interrests : any[];
  constructor() { }

  ngOnInit() {
    this.interrests = [
      {
        "name": "wanna sign"
      },
      {
        "name": "want information"
      },
      {
        "name": "send me email"
      },
      {
        "name": "give me a callback"
      }
    ];

    this.selectedCustomer = new Customer("Bit-Coin-000-ref-xx-NOR-23332---23333",1222,"Patrick","Wertal","patty@gmail.com","+41 79886776766","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT")

    this.customers = [this.selectedCustomer,
      new Customer("Bit-Coin-222-ref-xx-AUT-23332---23333",1222,"Patrick","Wertal","patty@gmail.com","+41 79886776766","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT Patrick Wertal"),
      new Customer("Bit-Coin-333-ref-xx-GER-23332---23333",1444,"Thomas","Gilbert","thommy@gmail.com","+41 884448844884","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT  Thomas see you"),
      new Customer("Bit-Coin-666-ref-xx-BRD-23332---23333",1232,"Christoph","P","chriss234@gmail.com","+43 79886776766","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT  Chrissi"),
      new Customer("Bit-Coin-222-ref-xx-ZSA-23332---23333",1222,"Patrizia","Martini","patrizia@gmail.com","+41 79886776766","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT Patrick Wertal"),
      new Customer("Bit-Coin-888-ref-xx-ITA-23332---23333",12212,"Helge","Volker","helge@gmail.com","+41 79886776766","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT Helge wollte das nur anbringen"),
      new Customer("Bit-Coin-111-ref-xx-SUI-23332---23333",1222,"Danny","Peters","patty@gmail.com","+41 79886776766","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT das gilt auch für ev weitere.."),
      new Customer("Bit-Coin-222-ref-xx-FRA-23332---23333",1222,"Tamara","Oblasser","tammy@gmail.com","+41 79886776766","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT deien Tamara")]
  }

  openDialog()  {

   this.selectedCustomer = this.customers[Math.floor(Math.random()* this.customers.length) ];
  }
}
