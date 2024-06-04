import { ModalContact } from "./modalContact";
import { model } from "./model";

export class modalContactPresenter{
    viewRef: ModalContact;
	modelRef: model;
	constructor(view: ModalContact, appModel: model) {
		this.modelRef = appModel;
		this.viewRef = view;
	}
}