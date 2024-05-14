import { Modal } from './modal';
import { ensureElement, cloneTemplate } from './utils/utils';

export class ModalContact extends Modal {
    contacts: HTMLTemplateElement;

	constructor() {
		super();
		const contacsTemplate = ensureElement<HTMLTemplateElement>('#contacts');

		this.contacts = cloneTemplate(contacsTemplate);
		this._content.appendChild(this.contacts);
	}
}