import { Modal } from './modal';
import { modalBasket } from './modalBasket';
import { cloneTemplate, ensureElement } from './utils/utils';

export class ModalPreview extends Modal {
	previewContent: HTMLTemplateElement;
	titlePreview: HTMLElement;
	textPreview: HTMLElement;
	pricePreview: HTMLElement;
	imagePreview: HTMLElement;
	addButtonToBasket: HTMLElement;
	categoryPreview: HTMLElement;
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
		this.imagePreview = ensureElement<HTMLElement>(
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
	addToBasket() {
		this.addButtonToBasket.addEventListener('click', () => {
		// 	const card = ensureElement<HTMLElement>('.card', this.previewContent);
		const modal = new  modalBasket();
		const title = ensureElement<HTMLElement>('.card__title',
			this.previewContent);
		const price  = ensureElement<HTMLElement>(
			'.card__price',
			this.previewContent
		);
		modal.addItem(title.innerText,Number(price.innerText));
		});
	}
}
