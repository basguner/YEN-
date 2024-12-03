console.log("**** CREATE NODE ****")

//? 1- yeni bir li elementi olustur
const newLi = document.createElement("li")

//? 2- Eger text tabanlı bir element ise text dugumunu olustur
const textLi = document.createTextNode("Go")

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
newLi.appendChild(textLi)

//?4- Yeni olusan elementi DOM tree'ye ekle.
document.querySelector("ul").appendChild(newLi)

//? 2.bir "li" oluşturalım

const newLi2 = document.createElement("li")
newLi2.textContent = "C++"


//? Element.before() veya element.after() ile bir elementi istediğmiz elementin onune veya devamına eklemek mümkündür.
const react = document.querySelector("ul li:nth-child(4)")
console.log(react)
react.appendChild(newLi2)
react.before(newLi, newLi2)

// document.querySelector("ul li:nth-child(1)").after(newLi2)

//* ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------


//? 1- element.attribute = "yeni deger"
//* yazma
newLi.className = "list red bold bg-primary text-center " 
// newLi.className = "selam"
newLi.id = "new-li" 
newLi.title = "merhaba" 

//* okuma
console.log(newLi.title)

//? 2- setAttribute(atr,"deger") getAttrbute("atr")
newLi2.setAttribute("class", "list border border-danger border-3")
newLi2.setAttribute("id", "new-li2")

console.log(newLi2.getAttribute("id"))
console.log(newLi2.getAttribute("class"))