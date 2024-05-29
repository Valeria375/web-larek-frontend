import { EventEmitter } from './components/base/events';
import { Modal } from './modal';
import { ICard } from './types';
import { ensureElement, cloneTemplate } from './utils/utils';

export class modalBasket extends Modal {
	basketTemp: HTMLTemplateElement;
	basketContent: HTMLElement;
    itemCount: number;
    totalPrice: number;
    basketPriceHTMLElement:HTMLElement;
    events: EventEmitter;
	// modalWindow:HTMLTemplateElement
	constructor() {
		super();
		const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
		// this.basketContent = ensureElement<HTMLElement>('.basket__list', basketTemplate);
		// const cardBasketTemplate =
		// 	ensureElement<HTMLTemplateElement>('#card-basket');
		// this.basketContent.appendChild(cloneTemplate(cardBasketTemplate))
		// this.basketContent =cloneTemplate(cardBasketTemplate)
		this.basketTemp = cloneTemplate(basketTemplate);
		this.basketContent = ensureElement<HTMLElement>('.basket__list', this.basketTemp);
        this.basketPriceHTMLElement = ensureElement<HTMLElement>('.basket__price', this.basketTemp);
		this.itemCount = 0;
        this.totalPrice = 0;
		this._content.appendChild(this.basketTemp);
        this.events = new EventEmitter();
        
        
		// this._content.appendChild(this.basketContent);
	}
    addItem(title_in:string, price_in: number){
        this.itemCount ++;
        const cardBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
		const item= cloneTemplate(cardBasketTemplate);
        const index = ensureElement<HTMLElement>('.basket__item-index', item);
        const price = ensureElement<HTMLElement>('.card__price', item);
        const title = ensureElement<HTMLElement>('.card__title', item);
        index.innerText = String(this.itemCount);
        title.innerText = title_in;
        price.innerText = String(price_in ) + ' синапсов';
        this.totalPrice += price_in;
        this.basketContent.appendChild(item);
    this.basketPriceHTMLElement.innerText=String(this.totalPrice)+' синапсов';
    }
addItemInterface(item:ICard){
    this.itemCount ++;
    const cardBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
    const cardItem= cloneTemplate(cardBasketTemplate);
    const index = ensureElement<HTMLElement>('.basket__item-index', cardItem);
    const price = ensureElement<HTMLElement>('.card__price', cardItem);
    const title = ensureElement<HTMLElement>('.card__title', cardItem);
    const deleteButton = ensureElement<HTMLElement>('.basket__item-delete', cardItem)
    index.innerText = String(this.itemCount);
    title.innerText = item.title;
    price.innerText =String(item.price) + ' синапсов';;
    this.totalPrice += item.price;
    this.basketContent.appendChild(cardItem);
    this.basketPriceHTMLElement.innerText=String(this.totalPrice)+' синапсов';
    deleteButton.addEventListener('click', ()=>{
        alert(item.title);
    })
}
init(){
    this.events.emit('onLoard');
}
}
//  export class ModalCardBasket extends modalBasket{
//     basketContent: HTMLTemplateElement;
//     constructor() {
// 		super();
// 		// const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
// 		const cardBasketTemplate =
// 			ensureElement<HTMLTemplateElement>('#card-basket');
// 		this.basketContent = cloneTemplate(cardBasketTemplate);
// 		this._content.appendChild(this.basketContent);
// 	}
//  }
