import { Modal } from './modal';
import { modalBasket } from './modalBasket';
import { ICard } from './types';
import { cloneTemplate, ensureElement } from './utils/utils';

export class ModalPreview extends Modal {
	previewContent: HTMLTemplateElement;
	titlePreview: HTMLElement;
	textPreview: HTMLElement;
	pricePreview: HTMLElement;
	imagePreview: HTMLImageElement;
	addButtonToBasket: HTMLElement;
	categoryPreview: HTMLElement;
	cardInterface: ICard;
	constructor() {
		super();
		const cardPreviewTemplate =
			ensureElement<HTMLTemplateElement>('#card-preview');
		this.previewContent = cloneTemplate(cardPreviewTemplate);
		this.titlePreview = ensureElement<HTMLElement>(
			'.card__title',
			this.previewContent
		);
		this.textPreview = ensureElement<HTMLElement>(
			'.card__text',
			this.previewContent
		);
		this.pricePreview = ensureElement<HTMLElement>(
			'.card__price',
			this.previewContent
		);
		this.imagePreview = ensureElement<HTMLImageElement>(
			'.card__image',
			this.previewContent
		);
		this.addButtonToBasket = ensureElement<HTMLElement>(
			'.card__button',
			this.previewContent
		);
		this.categoryPreview = ensureElement<HTMLElement>(
			'.card__category',
			this.previewContent
		);

		this._content.appendChild(this.previewContent);
	}
	openForCard(item: ICard) {
		this.cardInterface = item;
		this.title = item.title;
		this.price = item.price;
		this.category = item.category;
		this.image = item.image;
		this.description = item.description;
		this.open();
	}
	addToBasket() {
		this.addButtonToBasket.addEventListener('click', () => {
			// 	const card = ensureElement<HTMLElement>('.card', this.previewContent);
			const modal = new modalBasket();
			const title = ensureElement<HTMLElement>(
				'.card__title',
				this.previewContent
			);
			const price = ensureElement<HTMLElement>(
				'.card__price',
				this.previewContent
			);
			modal.addItem(title.innerText, Number(price.innerText));
		});
	}
	set title(value: string) {
		this.titlePreview.innerText = value;
	}
	set price(value: number) {
		this.pricePreview.innerText = `стоит  ${value} синапсы`;
	}
	set category(value: string) {
		this.categoryPreview.innerHTML = value;
	}
	set image(value: string) {
		this.imagePreview.src = value;
	}
	set description(value: string) {
		this.textPreview.innerText = value;
	}
}
