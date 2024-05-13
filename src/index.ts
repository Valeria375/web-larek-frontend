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
const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');
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
const card_example1 = new Card(cloneTemplate(cardCatalogTemplate));
gallery.appendChild(card_example1.HtmlItem);
card_example1.title = 'My tihfhf1';
card_example1.price = 4000;
// card_example1.description = 'My tiеее';
card_example1.category = 'друг';
card_example1.image = './images/example.png';

basket.addEventListener('click', () => {
	const modalBasket = document.querySelector('#modal-container');
	// const newM = new Modal(cardBasketTemplate, .on);
});

// const bask = new Modal(ensureElement<HTMLElement>('.basket'));
// bask.open;

const modal = new Modal(ensureElement<HTMLElement>('#modal-container'));
modal.open();

