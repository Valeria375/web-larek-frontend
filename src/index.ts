import './scss/styles.scss';
import { cloneTemplate, createElement, ensureElement } from './utils/utils';
import { API_URL, CDN_URL } from './utils/constants';
import { EventEmitter } from './components/base/events';
import { Api, ApiListResponse } from './components/base/api';
import { IOrder, IOrderResults } from './types';
const basket = ensureElement<HTMLTemplateElement>('.header__basket');
// const basket = document.querySelector('.header__basket');

const cardPrTemplate = cloneTemplate<HTMLTemplateElement>('#card-preview');

const events = new EventEmitter();
const api = new ProductAPI(CDN_URL, API_URL);

// шаблоны
const cardPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
const cardBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
const paymentTemplate = ensureElement<HTMLTemplateElement>('#order');
const contacsTemplate = ensureElement<HTMLTemplateElement>('#contacts');
const successTemplate = ensureElement<HTMLTemplateElement>('#success');

// контейнеры
const modalWindow = ensureElement<HTMLElement>('#modal-container');
const pageBody = document.body;
const gallery = ensureElement<HTMLTemplateElement>('.gallery');

console.log('Hello');
// const cardPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
import { Card } from './Card';
import { Modal } from './modal';
import { ProductAPI } from './api';
import { ModalPreview } from './modalPreview';
import { ModalOrder } from './modalOrder';
import { ModalContact } from './modalContact';
import { modalBasket } from './modalBasket';
import { ModalSuccess } from './modalSuccess';
import { frontendAplication } from './frontendAplication';
const card_example1 = new Card();
gallery.appendChild(card_example1.HtmlItem);
card_example1.title = 'собака';
card_example1.price = 4000;
// card_example1.description = 'My tiеее';
card_example1.category = 'друг';
// card_example1.image = '../images/subtract.svg';

const card_example2 = new Card();
gallery.appendChild(card_example2.HtmlItem);
card_example2.title = 'мишка';
card_example2.price = 4000;
// card_example1.description = 'My tiеее';
card_example2.category = 'друг';
// card_example2.image = './images/example.png';

basket.addEventListener('click', () => {
	// const modalBasket = document.querySelector('#modal-container');
	// const newM = new Modal(cardBasketTemplate, .on);
	const mod = new modalBasket();
	mod.open();
});

// const bask = new Modal(ensureElement<HTMLElement>('.basket'));
// bask.open;

// const modal1 = new  modalBasket();
// modal1.open();
// modal1.addItem('klfkjef', 500);
// modal1.addItem('hjfaewfjer', 9393);

// const modal = new ModalPreview();
// modal.open();
// modal.addToBasket();

// const test: EventEmitter = new EventEmitter();
// test.on('job', () => {
// 	alert('Hi from emmiter');
// });
// test.emit('hi');

const app = new frontendAplication();
app.start();