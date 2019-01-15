export interface CardDeck {
	
	name: string;
	types: string[];
}

export interface card {
	cardId: string;
	cardSet: string;
	img: string;
	imgGold: string;
	name: string;
	text: string;

	cost:  number;

	attack: number;
	health: number;

	rarity: string;
	dbId: string;
	faction: string;
	type: string;
	playerClass: string;
	locale: string;


}