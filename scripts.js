////////////////////////////////////////
// Data exchange and event practice #3//
////////////////////////////////////////

var list = document.getElementById("toDoInput");

document.getElementById("myBtn2").addEventListener("click", myFunction2);

function myFunction2() {
  list = document.getElementById("toDoInput").innerHTML;
  console.log(list);
  $('#toDoList').append(
    '<li>'+list.value+'</li>'); /////ÉSITTFELADTAM :D///////
}



////////////////////////////////////////
// Data exchange and event practice #1//
////////////////////////////////////////

$('.counter').on('click', () => {
  console.log("Yeah, you've just clicked me");
});

$('.changer1').on('click', () => {
  $('.counter').text("Ugorj a kútba");
  $('.counter').css("background", "yellow");
});

$('.changer2').one('click', () => {
  var changeColor = document.getElementById('newColor').value;
  console.log(changeColor);
  $('button').css("background", changeColor);
});

////////////////////////////////////////
// Data exchange and event practice #2//
////////////////////////////////////////

var i = 0

function Increase() {
    document.getElementById("click").innerHTML = i++ + 1;
}

function Decrease() {
  document.getElementById("click").innerHTML = i-- - 1;
}

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("click").innerHTML = i-- - 1;
}

///////////////////////////////////////////
// HTML manipulation practice with jquery//
///////////////////////////////////////////

let names = ['Eva', "Me", "Me", "Tom"];
console.log (names);

names.forEach(value => {
  if (value !== "Me") {
  $('#listPractice').append(
    '<li>'+value+'</li>'
  );} else {
    $('#listPractice').append(
      '<li class="me">'+value+'</li>'
    );
  }
});

$('.me').css("font-weight", "bold");

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('main').append(  
    '<h1>'+additionalBlock.title+'</h1>'
    )

    $('main').append(  
      '<p>'+additionalBlock.text+'</p>'
      )




///////////////////////
//Korábbi gyakorlatok//
///////////////////////



/*$('main').append(
  '<h3 id="new">Meglepiiii</h3>'
);

$("#new").css("background", "red");*/


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