import { Modal } from './modal';
import { ensureElement, cloneTemplate } from './utils/utils';

export class ModalOrder extends Modal {
    paymentContent: HTMLTemplateElement;
	nextButton: HTMLButtonElement;
	addressInput: HTMLInputElement;
    selectedPaymentMethod: HTMLButtonElement | null;

	constructor() {
		super();
		const paymentTemplate = ensureElement<HTMLTemplateElement>('#order');
		this.nextButton = ensureElement<HTMLButtonElement>('.modal__actions .button', this.paymentContent);
        this.selectedPaymentMethod = null;
		// this.addressInput.addEventListener('input', this.updateNextButtonState.bind(this));
		this.paymentContent = cloneTemplate(paymentTemplate);
		this._content.appendChild(this.paymentContent);
	}
	updateNextButtonState() {
        if (this.addressInput.value.trim() !== '' && this.selectedPaymentMethod !== null) {
            this.nextButton.disabled = false;
        } else {
            this.nextButton.disabled = true;
        }
    }

    selectPaymentMethod(button: HTMLButtonElement) {
        if (this.selectedPaymentMethod) {
            this.selectedPaymentMethod.classList.remove('button__alt-active');
        }
        this.selectedPaymentMethod = button;
        this.selectedPaymentMethod.classList.add('button__alt-active');
        this.updateNextButtonState();
    }
}
