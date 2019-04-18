const DOMNodeCollection = require('./dom_node_collection.js');
window.$l = function(arg) {
  if( arg instanceof HTMLElement){
    return new DOMNodeCollection([arg]);
  }else{
    let el = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(el));
  }
  
}

// elementList = parentNode.querySelectorAll(selectors);

