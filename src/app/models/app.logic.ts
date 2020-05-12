import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }

    getProducts(): Array<Product> {
      return this.products;
    }

    saveProducts(prd: Product): Array<Product> {

      let product = this.products.find(p => p.ProductId == prd.ProductId);
      let i = this.products.indexOf(product);
      if(i > -1)
      {
        this.products[i] = prd;
      }
      else
      {
        this.products.push(prd);
      }
      
      return this.products;
    }

    DeleteProduct(prd: Product): Array<Product> {
      const index = this.products.indexOf(prd, 0);
      if (index > -1)
      {
        this.products.splice(index, 1);
      }

      return this.products;
    }
}
