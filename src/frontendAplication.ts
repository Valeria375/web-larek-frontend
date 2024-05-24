import { model } from './model';
import { page } from './page';
import { pagePresenter } from './pagePresenter';

export class frontendAplication {
	mainView: page;
	mainPresenter: pagePresenter;
	appModel: model;
	constructor() {
		this.mainView = new page();
		this.appModel = new model();
		this.mainPresenter = new pagePresenter(this.mainView, this.appModel);
	}
	start() {
		this.mainView.init();
	}
}
