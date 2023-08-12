import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  cartItems$ = new BehaviorSubject<any[]>([]);
  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartItems$.next(this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }
  private cartCountSource = new BehaviorSubject<number>(0);
  currentCartCount = this.cartCountSource.asObservable();

  private favoriteCountSource = new BehaviorSubject<number>(0);
  currentFavoriteCount = this.favoriteCountSource.asObservable();

  updateFavoriteCount(count: number) {
    this.favoriteCountSource.next(count);
  }

  heroCategories: string[] = [
    'Indoor',
    'Outdoor',
    'Succulents & Cacti',
    'Herbs',
    'Tropical Plants',
    'Flowering Plants',
    'Climbing & Trailing Plants',
    'Aroids',
    'Water Plants',
  ];

  featuredProducts = [
    {
      imageSrc: 'assets/marigold.png',
      name: 'Marigold (Tagetes)',
      price: '$30.00',
      image: 'assets/marigold.png',
    },
    {
      imageSrc: 'assets/rose.png',
      name: 'Rose (Rosa)',
      price: '$50.00',
      image: 'assets/rose.png',
    },
    {
      imageSrc: 'assets/pothos.png',
      name: 'Pothos (Epipremnum aureum)',
      price: '$40.00',
      image: 'assets/pothos.png',
    },
    {
      imageSrc: 'assets/rubberplant.png',
      name: 'Rubber Plant (Ficus elastica)',
      price: '$30.00',
      image: 'assets/rubberplant.png',
    },
    {
      imageSrc: 'assets/snakeplant.png',
      name: 'Snake Plant (Sansevieria)',
      price: '$50.00',
      image: 'assets/snakeplant.png',
    },
    {
      imageSrc: 'assets/monstera.png',
      name: 'Monstera Deliciosa',
      price: '$40.00',
      image: 'assets/monstera.png',
    },
    {
      imageSrc: 'assets/tulip.png',
      name: 'Tulip (Tulipa)',
      price: '$30.00',
      image: 'assets/tulip.png',
    },
    {
      imageSrc: 'assets/basil.png',
      name: 'Basil',
      price: '$50.00',
      image: 'assets/basil.png',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
    },
    {
      imageSrc: 'assets/mint.png',
      name: 'Mint',
      price: '$30.00',
      image: 'assets/mint.png',
    },
    {
      imageSrc: 'assets/cilantro.png',
      name: 'Cilantro',
      price: '$50.00',
      image: 'assets/cilantro.png',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
    },
    {
      imageSrc: 'assets/ivy.png',
      name: 'Ivy',
      price: '$30.00',
      image: 'assets/ivy.png',
    },
    {
      imageSrc: 'assets/parseley.png',
      name: 'Parseley',
      price: '$50.00',
      image: 'assets/parseley.png',
    },
    {
      imageSrc: 'assets/coneflower.png',
      name: 'Coneflower',
      price: '$40.00',
      image: 'assets/coneflower.png',
    },
    {
      imageSrc: 'assets/peony.png',
      name: 'Peony',
      price: '$30.00',
      image: 'assets/peony.png',
    },
    {
      imageSrc: 'assets/daylily.png',
      name: 'Daylily',
      price: '$50.00',
      image: 'assets/daylily.png',
    },
    {
      imageSrc: 'assets/hosta.png',
      name: 'Hosta',
      price: '$40.00',
      image: 'assets/hosta.png',
    },
    {
      imageSrc: 'assets/fern.png',
      name: 'Fern',
      price: '$30.00',
      image: 'assets/fern.png',
    },
    {
      imageSrc: 'assets/basil.png',
      name: 'Basil',
      price: '$50.00',
      image: 'assets/basil.png',
    },
  ];

  private cartCountKey = 'cartCount';

  getCartCount(): number {
    return parseInt(localStorage.getItem(this.cartCountKey) || '0', 10);
  }

  updateCartCount(count: number): void {
    this.cartCountSource.next(count);
    localStorage.setItem(this.cartCountKey, count.toString());
  }
}
