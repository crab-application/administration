
export const isNull = function(value:any) {
    return (value == undefined || value === null);
}

export const isNotNull = function(value:any) {
    return !isNull(value);
}

export const isEmpty = function(value:any[]){
    return isNull(value) || value.length==0;
}

export const isNotEmpty = function(value:any[]){
    return !isEmpty(value);
}