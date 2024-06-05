import { ModalSuccess } from "./modalSuccess";
import { model } from "./model";

export class modalSuccessPresenter{
    viewRef: ModalSuccess;
	modelRef: model;

    constructor(view: ModalSuccess, appModel: model){
        this.modelRef = appModel;
		this.viewRef = view;
        this.viewRef.events.on('getTotalPayment', this.getTotalPrice.bind(this));
    }
    private getTotalPrice(){
        this.modelRef.getBasketTotalPtice();
    }
}