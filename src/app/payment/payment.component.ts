import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router, private movieService:MovieService,  public actionSheetController: AlertController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Payment Successful',
      buttons: [
      {
        text: 'Close',
        role: 'cancel',
       
      }]
    });
    await actionSheet.present();
  }


  ngOnInit() {}

}
