import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  categoriesOpen: boolean = false;

  toggleCategories() {
    this.categoriesOpen = !this.categoriesOpen;
  }
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
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
    'Air Plants (Tillandsia)',
    'Bonsai',
  ];
  heroPhoneNumber: string = '915762536378';
}
