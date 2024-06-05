import { ModalContact } from './modalContact';
import { model } from './model';
import { IOrder } from './types';

export class modalContactPresenter {
	viewRef: ModalContact;
	modelRef: model;
	constructor(view: ModalContact, appModel: model) {
		this.modelRef = appModel;
		this.viewRef = view;
		this.viewRef.events.on(
			'completeCallBack',
			this.completeCallBack.bind(this)
		);
	}
	private completeCallBack(order: IOrder) {
		console.log(order);
		this.modelRef.sendOrder(order) .then(
			(result: any) => {
				// console.log(`Result is ${result[0].description}`)
				console.log('success order')
			},
			(err: any) => {
				console.log('error order')
			}
		  );

		
		// this.viewRef.openModalSuccess();
	}
}
