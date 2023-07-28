let a=document.getElementById("onbulb")
let b=document.getElementById("catimage")
let c=document.getElementById("switchon")
let d=document.getElementById("onbutton")
let e=document.getElementById("offbutton")
function onbutton1()
{
   a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
   b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
   c.textContent="Switch on"
}
function offbutton1()
{
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    c.textContent="Switch off"
}
