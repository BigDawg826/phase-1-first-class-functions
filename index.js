function receivesAFunction(callbackFunc){
    callbackFunc();
}

function returnsANamedFunction(){
    const knownFunc = () => console.log('this function is known');
    return knownFunc
}

function returnsAnAnonymousFunction(){
    return () => console.log('this function is unknown');
    
}