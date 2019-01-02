import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDeckPage } from './card-deck/card-deck.page';

@NgModule({
	import: [
		IonicModule,
		CommonModule
	],
	declarations: [
		CardDeckPage
	]
})
export class CardPageModule {}