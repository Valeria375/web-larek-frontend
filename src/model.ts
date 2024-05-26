import { ICard } from './types';

export class model {
	constructor() {}
	getCardList() {
		const cards: string[] = ['red', 'green', 'blue'];
		return cards;
	}
	getCardInterface() {
		
		let card: ICard[]=[];
		card.push(this.createCard('name'));
		return card;
	}
	createCard(title: string) {
		const newCard: ICard = {
			id: 'sdfsdf',
			title: title,
			price: 556,
			description: 'sdfsd',
			image: 'sdfsd',
			category: 'другое',
			button: 'sdfsd',
		};
		return newCard;
	}
}
