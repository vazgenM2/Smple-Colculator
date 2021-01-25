let item
let out = document.getElementById('output')
let a = document.getElementById('one')
out.placeholder = 'Enter'

function simpleBtn(id) {
  effect(id)
  out.value += item.innerHTML
} 

function delLast(id) {
  item = document.getElementById(id)
  item.style.backgroundColor = 'rgb(150,150,150)'
  item.style.border = '1px double grey'
setTimeout(function(){
  item.style.backgroundColor = 'rgb(255, 174, 174)'
  item.style.border = '1px solid black'},200)
  
  let del;
  del = out.value.split("")
  del.pop()
  out.value = del.join("")
}

function delAll(id) {
  item = document.getElementById(id)
  item.style.backgroundColor = 'rgb(150,150,150)'
  item.style.border = '1px double grey'
setTimeout(function(){
  item.style.backgroundColor = 'rgb(255, 79, 79)'
  item.style.border = '1px solid black'},200)
  out.value = ''
}

function showResult(id) {
  item = document.getElementById(id)
  item.style.backgroundColor = 'rgb(150,150,150)'
  item.style.border = '1px double grey'
setTimeout(function(){
  item.style.backgroundColor = 'rgb(255, 253, 132)'
  item.style.border = '1px solid black'},200) 
  let res = out.value
  try {
  if(eval(res) == undefined)  out.value = ''
  else if(eval(res) == Infinity) out.value= "You can't do it" 
  else out.value = eval(res)
  }
catch(error) {
  let last = out.value
  out.style.border = '3px double red'
  out.style.color = 'red'
  out.value = 'Error'
  setTimeout(function(){
    out.style.border = '2px solid rgb(36, 36, 36)'
    out.style.color = 'black'
    out.value = last
  },500)
}
}
    
function effect(id) {
  item = document.getElementById(id)
  item.style.backgroundColor = 'rgb(150,150,150)'
  item.style.border = '1px double grey'
setTimeout(function(){
  item.style.backgroundColor = 'rgb(236, 236, 236)'
  item.style.border = '1px solid black'},200)
}