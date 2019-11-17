import {Injectable}                 from '@angular/core';
import {HttpClient,HttpResponse}    from '@angular/common/http';
import {CONSTANTS}                  from './../constants/constants';
import {isNotNull}                  from './../constants/checks';
import {SessionScope}               from './../scopes/session.scope';
import {HeaderService}              from './header.service';

@Injectable()
export class HttpService {

    /***************************************************************************
    * CONSTRUCTORS
    ***************************************************************************/
    constructor(private http          : HttpClient,
                private sessionScope  : SessionScope,
                private headerService : HeaderService) {
    }

    public get(url:string, header?:any):Promise<any>{
        let options = this.headerService.buildHeader(header);
        return this.http.get(url,{"headers":options,observe: "response" })
            .toPromise()
            .then(res  => {
                this.manageCorrelationId(res);
                return res.body;
            })
            .catch(this.handleError);
    }



    public delete(url:string, data?, header?:any):Promise<any>{
        let options     = this.headerService.buildHeader(header);
        
        return this.http
                   .delete(url,{"headers":options,observe: "response" })
                   .toPromise()
                   .then(res  => {
                        this.manageCorrelationId(res);
                        return res.body;
                   })
                   .catch(this.handleError);
    }


    public post(url:string, data?, header?:any):Promise<any>{
        let options     = this.headerService.buildHeader(header);
        
        return this.http
                   .post(url,JSON.stringify(data),{"headers":options,observe: "response" })
                   .toPromise()
                   .then(res  => {
                        this.manageCorrelationId(res);
                        return res.body;
                   })
                   .catch(this.handleError);
    }

    private manageCorrelationId(response:HttpResponse<any>){
        let correlationId = response.headers.get(CONSTANTS.header.CORRELATION_ID);
        this.sessionScope.setCorrelationId(correlationId);
    }
    /***************************************************************************
    * HANDLING ERRORS
    ***************************************************************************/
   private handleError(error: any): Promise<any> {
    let errorData = {
        "status":error.status||500,
        "statusText":error.statusText|| "error",
        "url": error.url, 
        "data":null
    }

    if(isNotNull(error._body)){
        let json = null;
        try{
            json=JSON.parse(error._body);
            errorData.data=json;
        }catch(err){
            errorData.data = error._body + " \n"+error.statusText;
            errorData.data = errorData.data.replace(/&quot;/g,'"')
         }
         
    }
    return Promise.reject(errorData);
}
}