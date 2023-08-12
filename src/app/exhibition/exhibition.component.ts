import { Component } from '@angular/core';
import { CartService } from '../cart.service';
export interface CartItem {
  imageSrc: string;
  name: string;
  price: string;
  image: string;
  category: string;
}
@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css'],
})
export class ExhibitionComponent {
  cartCount: number = 0;
  cartIconClicked: boolean = false;
  favoriteCount: number = 0;
  selectedProduct: CartItem | undefined;
  selectedCategory: string | null = null;
  filteredProducts: any[] = [];

  filterProducts(category: string) {
    this.selectedCategory = category; // Store the selected category
    if (category === 'All') {
      this.filteredProducts = this.featuredProducts; // Show all products
    } else {
      this.filteredProducts = this.featuredProducts.filter(
        (product) => product.category === category
      );
    }
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
      category: 'Indoor',
    },
    {
      imageSrc: 'assets/rose.png',
      name: 'Rose (Rosa)',
      price: '$50.00',
      image: 'assets/rose.png',
      category: 'Indoor',
    },
    {
      imageSrc: 'assets/pothos.png',
      name: 'Pothos (Epipremnum aureum)',
      price: '$40.00',
      image: 'assets/pothos.png',
      category: 'Indoor',
    },
    {
      imageSrc: 'assets/rubberplant.png',
      name: 'Rubber Plant (Ficus elastica)',
      price: '$30.00',
      image: 'assets/rubberplant.png',
      category: 'Indoor',
    },
    {
      imageSrc: 'assets/snakeplant.png',
      name: 'Snake Plant (Sansevieria)',
      price: '$50.00',
      image: 'assets/snakeplant.png',
      category: 'Outdoor',
    },
    {
      imageSrc: 'assets/monstera.png',
      name: 'Monstera Deliciosa',
      price: '$40.00',
      image: 'assets/monstera.png',
      category: 'Outdoor',
    },
    {
      imageSrc: 'assets/tulip.png',
      name: 'Tulip (Tulipa)',
      price: '$30.00',
      image: 'assets/tulip.png',
      category: 'Herbs',
    },
    {
      imageSrc: 'assets/basil.png',
      name: 'Basil',
      price: '$50.00',
      image: 'assets/basil.png',
      category: 'Herbs',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
      category: 'Herbs',
    },
    {
      imageSrc: 'assets/mint.png',
      name: 'Mint',
      price: '$30.00',
      image: 'assets/mint.png',
      category: 'Outdoor',
    },
    {
      imageSrc: 'assets/cilantro.png',
      name: 'Cilantro',
      price: '$50.00',
      image: 'assets/cilantro.png',
      category: 'Indoor',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
      category: 'Succulents & Cacti',
    },
    {
      imageSrc: 'assets/ivy.png',
      name: 'Ivy',
      price: '$30.00',
      image: 'assets/ivy.png',
      category: 'Aroids',
    },
    {
      imageSrc: 'assets/parseley.png',
      name: 'Parseley',
      price: '$50.00',
      image: 'assets/parseley.png',
      category: 'Outdoor',
    },
    {
      imageSrc: 'assets/coneflower.png',
      name: 'Coneflower',
      price: '$40.00',
      image: 'assets/coneflower.png',
      category: 'Water Plants',
    },
    {
      imageSrc: 'assets/peony.png',
      name: 'Peony',
      price: '$30.00',
      image: 'assets/peony.png',
      category: 'Tropical Plants',
    },
    {
      imageSrc: 'assets/daylily.png',
      name: 'Daylily',
      price: '$50.00',
      image: 'assets/daylily.png',
      category: 'Tropical Plants',
    },
    {
      imageSrc: 'assets/hosta.png',
      name: 'Hosta',
      price: '$40.00',
      image: 'assets/hosta.png',
      category: 'Flowering Plants',
    },
    {
      imageSrc: 'assets/fern.png',
      name: 'Fern',
      price: '$30.00',
      image: 'assets/fern.png',
      category: 'Flowering Plants',
    },
    {
      imageSrc: 'assets/basil.png',
      name: 'Basil',
      price: '$50.00',
      image: 'assets/basil.png',
      category: 'Water Plants',
    },
    {
      imageSrc: 'assets/mint.png',
      name: 'Mint',
      price: '$30.00',
      image: 'assets/mint.png',
      category: 'Aroids',
    },
    {
      imageSrc: 'assets/cilantro.png',
      name: 'Cilantro',
      price: '$50.00',
      image: 'assets/cilantro.png',
      category: 'Indoor',
    },
    {
      imageSrc: 'assets/oregano.png',
      name: 'Oregano',
      price: '$40.00',
      image: 'assets/oregano.png',
      category: 'Herbs',
    },
  ];
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartCount = this.cartService.getCartCount();
    this.filteredProducts = this.featuredProducts;
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
      category: '',
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
      category: ''
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
