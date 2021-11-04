import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../admin/admin-data';
import { cartInterface } from './user-data';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  private postCart(cb:any){
     this.http.post('http://localhost:3000/user/createCart', { date_created: new Date().getTime()}, this.httpOptions)
              .subscribe(res=>{
                console.log(res);
                cb(res);
              })   
  }

  fetchCart(cb:any){
    let cartId = this.getCartId();

    this.http.get<cartInterface[]>('http://localhost:3000/user/getCart/'+ cartId, this.httpOptions)
                   .subscribe(res=>{
                      cb(res);
                      // console.log(res, "from fetch");
                   })
  }

  private getCartId(){
    let cartId = localStorage.getItem('cartId'); 

    if(!cartId){
      this.postCart((res:any)=>{
        localStorage.setItem('cartId',res.insertId);
        return res.insertId;
      });
    }

    return cartId;
  }

  addToCart(product:ProductInterface){
    let cartId = this.getCartId();

    return this.http.post<any>('http://localhost:3000/user/addToCart/' + cartId, {prod_id: product.prod_id}, this.httpOptions)
            //  .subscribe(res=>{
            //   //  console.log(res);
            //   return res.affectedRows
            //  })
  }

  removeFromCart(product: ProductInterface){
    let cartId = this.getCartId();

    return this.http.post<any>('http://localhost:3000/user/removeFromCart/' + cartId, {prod_id: product.prod_id}, this.httpOptions);
  }


}
