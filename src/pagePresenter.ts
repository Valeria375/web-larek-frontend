import { model } from './model';
import { page } from './page';

export class pagePresenter {
	private viewRef: page;
	private modelRef: model;
	test: string;
	constructor(view: page, appModel: model) {
		this.modelRef = appModel;
		this.viewRef = view;
		this.test = 'hi from presenter';
		this.viewRef.events.on('page:init', this.viewInitCallBack.bind(this));
		this.viewRef.events.on('intervalCounter', this.intervalCallBack.bind(this));
	}
	private viewInitCallBack() {
		const arrRef = this.modelRef.getCardInterface();
		for (const item of arrRef) {
			this.viewRef.addCard(item);
		}
	}
	private intervalCallBack() {
		this.viewRef.basketCount = this.modelRef.getBasketCount();
		
	}
}

// const arrRef = this.modelRef.getCardList();
// 		for (const item of arrRef) {
// 			this.viewRef.addCardFn(
// 				item,
// 				'title',
// 				5930,
// 				'rbfebfjfdbe',
// 				'./images/example.png'
// 			);
// 		}

// this.viewRef.events.on('page:init', () =>{
//             const arrRef = this.modelRef.getCardList();
//             for(const item of arrRef){
//                 this.viewRef.addCardFn(item, 'title', 5930, 'rbfebfjfdbe','./images/example.png');
//             }

//         // })
