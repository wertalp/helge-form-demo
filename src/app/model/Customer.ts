/**
 * @Author: Patrick Wertal <wertalp>
 * @Date:   09-Oct-2017
 * @Email:  patrick.wertal@gmail.com
 * @Last modified by:   wertalp
 * @Last modified time: 09-Oct-2017
 * @License: Licenced by PW @2016
 */



export class Customer {

  constructor(
    public refid: string,
    public amount : number ,
    public prename: string,
    public familyname: string,
    public email : string,
    public phone : string,
    public message : string
  ) {  }

}
