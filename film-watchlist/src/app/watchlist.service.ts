import { Injectable, computed, signal } from '@angular/core';
import {Film} from './model/film.model';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  // Manage state with signals
  listItems = signal<Film[]>([]);

  // // Total up the extended price for each item
  // subTotal = computed(() => this.cartItems().reduce((a, b) =>
  //   a + (b.quantity * Number(b.vehicle.cost_in_credits)), 0));
  //
  // // Delivery is free if spending more than 100,000 credits
  // deliveryFee = computed(() => this.subTotal() < 100000 ? 999 : 0);
  //
  // // Tax could be based on shipping address zip code
  // tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);
  //
  // // Total price
  // totalPrice = computed(() => this.subTotal() + this.deliveryFee() + this.tax());

  // Add the vehicle to the cart
  // If the item is already in the cart, increase the quantity
  addToList(film: Film): void {
    console.log('addToList...');
    console.log(film);
    const index = this.listItems().findIndex(
      (item) => item.title === film.title
    );
    if (index === -1) {
      // Not already in the cart, so add with default quantity of 1
      this.listItems.update((items) => [...items,  film]);
    } else {
      // // Already in the cart, so increase the quantity by 1
      // this.listItems.update((items) => [
      //   ...items.slice(0, index),
      //   { ...items[index], quantity: items[index].quantity + 1 },
      //   ...items.slice(index + 1),
      // ]);
    }

    console.log('this.listItems...');
    console.log(this.listItems());
  }

  // // Remove the item from the cart
  // removeFromCart(cartItem: CartItem): void {
  //   // Update the cart with a new array containing
  //   // all but the filtered out deleted item
  //   this.cartItems.update(items => items.filter(item =>
  //     item.vehicle.name !== cartItem.vehicle.name));
  // }
  //
  // updateInCart(cartItem: CartItem, quantity: number) {
  //   // Update the cart with a new array containing
  //   // the updated item and all other original items
  //   this.cartItems.update(items =>
  //     items.map(item => item.vehicle.name === cartItem.vehicle.name ?
  //       { vehicle: cartItem.vehicle, quantity } : item));
  // }
}
