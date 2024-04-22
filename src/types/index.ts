 interface CardIf {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number;
}
 interface ProductIf {
	total: number;
	items: CardIf[];
}
 interface OrderResultIf {
	id: string[];
	total: number;
	error?: string;
}
 interface OrderIf {
	email: string;
	phone: string;
	address: string;
	payment: string;
	total: number;
	items: string[];
}
