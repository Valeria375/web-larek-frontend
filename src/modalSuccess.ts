import { EventEmitter } from './components/base/events';
import { Modal } from './modal';
import { ensureElement, cloneTemplate } from './utils/utils';

export class ModalSuccess extends Modal {
	successContent: HTMLTemplateElement;
	events: EventEmitter;
	totalPay: HTMLElement;

	constructor() {
		super();
		this.events = new EventEmitter;
	}
	preOpenCallBack(): void {
		const successTemplate = ensureElement<HTMLTemplateElement>('#success');
		this.successContent = cloneTemplate(successTemplate);
		this.totalPay = ensureElement<HTMLElement>(
			'.order-success__description',
			this.successContent
		);
		this.totalPay.innerText = String(this.getTotalPrice()) + ' синапсов';
		this._content.appendChild(this.successContent);
	}
	getTotalPrice() {
		this.events.emit('getTotalPayment');
	}
}
