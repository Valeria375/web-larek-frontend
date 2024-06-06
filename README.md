# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Описание архитектуры

Архитектура проекта реализована с использованием паттерна MVP (Model View Presenter), каждая составляющая реализуется в виде отдельного класса в сооствествующих файлах Model.ts, View.ts, Presenter.ts.
Файл App.ts содержит создание экземпляров объектов указанных выше классов, а также настройку их взаимодействия. Также для организации взаимодействия между классами View и Presenter, будет использоваться интерефейс IViewObserver, который будет задавать все обработчики событий View, этот интерфейс будет наследовать класс Presenter (он в свою очередь будет в себе содержать ссылку на класс Model).

## Описание данных
### Информация о товаре
```ts
interface ICard {
	title: string;
	description?: string | string[];
	image: string;
	price: number | null;
	category: string;
	id:string
}
```
### Информация о заказе
``` ts
interface IOrder {
	total: number;
	items: string[];
	email: string;
	phone: string;
	address: string;
	payment: string;
}
```
### Интерфейс выполнения успешной операции
``` ts

interface IOrderResults {
	id: string;
	total: number;
}
```

## Описание событий

* CardClicked(card:ICard) - нажатие на карточку товара 
* BasketButtonClicked() - нажатие на кнопку корзины
* BasketRemoveItem(card:ICard) - удаление товара из корзины
* BasketAddItem(card:ICard) - добавление товара в корзину
* BascketItemCountRequest(void) - запрос числа товаров в корзине (для отображения в форме)
* ApproveOrder(void) - оформление заказа



## Описание класса PageView

Класс содержит объекты страницы полученные через querySelector необходимые для отображения данных, полученных с сервера, а также для отправки введенных данных со страницы на сервер.

### Свойства класса

* CardsContainer контейнер для хранение карточек с товаром;
* BasketButton - кнопка открытия корзины;
* BasketModalWindow - модальное окно со списком товара в корзине;
* Observer - ссылка на класс наблюдателя формы
* Events - экзепляр класса EventsEmitter для обработки событий

### Методы класса
* AddCard(item:ICard)
* init()


## Описание класса CardPreview
### Свойства класса
* preOpenCallBack - загрузка данных
 
* ImageContainer:HTMLElement - Контейнер картинки;
* PriceLabel:HTMLElement - Поле с ценой;
* DescriptionLabel - Поле с описанием;
* Events - экзепляр класса EventsEmitter для обработки событий

### Методы класса
* updateButton(isInBasket: boolean)
* openForCard(item: ICard)
* AddToBasket()


## Описание класса ModalBasket
### Свойства класса
* CardsConainer:HTMLElement - Контейнер элемнтов товара
* Events - экзепляр класса EventsEmitter для обработки событий

### Методы класса
* addItemInterface(item: ICard)
* removeItem(cardItem: HTMLElement, itemPrice: number, item: ICard)
* updateOrderButtonState()
* orderButtonClick()

## Описание класса PagePresenter
### Свойства класса
* view:PageView - объект представления
* model:Model - экземпляр класса модели

### Методы класса
* constructor(view:PageView, model:Model) - инициализация событий формы

## Описание класса ModalPreviewPresenter
### Свойства класса
* view:CardModalWindow - объект представления
* model:Model - экземпляр класса модели
### Методы класса
* constructor(view:CardModalWindow, model:Model) - инициализация событий формы

## Описание класса ModalBasketPresenter
### Свойства класса
* view:BasketModalWindow - объект представления
* model:Model - экземпляр класса модели
### Методы класса
* constructor(view:BasketModalWindow, model:Model) - инициализация событий формы


## Описание класса Model
### Свойства класса
* BasketList:ICard[];
### Методы класса
* ICard[] GetBasketList(void) - получение элементов корзины;
* number GetBasketListCount(void) - получение количества элементов корзины;
* ICard[] GetCardList(void) - получение списка товаров;
* ApproveOrder(ICard[]) - оформить заказ по указанному списку;
* AddToBasket(item:ICard) - добавить указанный товар в корзину;
* RemoveFromBasket(item:ICard) - удалить указанный товар из корзину;

## Описание класса ViewApplication
### Свойства класса
* MainPage:PageView - объект главной страницы;
* MainPresenter:PagePresenter - объект представителя страницы;
* BasketPage:BasketModalWindow - объект модального окна корзины
* BasketPresenter:BasketModalPresenter - объект представителя окна корзины
* CardPage:CardModalWindow - объект страницы подробного описания товара;
* CardPresenter:CardModalPresenter - объект представителя страницы подробного описания товара;
* ModelRef:Model - экземпляр класса модели;

### Методы класса
* constructor - инициализация связей между объектами
* ShowBasketModalWindow(void) - показать модальное окно корзины;
* HideBasketModalWindow(void) - скрыть модальное окно корзины;
* ShowCardModalWindow(item:ICard) - показать модальное окно товара;
* HideCardModalWindow(void) - скрыть модальное окно товара;

### Организация работы
В файле index.ts создается эземпляр класса ViewApp в конструкторе которого вызывается настройка всех его компонентов, а именно настройка связей между тремя элементами представления (PageView, BasketModalWindow, CardModalWindow) с их соответствющими представителями (PagePresenter, BasketModalPresenter, CardModalPresenter), а также связей между представителями и моделью. В конструкторах классов представителей происходит инициалтзация обработчиков событий формы, в которых настравивается связь между всеми элементами отображения и моделью.