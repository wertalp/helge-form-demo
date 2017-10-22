/**
 * @Author: Patrick Wertal <wertalp>
 * @Date:   22-Oct-2017
 * @Email:  patrick.wertal@gmail.com
 * @Last modified by:   wertalp
 * @Last modified time: 22-Oct-2017
 * @License: Licenced by PW @2016
 */



import { Injectable ,OnInit} from '@angular/core';
import {Customer } from './model/Customer';



@Injectable()
export class TestDataService implements OnInit{

 customers: Customer[];

  constructor() {
    this.customers = [
      new Customer("Bit-Coin-222-ref-xx-AUT-23332---23333",1222,"Patrick","Wertal","patty@gmail.com","+41 79886776766","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT Patrick Wertal"),
      new Customer("Bit-Coin-333-ref-xx-GER-23332---23333",1444,"Thomas","Gilbert","thommy@gmail.com","+41 884448844884","DAS IST MEIN ANLIEGEN FÜR ZUKUNFT  Thomas see you"),

]
   }

  ngOnInit() {
  }




  getTestdata() {return this.customers }



}
