import { model } from './model';
import { page } from './page';

export class pagePresenter {
	viewRef: page;
	modelRef: model;
    test: string;
	constructor(view: page, appModel: model) {
		this.modelRef = appModel;
		this.viewRef = view;
        this.test = 'hi from presenter'
        this.viewRef.events.on('page:init', () =>{
            const arrRef = this.modelRef.getCardList();
            for(const item of arrRef){
                this.viewRef.addCardFn(item, 'title', 5930, 'rbfebfjfdbe','./images/example.png');
            }
        
        })
	}
}
