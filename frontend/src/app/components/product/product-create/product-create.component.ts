import { Product } from './../product.model';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  // propLegal = "qualquer"

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    // this.productService.showOnConsole('teste...')
    // this.productService.showMessage('Operação executada com sucesso!!')
  }

  
  // fazerAlgo(): void {
    //   console.log('Fazendo Algo!!')
    // }
    
  createProduct(): void {

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!!')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
