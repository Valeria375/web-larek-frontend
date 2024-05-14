import { Modal } from './modal';
import { cloneTemplate, ensureElement } from './utils/utils';

export class ModalPreview extends Modal {
    previewContent:HTMLTemplateElement;

	constructor() {
		super();
		const cardPreviewTemplate =
			ensureElement<HTMLTemplateElement>('#card-preview');
		this.previewContent = cloneTemplate(cardPreviewTemplate);
        this._content.appendChild(this.previewContent);
	}
}
