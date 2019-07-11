import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { Customer } from '../customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted=false;
  customer : Customer;
  Username : string;
  Password : string;

  constructor(private dataService: DataService) { 
  
  this.submitted=false;
  }

  private authenticateUsers()
  {
   this.dataService.getCustomerDetails(this.Username).then(customer => this.customer = customer);
   if(this.customer!=null)
   {
    this.submitted=true;
   }
   else
   {
   this.submitted=false;
   }

  }
  ngOnInit() {
  this.Username=" ";
  this.Password=" ";
  }
 onSubmit()
 {
    this.authenticateUsers();
 }
}
