import { ensureElement } from './utils/utils';
import { ICard } from './types';
import { Card } from './Card';
import { EventEmitter } from './components/base/events';
//менять цифру товаров в корзине + добавлять карточку
export class page {
	gallery: HTMLTemplateElement;
	events: EventEmitter;
	constructor() {
		this.gallery = ensureElement<HTMLTemplateElement>('.gallery');
		this.events = new EventEmitter();
	}
	addCard(item: ICard) {
		const card = new Card();
		card.category = item.category;
		card.description = item.description;
		card.image = item.image;
		card.price = item.price;
		card.title = item.title;
		this.gallery.appendChild(card.HtmlItem);
	}
	addCardFn(
		category: string,
		title: string,
		price: number | null,
		description: string,
		image: string
	) {
		const card = new Card();
		card.category = category;
		// card.description = description;
		card.image = image;
		card.price = price;
		card.title = title;
		this.gallery.appendChild(card.HtmlItem);
	}
    init(){
        this.events.emit('page:init');
    }
}
