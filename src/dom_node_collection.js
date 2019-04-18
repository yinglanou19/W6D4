class DOMNodeCollection{

  constructor(htmlEleArray){
    this.htmlEleArray = htmlEleArray;
  }

  html(str = "") {
    if (str) {
      this.htmlEleArray.map( el => {
        el.innerHTML = str;
    }) 
    } else {
    return this.htmlEleArray[0].innerHTML;
    }
  }


  empty() {
    this.htmlEleArray.map( el => {
       el.innerHTML = "";
    });
  }

  append(arg) {
    if (typeof arg === "string") {
      this.htmlEleArray.forEach ( el => {
        el.innerHTML = arg;
      }) } else if (arg instanceof HTMLElement) {
        this.htmlEleArray.forEach ( el => { 
          el.innerHTML += arg.outerHTML;
        }) } else {
          arg.htmlEleArray.forEach( el =>{
            append(el);
          });
        }
  }
    
}

  
module.exports = DOMNodeCollection;
