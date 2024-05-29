import { modalBasket } from './modalBasket';
import { model } from './model';

export class modalBasketPresenter {
	viewRef: modalBasket;
	modelRef: model;

	constructor(view: modalBasket, appModel: model) {
		this.viewRef = view;
		this.modelRef = appModel;
		this.viewRef.events.on('onLoard', this.formLoardCallBack.bind(this));
	}
	private formLoardCallBack() {
		const cardsArray = this.modelRef.getBasketList();
		for (const card of cardsArray) {
			this.viewRef.addItemInterface(card);
		}
       /*  alert('hello') */
	}
}
