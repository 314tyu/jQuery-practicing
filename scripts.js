$('main').append(
    '<h3 id="new">Meglepiiii</h3>'
);

$("#new").css("background", "red");

let names = ['Eva', "Peter", "Me"];
console.log (names);

names.forEach(value => {
  $('ul').append(
   /* console.log(value);*/
    '<li>ujElem</li>'
  );
});

/*let printNumbers = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
} 

printNumbers(10);

for (let i = 0; i < 10; i++) {
    console.log(i);
  }
 
  for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
 */   


/*let printValues = (array) => {
    for(let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  printValues([1, 2, 3, 4]);*/
  
 /* let printValues2 = (array) => {
    array.forEach(value => {
      console.log(value);
    });
  }

  printValues2([1, 3, 5])*/