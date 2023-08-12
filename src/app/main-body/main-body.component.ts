import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
export interface CartItem {
  imageSrc: string;
  name: string;
  price: string;
  image: string;
}
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
})
export class MainBodyComponent implements OnInit {
  heroPhoneNumber: string = '23425245256';
  cartCount: number = 0;
  cartIconClicked: boolean = false;
  favoriteCount: number = 0;
  selectedProduct: CartItem | undefined;
  selectedCategory: string = 'All';
  filteredProducts: CartItem[] = [];
  
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
    'Air Plants (Tillandsia)',
    'Bonsai',
  ];

  featuredProducts = [
    {
      imageSrc: 'assets/marigold.png',
      name: 'Marigold (Tagetes)',
      price: '$30.00',
      image: 'assets/marigold.png',
      category: 'Sansevieria',
    },
    {
      imageSrc: 'assets/rose.png',
      name: 'Rose (Rosa)',
      price: '$50.00',
      image: 'assets/rose.png',
      category: 'Monstera',
    },
    {
      imageSrc: 'assets/pothos.png',
      name: 'Pothos (Epipremnum aureum)',
      price: '$40.00',
      image: 'assets/pothos.png',
      category: 'Taluipa',
    },
    {
      imageSrc: 'assets/rubberplant.png',
      name: 'Rubber Plant (Ficus elastica)',
      price: '$30.00',
      image: 'assets/rubberplant.png',
      category: 'Spathiphyllum',
    },
    {
      imageSrc: 'assets/snakeplant.png',
      name: 'Snake Plant (Sansevieria)',
      price: '$50.00',
      image: 'assets/snakeplant.png',
      category: 'Ficus elastica',
    },
    {
      imageSrc: 'assets/monstera.png',
      name: 'Monstera Deliciosa',
      price: '$40.00',
      image: 'assets/monstera.png',
      category: 'Epipremnum',
    },
    {
      imageSrc: 'assets/tulip.png',
      name: 'Tulip (Tulipa)',
      price: '$30.00',
      image: 'assets/tulip.png',
      category: 'Sansevieria',
    },
    {
      imageSrc: 'assets/basil.png',
      name: 'Basil',
      price: '$50.00',
      image: 'assets/basil.png',
      category: 'Sansevieria',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
      category: 'Monstera',
    },
    {
      imageSrc: 'assets/mint.png',
      name: 'Mint',
      price: '$30.00',
      image: 'assets/mint.png',
      category: 'Taluipa',
    },
    {
      imageSrc: 'assets/cilantro.png',
      name: 'Cilantro',
      price: '$50.00',
      image: 'assets/cilantro.png',
      category: 'Taluipa',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
      category: 'Ficus elastica',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
      category: 'Sansevieria',
    },
    {
      imageSrc: 'assets/rose.png',
      name: 'Mint',
      price: '$30.00',
      image: 'assets/rose.png',
      category: 'Sansevieria',
    },
    {
      imageSrc: 'assets/daylily.png',
      name: 'Cilantro',
      price: '$50.00',
      image: 'assets/daylily.png',
      category: 'Monstera',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
      category: 'Ficus elastica',
    },
  ];
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.filterProducts('All');
  }
  filterProducts(category: string) {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredProducts = this.featuredProducts;
    } else {
      this.filteredProducts = this.featuredProducts.filter(
        (product) => product.category === category
      );
    }
  }

  addToCart(product: CartItem): void {
    this.cartCount++;

    this.cartService.updateCartCount(this.cartCount);
    this.cartIconClicked = true;
    const cartItem: CartItem = {
      imageSrc: product.imageSrc,
      name: product.name,
      price: product.price,
      image: product.imageSrc,
    };

    this.cartItems.push(cartItem);

    this.selectedProduct = cartItem;
  }
  cartInfo(product: CartItem) {
    const cartItem: CartItem = {
      imageSrc: product.imageSrc,
      name: product.name,
      price: product.price,
      image: product.imageSrc,
    };

    this.selectedProduct = cartItem;
  }

  addToFavorites() {
    this.favoriteCount++;

    this.cartService.updateFavoriteCount(this.favoriteCount);
  }
  repeatCart() {
    if (this.cartIconClicked) {
      this.cartCount++;

      this.cartService.updateCartCount(this.cartCount);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartCount = 0;
    this.cartService.updateCartCount(this.cartCount);
  }
}
