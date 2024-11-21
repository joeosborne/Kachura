import { Injectable, signal } from '@angular/core';
import {Film} from './model/film.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {

  constructor(private http: HttpClient) {
  }
  // Manage state with signals
  listItems = signal<Film[]>([]);
  watchlist = signal<any>({});

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
    console.log('---')
    console.log('title: ' + film.title);
    console.log('overview: ' + film.overview);
    console.log('release_date: ' + film.release_date);
    console.log('poster_path: ' + film.poster_path);
    console.log('---')

    console.log('this.watchlist()...')
    console.log(this.watchlist().movies)

    const index = this.watchlist().movies.findIndex(
      (item:Film) => item.title === film.title
    );
    if (index === -1) {
      console.log('todo: not there')
      // Not in the cart, so add it
      //this.listItems.update((items) => [...items, { ...film, quantity: 1 }]);
      this.watchlist.update((items) => {
        let f = {
          id: 1,
          title: film.title,
          posterPath: film.poster_path,
          overview: film.overview,
          releaseDate: film.release_date
        }

        items.movies.push(f);
        return items;
      });
    } else {
      console.log('todo: alreeady there')
      // // Already in the cart, so increase the quantity by 1
      // this.listItems.update((items) => [
      //   ...items.slice(0, index),
      //   { ...items[index], quantity: items[index].quantity + 1 },
      //   ...items.slice(index + 1),
      // ]);
    }

      // this.watchlist.update((items) => [
      //   ...items.slice(0, index),
      //   { ...items[index], quantity: items[index].quantity + 1 },
      //   ...items.slice(index + 1),
      // ]);
    console.log('this.watchlist()...')
    console.log(this.watchlist().movies)

    //log
    this.http.put('http://localhost:5009/api/watchlist/999', this.watchlist()).subscribe(x=>{
      console.log(x)
    });


    // const index = this.listItems().findIndex(
    //   (item) => item.title === film.title
    // );
    // if (index === -1) {
    //
    //
    // } else {
    //   // // Already in the cart, so increase the quantity by 1
    //   // this.listItems.update((items) => [
    //   //   ...items.slice(0, index),
    //   //   { ...items[index], quantity: items[index].quantity + 1 },
    //   //   ...items.slice(index + 1),
    //   // ]);
    // }

    //console.log('this.listItems...');
    //console.log(this.listItems());
  }


  getAllWatchlists(): Observable<any[]> {
    //const apiUrl = `${this.urlPrefixAdmin}GetAllUserGroupUsers/${id}`;
    return this.http.get<any[]>('http://localhost:5009/api/watchlist');
  }
  getWatchlist(){
    //const apiUrl = `${this.urlPrefixAdmin}GetAllUserGroupUsers/${id}`;
    this.http.get<any>('http://localhost:5009/api/watchlist/999').subscribe(x=>{
      //console.log(x)
      //this.watchlist = x;
      this.watchlist.set(x)
      //console.log(this.watchlist())
    });
  }

  // simple api call for getting the list of films using http client
  // getFilms() {
  //   return this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1');




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
