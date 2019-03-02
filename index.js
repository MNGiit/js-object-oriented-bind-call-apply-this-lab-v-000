//Your code here
function justInvoke(fn, args){
  return fn(args);
}

function setThisWithCall(fn, thisValue, arg){
  return fn(arg).call(thisValue);
}