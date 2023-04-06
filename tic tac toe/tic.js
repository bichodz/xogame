 let title = document.getElementById('instruction')
 let turn = "x";
 let squars = [];
 let s1 = document.getElementById('item1')
 let s2 = document.getElementById('item2')
 let s3 = document.getElementById('item3')
 let s4 = document.getElementById('item4')
 let s5 = document.getElementById('item5')
 let s6 = document.getElementById('item6')
 let s7 = document.getElementById('item7')
 let s8 = document.getElementById('item8')
 let s9 = document.getElementById('item9')
function won(){
if (s1.innerHTML == s2.innerHTML && s2.innerHTML == s3 && s2.innerHTML != '') {
  alert('hello')
}

}


  

 function game(id){
  let element = document.getElementById(id)
  if(turn === 'x' && element.innerHTML == ''){
    element.innerHTML = "x";
    turn = 'o';
    title.innerHTML = 'O Turn';
  }
  else if(turn === 'o' && element.innerHTML == ''){
    element.innerHTML = "o";
    turn = 'x';
    title.innerHTML = 'X Turn';
  }
won()
 }
