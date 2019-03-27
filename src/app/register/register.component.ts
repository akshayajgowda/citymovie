import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  customer = {name:'', address:'', email:'', phone:'', password:''};

  constructor(private router:Router, public actionSheetController: AlertController, private customerService:CustomerService) { }

  ngOnInit() {}

  onRegister() {
    console.log(this.customer);
    this.customerService.addRemoteCustomer(this.customer).subscribe(()=>{this.router.navigate(['/login']);});
  }
 
    
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'You are registered',
      buttons: [
      {
        text: 'Close',
        role: 'cancel',
       
      }]
    });
    await actionSheet.present();
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  }


