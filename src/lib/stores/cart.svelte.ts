import { browser } from '$app/environment';

export interface CartItem {
	id: string;
	name: string;
	price: number;
	image: string;
	quantity: number;
}

class Cart {
	items = $state<CartItem[]>([]);

	constructor() {
		if (browser) {
			const stored = localStorage.getItem('cart');
			if (stored) {
				try {
					this.items = JSON.parse(stored);
				} catch (e) {
					console.error('Failed to parse cart items', e);
				}
			}
		}
	}

	private save() {
		if (browser) {
			localStorage.setItem('cart', JSON.stringify(this.items));
		}
	}

	add(item: Omit<CartItem, 'quantity'>) {
		const existing = this.items.find((i) => i.id === item.id);
		if (existing) {
			existing.quantity += 1;
		} else {
			this.items.push({ ...item, quantity: 1 });
		}
		this.save();
	}

	remove(id: string) {
		this.items = this.items.filter((i) => i.id !== id);
		this.save();
	}

	updateQuantity(id: string, delta: number) {
		const existing = this.items.find((i) => i.id === id);
		if (existing) {
			existing.quantity = Math.max(1, existing.quantity + delta);
			this.save();
		}
	}

	clear() {
		this.items = [];
		this.save();
	}

	get totalItems() {
		return this.items.reduce((sum, item) => sum + item.quantity, 0);
	}

	get totalPrice() {
		return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	}
}

export const cart = new Cart();
