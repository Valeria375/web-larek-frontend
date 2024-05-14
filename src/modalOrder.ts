import { Modal } from './modal';
import { ensureElement, cloneTemplate } from './utils/utils';

export class ModalOrder extends Modal {
    paymentContent: HTMLTemplateElement;

	constructor() {
		super();
		const paymentTemplate = ensureElement<HTMLTemplateElement>('#order');

		this.paymentContent = cloneTemplate(paymentTemplate);
		this._content.appendChild(this.paymentContent);
	}
}
