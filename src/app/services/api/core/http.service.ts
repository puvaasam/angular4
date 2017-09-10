import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpService {
  /**
   * CoreApi constuctor
   */
  constructor(private http: Http) { }

  getData(url: string): Observable<any>{

    //Performs a request with `get` http method.
    //get(url: string, options?: RequestOptionsArgs): Observable<Response>;
      let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      let options       = new RequestOptions({ headers: headers }); 
        
      return this.http.get(url, options).map((res: Response) => res.json()).catch(this.handleError);
  }

  postData(): Observable<any>{
     //Performs a request with `post` http method.
    //post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    return null;
  }

  updateData(): Observable<any>{
    // Performs a request with `put` http method.
    // put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
     return null;
  }

  deleteData(error): Observable<any>{
    // Performs a request with `delete` http method.
    // delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
     return null;
  }
  private handleError(error: any): Observable<any>{
    console.log('Server Error', error);
    if(error instanceof Response){
      let errorMessage = '';
      try{
        errorMessage = error.json().error;
      }catch(err){
        errorMessage = err.statusText;
      }
      return Observable.throw(errorMessage);

    }

    return Observable.throw(error || 'Server error');
  }
   

    


}
