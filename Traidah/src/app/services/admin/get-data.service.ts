import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryInterface, ProductInterface } from './admin-data';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  catData!: CategoryInterface[];
  productsData!: ProductInterface[];
  product!: ProductInterface;

  constructor(private http: HttpClient,
              private route: Router) {  }

  getCategories(cb:any){
    this.http.get<CategoryInterface[]>('http://localhost:3000/admin/getCategory')
    .subscribe((res)=>{
       // console.log("From service", res);
        this.catData = res;
        cb(res);
    })
  }
  // getCategories(): CategoryInterface[]{   
  //     // console.log(this.catData);
  //     return this.catData;
  // }

  postProduct(product:any){
    this.http.post('http://localhost:3000/admin/postProduct', JSON.stringify(product), this.httpOptions)
             .subscribe(res=>{
                // console.log(res);
                this.route.navigate(['/admin/manage-products'])
             })
  }

  updateProduct(product:any){
    this.http.post('http://localhost:3000/admin/updateProduct', JSON.stringify(product), this.httpOptions)
             .subscribe(res=>{
                // console.log(res);
                this.route.navigate(['/admin/manage-products'])
             })
  }


  getProductById(id:any, cb:any){
    this.http.get<ProductInterface>('http://localhost:3000/admin/getProduct/' + id)
        .subscribe(res=>{
          //  console.log("from data services", res);
           this.product = res;
           cb(res);
        })
  }

  deleteProduct(id:any){
      this.http.delete('http://localhost:3000/admin/deleteProduct/' + id, this.httpOptions)
               .subscribe(res=>{
                 console.log(res);
                 this.route.navigate(['/admin/manage-products'])
               })
  }

 
  getProducts(cb:any){
    this.http.get<ProductInterface[]>('http://localhost:3000/admin/getProducts')
    .subscribe((res)=>{
      // console.log("from service", res);
      this.productsData = res;
      cb(res);
    })
  }
  // getProducts(){
  //   return this.productsData;
  // }

 
}
