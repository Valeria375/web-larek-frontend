import { ICard } from './types';

export class model {
	basketList: ICard[];
	constructor() {
		this.basketList = [];
	}
	getCardList() {
		const cards: string[] = ['red', 'green', 'blue'];
		return cards;
	}
	getCardInterface() {
		let card: ICard[] = [];
		card.push(this.createCard('бусина'));
		return card;
	}
	createCard(title: string) {
		const newCard: ICard = {
			id: 'sdfsdf',
			title: title,
			price: 555,
			description: 'sdfsd',
			image:
				'https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/20/65c499e3-cc15-4869-be70-5108ff619b61.jpeg',
			category: 'софт-скилл',
			button: 'sdfsd',
		};
		return newCard;
	}
	addToBasket(item: ICard) {
		this.basketList.push(item);
		for (const item of this.basketList) {
			console.log(item.title);
		}
	}
	getBasketList() {
		return this.basketList;
	}
}
