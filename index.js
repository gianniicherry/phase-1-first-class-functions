function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function namedFunc(){};
}
function returnsAnAnonymousFunction(){
    return function (){}
}