import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoaderService } from '../../shared/service/loader.service';

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
              private LoaderService: LoaderService) { }

  ionViewWillEnter(){
    const cardId = this.route.snapshot.paramMap.get('cardId');

    this.LoaderService.presentLoading();
    this.cardService.getCardsById(cardId).subscribe(
    (card: Card[]) => {
      this.card = card.map((card: Card) => {
        card.text = this.cardService.replaceCardTextLine(card.text);

        return card;
      })[0];
      this.LoaderService.dismissLoading();
    })
  }

  updateImage() {
    this.card.img = 'assets/images/DefaultCard.png'
  }

}
