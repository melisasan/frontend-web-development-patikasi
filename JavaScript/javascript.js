let username= "melisa"
const DOMAIN = "hotmail.com"
let firstName = "melisa"
let surname = "san"

let email = username + "@" + DOMAIN

let info = ` Merhaba ${username} sitemize hoşgeldin. Mail adresin ${email}

,mail adresinin uzunluğu ${email.length}

borcunuz ${(2+3)*10} EURO

, günün saat bilgisi ${new Date().getHours()}

`
console.log(info)


console.log(email.search("@")) //6


let dom = email.slice( email.search("@") + 1)

console.log(dom)  //@hotmail.com


dom.slice(0,5)

dom.indexOf('.') //gmailden sonraki nokta nerede ->6

//bölme
console.log(
    dom.slice(0,dom.indexOf('.'))
) //hotmail

//bilgi degistirme
email = email.replace('hotmail.com','gmail.com')
console.log(email)

//kontrol etme
email.includes('@') //true

email.search('dfgdsg') //false

email.endsWith('@') //false

email.endsWith('com') //true

//ilk harfleri büyük yapmak

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${surname[0]
    .toUpperCase()}${surname.slice(1).toLowerCase()}`

console.log(fullName)