/**
 * @Author: Patrick Wertal <wertalp>
 * @Date:   07-Oct-2017
 * @Email:  patrick.wertal@gmail.com
 * @Last modified by:   wertalp
 * @Last modified time: 22-Oct-2017
 * @License: Licenced by PW @2016
 */



import { Component,OnInit } from '@angular/core';
import {TestDataService} from './test-data-service.service';
import {Customer} from './model/Customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private title = 'New Coins HELGE POHL';
     thecustomers :Customer[] ;
  constructor (private testDataService: TestDataService){
    this.thecustomers = this.testDataService.getTestdata();
  }

  ngOnInit() {
console.log("nginti now ");
for (let customer of this.thecustomers) {
          console.log(customer.amount); // 1, "string", false
          console.log(customer.email); // 1, "string", false
          console.log(customer.familyname); // 1, "string", false
          console.log(customer.phone); // 1, "string", false
          console.log(customer.prename); // 1, "string", false
          console.log(customer.refid); // 1, "string", false
          console.log(customer.familyname); // 1, "string", false

}

  }


}
