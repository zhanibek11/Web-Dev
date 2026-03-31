import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  currentProducts: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
    this.currentProducts = this.productService.getProductsByCategory(id);
  }
}
