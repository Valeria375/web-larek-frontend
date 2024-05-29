import { modalBasket } from './modalBasket';
import { modalBasketPresenter } from './modalBasketPresenter';
import { ModalPreview } from './modalPreview';
import { modalPreviewPresenter } from './modalPreviewPresenter';
import { model } from './model';
import { page } from './page';
import { pagePresenter } from './pagePresenter';
import { ICard } from './types';

export class frontendAplication {
	mainView: page;
	mainPresenter: pagePresenter;
	appModel: model;
	modalWindowPreview: ModalPreview;
	modalWindowPreviewPresenter: modalPreviewPresenter;
	modalWindowBasket: modalBasket;
	modalWindowBasketPresenter: modalBasketPresenter;
	constructor() {
		this.mainView = new page();
		this.appModel = new model();
		this.mainPresenter = new pagePresenter(this.mainView, this.appModel);
		this.modalWindowPreview = new ModalPreview();
		this.modalWindowPreviewPresenter = new modalPreviewPresenter(
			this.modalWindowPreview,
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
	}
	start() {
		this.mainView.init();
	}
	// static openModalPreview(item:ICard){
	//     const modalWindowPreview = new  ModalPreview(item);

	//     modalWindowPreview.open();
	// }
}
