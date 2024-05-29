import { ModalPreview } from './modalPreview';
import { model } from './model';
import { ICard } from './types';

export class modalPreviewPresenter {
	viewRef: ModalPreview;
	modelRef: model;
	constructor(view: ModalPreview, appModel: model) {
		this.modelRef = appModel;
		this.viewRef = view;
		this.viewRef.events.on('addToBasketClick', this.addItemToBasket.bind(this));
	}
	private addItemToBasket(item: ICard) {
		this.modelRef.addToBasket(item);
	}
}
