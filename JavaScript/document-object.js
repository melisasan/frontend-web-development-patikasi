console.log(document.URL)

console.log(document.location)

console.log(document.location.hostname)

console.log(document.body)

document.body.style.backgroundColor = "aqua"

//************************************************/

let h2 = document.getElementsByTagName('h2')

console.log(h2)

console.log(h2.title.innerHTML)

//************************************************/

let title1 = document.getElementById('title')

console.log(title1)

console.log(title1.innerHTML)

title1.innerHTML = "changed value"
console.log(title1)


// Query selector (query selector eleman birden fazla olsa bile bir tane seçer)

//let link = document.querySelector("ul#list>li>a")

//console.log(link)

//console.log(link.innerHTML)

let link2 = document.querySelector("#kodluyoruzLink")
link2.innerHTML += degisti
link2.style.color = "pink"
link2.classList.add('btn')


//********************* */

- document.getElementById('#root'); // null
+ document.getElementById('root'); // <div id=​"root">​…​</div>​

//************************* */

//promt

let fullName1 = prompt("Lutfen adınızı giriniz: ") //ilkel yönteö

//Prompt() kullanıcıya soru sorup klavyeden girilen bilgiyle işlem yapan, o bilgiyi
// döndüren bir window metodudur. alert() gibi Html üzerinde, HTML sayfasından bağımsız çalışır ve karşımıza diyalog 
//penceresi şeklinde çıkar.


//
