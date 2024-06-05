import './scss/styles.scss';
import { cloneTemplate, createElement, ensureElement } from './utils/utils';
import { API_URL, CDN_URL } from './utils/constants';
import { EventEmitter } from './components/base/events';
import { Api, ApiListResponse } from './components/base/api';
import { IOrder, IOrderResults } from './types';
/* const basket = ensureElement<HTMLTemplateElement>('.header__basket'); */
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

// console.log('Hello');
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


const app = new frontendAplication();
app.start();