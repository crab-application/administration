import {Injectable}                                 from '@angular/core';
import {HttpHeaders}                                from '@angular/common/http';
import {CONSTANTS}                                  from './../constants/constants';
import {isNull,isNotNull}                           from './../constants/checks';
import {SessionScope}                               from './../scopes/session.scope';


@Injectable()
export class HeaderService {

    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private sessionScope : SessionScope) {
    }

    /**************************************************************************
    * API
    **************************************************************************/
    buildHeader(headerInfos:any) : HttpHeaders{
        let result = {};
        let headerData = isNull(headerInfos)?{}:headerInfos;
        if(this.sessionScope.isConnected()){
          result["Authorization"]=this.sessionScope.getToken();
        }
  
        result[CONSTANTS.header.DEVICE_IDENTIFIER]            = CONSTANTS.deviceIdentifier;
        result[CONSTANTS.header.CORRELATION_ID]               = this.sessionScope.getCorrelationId();
        
        result[CONSTANTS.header.DEVICE_TYPE]                  = CONSTANTS.deviceType;
        result[CONSTANTS.header.DEVICE_CLASS]                 = CONSTANTS.deviceClass;
        result[CONSTANTS.header.DEVICE_OS_VERSION]            = CONSTANTS.deviceOsVersion;
        result[CONSTANTS.header.DEVICE_VERSION]               = CONSTANTS.deviceVersion;
        result[CONSTANTS.header.DEVICE_NETWORK_TYPE]          = CONSTANTS.deviceNetworkType;
        result[CONSTANTS.header.DEVICE_NETWORK_SPEED_DOWN]    = CONSTANTS.deviceNetworkSpeedDown;
        result[CONSTANTS.header.DEVICE_NETWORK_SPEED_LATENCY] = CONSTANTS.deviceNetworkSpeedLatency;


        if(isNotNull(headerInfos)){
           for(let key of Object.keys(headerInfos)){
            result[key]=headerInfos[key];
           }
        }
  
        let resultData = {};
        for(let key of Object.keys(result)){
          if(isNotNull(result[key])){
            resultData[key]=result[key];
          }
        }
        
        return new  HttpHeaders(resultData);
      }
}