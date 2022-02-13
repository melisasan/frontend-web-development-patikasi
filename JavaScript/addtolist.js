var list = document.querySelector("ul");

var data = document.querySelector("#data"); 
var add = document.querySelector("#add");

add.addEventListener("click",function(){
    // createElement ile yeni bir listItem (li) oluşturuyoruz
    var li=document.createElement("li"); 
    
    // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
    li.textContent=data.value; 
    
    // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
    list.appendChild(li);
                
    // Veri inputu içerisindeki metni siliyoruz.
    data.value = "";
  });