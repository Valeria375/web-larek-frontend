import { ModalPreview } from './modalPreview';
import { model } from './model';
import { page } from './page';
import { pagePresenter } from './pagePresenter';
import { ICard } from './types';

export class frontendAplication {
	mainView: page;
	mainPresenter: pagePresenter;
	appModel: model;
	modalWindowPreview: ModalPreview;
	constructor() {
		this.mainView = new page();
		this.appModel = new model();
		this.mainPresenter = new pagePresenter(this.mainView, this.appModel);
		this.modalWindowPreview = new ModalPreview();
		this.mainView.events.on('cardClick', (item: ICard) => {
			// alert(item.title)
			this.modalWindowPreview.openForCard(item);
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
