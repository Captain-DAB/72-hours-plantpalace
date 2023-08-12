import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
interface HeaderTopItem {
  icon: string;
  text: string;
}
interface SocialItem {
  icon: string;
  link: string;
}
interface MenuItem {
  label: string;
  link: string;
  dropdownItems?: MenuItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;
  favoriteCount: number = 0;
  isNavbarOpen: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.currentCartCount.subscribe(
      (count) => (this.cartCount = count)
    );
    this.cartService.currentFavoriteCount.subscribe(
      (count) => (this.favoriteCount = count)
    );
  }
  headerLogoImage: string = 'assets/logo.png';
  headerTopLeftItems: HeaderTopItem[] = [
    { icon: 'bi-envelope', text: 'plantpalace@gmail.com' },
    { icon: '', text: 'Free Shipping for all Order over $199' },
  ];

  headerTopRightSocialItems: SocialItem[] = [
    { icon: 'bi-facebook', link: '#' },
    { icon: 'bi-twitter', link: '#' },
    { icon: 'bi-linkedin', link: '#' },
    { icon: 'bi-instagram', link: '#' },
  ];
  headerMenuItems: MenuItem[] = [
    { label: 'Home', link: '#' },
    {
      label: 'Shop',
      link: '#',
      dropdownItems: [
        { label: 'Checkout', link: '/checkout' },
        { label: 'Exhibition', link: '/exhibition' },
      ],
    },
    { label: 'About', link: '/about' },
    { label: 'Blog', link: '/blog' },
    { label: 'Contact', link: '/contact' },
  ];

  headerTopRightAuthLink: string = '#';
}
