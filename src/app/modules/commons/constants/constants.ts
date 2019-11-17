import {isNotNull,isNull} from './checks';

const _buildUid = function(){
        return (_s4() + (_s4() + "-" + _s4() +_s4().substr(0,3) + "-" + _s4() + "-" +_s4() + _s4() + _s4())).toLowerCase();
};

const _s4 = function(){
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}

const localNavigator : any = window["navigator"];

export const CONSTANTS : any = {
    header :  {
        DEVICE_IDENTIFIER               : "x-device-identifier",
        CORRELATION_ID                  : "x-correlation-id",
        CONVERSATION_ID                 : "x-conversation-id",
        CLIENT_VERSION                  : "x-client-version",
        DEVICE_TYPE                     : "x-device-type",
        DEVICE_CLASS                    : "x-device-class",
        DEVICE_OS_VERSION               : "x-device-os-version",
        DEVICE_VERSION                  : "x-device-version",
        DEVICE_NETWORK_TYPE             : "x-device-network-type",
        DEVICE_NETWORK_SPEED_DOWN       : "x-device-network-speed-down",
        DEVICE_NETWORK_SPEED_UP         : "x-device-network-speed-up",
        DEVICE_NETWORK_SPEED_LATENCY    : "x-device-network-speed-latency",
        LANGUAGE                        : "x-language",
        COUNTRY                         : "x-country",
        DEVICE_IP                       : "x-device-ip"
    },
    deviceVersion: "",

    deviceIdentifier :  (()=> {
        let  savedDeviceIdentifier =  localStorage.getItem("x-device-identifier");
        if(savedDeviceIdentifier == undefined || savedDeviceIdentifier== null){
             savedDeviceIdentifier = _buildUid();
        }
        return savedDeviceIdentifier;
    })(),
    
    deviceType  : (()=> {
        return null;
    })(),
    deviceClass :  (()=> {
        return null;
    })(),
    deviceOsVersion: (()=> {
        return null;
    })(),
   
    deviceNetworkType: (()=> {
        var result = [];
        if(isNotNull(localNavigator.connection)){
            result.push(isNull(localNavigator.connection.type)?"unknown":localNavigator.connection.type);
            result.push(localNavigator.connection.effectiveType);
        }
        return result.join('_');
    })(),
    deviceNetworkSpeedDown : (()=> {
        return isNotNull(localNavigator.connection)?localNavigator.connection.downlink: 0;
    })(),
    deviceNetworkSpeedLatency: (()=> {
        return isNotNull(localNavigator.connection)?localNavigator.connection.rtt:0;
    })(),

};

