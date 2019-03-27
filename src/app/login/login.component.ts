import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  customers = this.customerService.getCustomers();

  constructor(private router:Router, private customerService:CustomerService,  public actionSheetController: AlertController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Send to mail',
      inputs: [{
        name: 'email',
        placeholder: 'Enter your email',
      }],
      buttons: [{
        text: 'Submit email',
        role: 'destructive'    
      },
      {
        text: 'Cancel',
        role: 'cancel',
       
      }]
    });
    await actionSheet.present();
  }

  // onLogin(customer) {

  //   for(var i=0; i<this.customers.length;i++){
  //       if()
  //   }
  // }

  onGuest() {
    this.router.navigate(['/home']);
  }
  onRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {}

}
