import { modalBasket } from './modalBasket';
import { modalBasketPresenter } from './modalBasketPresenter';
import { ModalContact } from './modalContact';
import { modalContactPresenter } from './modalContactPresenter';
import { ModalOrder } from './modalOrder';
import { ModalPreview } from './modalPreview';
import { modalPreviewPresenter } from './modalPreviewPresenter';
import { ModalSuccess } from './modalSuccess';
import { modalSuccessPresenter } from './modalSuccessPresenter';
import { model } from './model';
import { modalOrderPresenter } from './modelOrderPresenter';
import { page } from './page';
import { pagePresenter } from './pagePresenter';
import { ICard, IOrder } from './types';

export class frontendAplication {
	mainView: page;
	mainPresenter: pagePresenter;
	appModel: model;
	modalWindowPreview: ModalPreview;
	modalWindowPreviewPresenter: modalPreviewPresenter;
	modalWindowBasket: modalBasket;
	modalWindowBasketPresenter: modalBasketPresenter;
	modalWindowOrder: ModalOrder;
	modalWindowOrderPresenter: modalOrderPresenter;
	modalWindowContact: ModalContact;
	modalWindowContactPresenter: modalContactPresenter;
	modalWindowSuccess: ModalSuccess;
	modalWindowSuccessPresenter: modalSuccessPresenter;
	constructor() {
		this.mainView = new page();
		this.appModel = new model();
		this.mainPresenter = new pagePresenter(this.mainView, this.appModel);
		this.modalWindowPreview = new ModalPreview();
		this.modalWindowPreviewPresenter = new modalPreviewPresenter(
			this.modalWindowPreview,
			this.appModel
		);
		this.modalWindowOrder = new ModalOrder();
		this.modalWindowOrderPresenter = new modalOrderPresenter(
			this.modalWindowOrder,
			this.appModel
		);
		this.modalWindowContact = new ModalContact();
		this.modalWindowContactPresenter = new modalContactPresenter(
			this.modalWindowContact,
			this.appModel
		);
		this.modalWindowSuccess = new ModalSuccess();
		this.modalWindowSuccessPresenter = new modalSuccessPresenter(
			this.modalWindowSuccess,
			this.appModel
		);
		this.mainView.events.on('cardClick', (item: ICard) => {
			// alert(item.title)
			this.modalWindowPreview.openForCard(item);
		});
		this.modalWindowBasket = new modalBasket();
		this.modalWindowBasketPresenter = new modalBasketPresenter(
			this.modalWindowBasket,
			this.appModel
		);
		this.mainView.events.on('basketClick', () => {
			this.modalWindowBasket.open();
			this.modalWindowBasket.init();
		});
		this.modalWindowBasket.events.on('confirm', (order: IOrder) => {
			this.modalWindowOrder.openInfo(order);
		});
		this.modalWindowOrder.events.on('openModalContacts', (order: IOrder) => {
			this.modalWindowContact.openInfo(order);
		});
		this.modalWindowContact.events.on('openModalSuccess', () => {
			this.modalWindowSuccess.open();
		});
	}
	start() {
		this.mainView.init();
	}
	// static openModalPreview(item:ICard){
	//     const modalWindowPreview = new  ModalPreview(item);

	//     modalWindowPreview.open();
	// }
}
