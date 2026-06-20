import { Component, OnInit }    from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ProductService }        from '../../services/product.service';
import { Product }               from '../../models/product.model';

@Component({
  selector:    'app-product-list',
  standalone:  true,
  imports:     [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl:    './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading  = true;
  error    = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:  data  => { this.products = data; this.loading = false; },
      error: err   => { this.error = 'Failed to load products. Is the backend running?';
                        this.loading = false; },
    });
  }
}
