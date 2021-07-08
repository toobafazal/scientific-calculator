// getting numbers 
function display(val){
    var dis = document.getElementById('result')
    dis.value += val
}
// getting result 
function result(){
    var dis = document.getElementById('result')
    var x = dis.value
    var y = eval(x)
    dis.value = y
}
// delete numbers 
function del(){
    var dis = document.getElementById('result')
    dis.value = ''
}
function x2(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,2)

}
function x3(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,3)

}
function x4(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,4)

}
function x5(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,5)

}
function x6(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,6)

}
function x7(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,7)

}
function x9(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,9)

}
function sin(){
    var dis = document.getElementById('result')
    dis.value = Math.sin(dis.value*(Math.PI/180))
}
function sinh(){
    var dis = document.getElementById('result')
    dis.value = Math.sinh(dis.value)
}

function asin(){
    var dis = document.getElementById('result')
    dis.value = Math.asin(dis.value)
}
function asinh(){
    var dis = document.getElementById('result')
    dis.value = Math.asinh(dis.value)
}
function cos(){
    var dis = document.getElementById('result')
    dis.value = Math.cos(dis.value*(Math.PI/180))
}
function cosh(){
    var dis = document.getElementById('result')
    dis.value = Math.cosh(dis.value)
}

function acos(){
    var dis = document.getElementById('result')
    dis.value = Math.acos(dis.value)
}
function acosh(){
    var dis = document.getElementById('result')
    dis.value = Math.acosh(dis.value)
}

function tan(){
    var dis = document.getElementById('result')
    dis.value = Math.tan(dis.value*(Math.PI/180))
}
function tanh(){
    var dis = document.getElementById('result')
    dis.value = Math.tanh(dis.value)
}

function atan(){
    var dis = document.getElementById('result')
    dis.value = Math.atan(dis.value)
}
function atanh(){
    var dis = document.getElementById('result')
    dis.value = Math.atanh(dis.value)
}
function cot(){
    var dis = document.getElementById('result')
    dis.value = Math.tan(dis.value*(Math.PI/180))
}
function coth(){
    var dis = document.getElementById('result')
    dis.value = Math.tanh(dis.value)
}
function log(){
    var dis = document.getElementById('result')
    dis.value = Math.log10(dis.value)

}

function ln(){
    var dis = document.getElementById('result')
    dis.value = Math.log(dis.value)

}
function cube(){
    var dis = document.getElementById('result')
    dis.value = Math.cbrt(dis.value)
}
function four(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,1/4)
}
function five(){
    var dis = document.getElementById('result')
    dis.value = Math.pow(dis.value,1/5)
}
function square(){
    var dis = document.getElementById('result')
    dis.value = Math.sqrt(dis.value)
}






