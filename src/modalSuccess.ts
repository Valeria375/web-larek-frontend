import { Modal } from './modal';
import { ensureElement, cloneTemplate } from './utils/utils';

export class ModalSuccess extends Modal {
    successContent: HTMLTemplateElement;

	constructor() {
		super();
		const successTemplate = ensureElement<HTMLTemplateElement>('#success');

		this.successContent = cloneTemplate(successTemplate);
		this._content.appendChild(this.successContent);
	}
}