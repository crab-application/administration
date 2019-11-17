import { Injectable }   from '@angular/core';


@Injectable()
export class SessionScope {

    /***************************************************************************
    * ATTRIBUTES
    ***************************************************************************/
    private correlationId : string;

    /***************************************************************************
    * CORRELATION ID
    ***************************************************************************/
    setCorrelationId(value:string){
        this.correlationId = value == null ? null : ""+value;
        console.log({"<< correlationId":this.correlationId});
    }
    getCorrelationId(){
        console.log({">> correlationId":this.correlationId});
        return this.correlationId;
    }

    /***************************************************************************
    * USER AUTHENTICATION
    ***************************************************************************/
    isConnected() : boolean{
        return false;
    }


    getToken(){
        return null;
    }

}