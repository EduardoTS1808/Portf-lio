let triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

let obj = new ColoredTriangle();
//    em OBJ para PROP 
for (let prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    // console.log("obj." + prop + " = " + obj[prop]);
  }
}

// Output:
// "obj.color = red"




// INSTRUÇÕES DIVERSAS


// WITH

    // sintaxe

    with(objeto)
        instrução
        