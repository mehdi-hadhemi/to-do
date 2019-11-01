const input=document.getElementById("texto");
const bot=document.getElementById("add");
 bot.addEventListener("click", function(){ 
     if((texto.value)!=""){
    let btn1=document.createElement("button")
    let btn2=document.createElement("button")
    btn1.innerHTML="complete"
    btn2.innerHTML="delete"
    document.body.appendChild(btn1)
    document.body.appendChild(btn2)
     const text=document.createElement("H3")
     text.innerText=texto.value
     document.body.appendChild(text)
     btn1.addEventListener("click",function(){
          if (btn1.innerHTML==="undo"){
    btn1.innerHTML="complete"
text.style.textDecoration='none'
}
    else {
        btn1.innerHTML="undo"
        text.style.textDecoration='line-through'
    }
  
     })
     btn2.addEventListener("click",function(){
        btn1.remove()
        btn2.remove()
        text.remove()
     })
    }
    })
