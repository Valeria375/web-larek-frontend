import { API_URL, CDN_URL } from './utils/constants';
import { ensureElement, cloneTemplate } from './utils/utils';
import { EventEmitter } from './components/base/events';

const events = new EventEmitter();


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

