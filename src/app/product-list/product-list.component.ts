import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

interface Product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private ___productsService: ProductsService) {}

  ngOnInit() {
    this.___productsService.getProducts().subscribe((products: any) => {
      this.mapProducts(products);
    });
    
  }
  
  mapProducts(products: any[]) {
    products.forEach(product => {
      this.products.push({
        name: product.title,
        price: product.price,
        image: product.image
      })
    })
  }
    
}
