import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { LoadingController } from '@ionic/angular';
import { Card } from '../../shared/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss']
})
export class CardDetailPage {

  card: Card;

  loader: any;

  constructor(private route: ActivatedRoute, 
              private cardService: CardService,
              private loadingCtrl: LoadingController) { }

  private async presentLoading(){
    const loader = await this.loadingCtrl.create({
      content: 'Please wait...',
      translucent: true
    });

    loader.present();

    return loader;
  }

  async ionViewWillEnter(){
    const cardId = this.route.snapshot.paramMap.get('cardId');

    this.loader = await this.presentLoading();
    this.cardService.getCardsById(cardId).subscribe(
    (card: Card[]) => {
      this.card = card.map((card: Card) => {
        card.text = this.cardService.replaceCardTextLine(card.text);

        return card;
      })[0];
      this.loader.dismiss();
    })
  }

  updateImage() {
    this.card.img = 'assets/images/DefaultCard.png'
  }

}
