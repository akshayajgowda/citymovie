import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl = 'http://192.168.0.42:3001/api/customers';

  constructor(private http: HttpClient) { }

  customers= [];

  getRemoteCustomers(): Observable<[]>{
    return this.http.get<[]>(this.customerUrl); 		
  }

  addRemoteCustomer(customer):Observable<any>{
    return this.http.post(this.customerUrl,customer);
  }

  getCustomers(){
    return this.customers;
  }

  getRemoteCustomerById(id):Observable<any>{
    return this.http.get<[]>(this.customerUrl + "/"+id);
   }
  
  // deleteRemoteCustomer(movie): Observable<[]>{
  //   return this.http.delete<[]>(this.customerUrl+'/'+movie.id);
  // }
 
  
  // updateRemoteCustomer(movie):Observable<any>{
  //   return this.http.put(this.movieUrl + "/"+movie.id,movie);
  // }

  }