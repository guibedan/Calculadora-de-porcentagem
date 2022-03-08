function c1() {
var n01 = document.getElementById('n1')
var n02 = document.getElementById('n2')
var b = document.getElementById('but')
var res = document.getElementById('r1')

var n1 = Number(n01.value)
var n2 = Number(n02.value)

var R = n1*n2/100


res.innerHTML = `${R}`
}

function c2() {
var n01 = document.getElementById('n11')
var n02 = document.getElementById('n22')
var b = document.getElementById('but')
var res = document.getElementById('r2')

var n1 = Number(n01.value)
var n2 = Number(n02.value)

var R = n1/n2*100

res.innerHTML = `${R}%`
}

function c3() {
    var n01 = document.getElementById('n01')
    var n02 = document.getElementById('n02')
    var b = document.getElementById('but')
    var res = document.getElementById('r3')
    
    var n1 = Number(n01.value)
    var n2 = Number(n02.value)
    
    var R1 = n1*n2/100
    var R2 = n2+R1

    res.innerHTML = `${R2}`
}

function c4() {
    var n01 = document.getElementById('n001')
    var n02 = document.getElementById('n002')
    var b = document.getElementById('but')
    var res = document.getElementById('r44')
    
    var n1 = Number(n01.value)
    var n2 = Number(n02.value)
    
    var R1 = n1*n2/100
    var R2 = n2-R1

    res.innerHTML = `${R2}`
}
