
/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object kullanılır

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

const isim=["Ali","Veli","Sema"]
const soyad=["güven","güvenme","doğrusöz"]

console.log(`${isim[1]} ${soyad[1]}`)

const ogr={ ad:"Ali",soyad:"Güven"}
console.log(ogr.ad,ogr.soyad)
/* -------------------------------------------------------------------------- */
//* --------------------------------------------------------------*/
//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/
//! 3 farkli yöntem ile Object oluşturulabilir.
//? 1. Object() class'ından türetme
// Bu yöntem, JavaScript'teki Object sınıfını kullanarak bir nesne oluşturmayı içerir. 
// Bunun için new Object() yazılır ve sonradan nesneye özellikler atanır.

const car=new object()
car.marka="BMW"
car.model=2010
car.horsePower=150
console.log(car)


const car1=new Object()
car1.marka="scoda"
car1.model="2024"
car1.horsepower=200
console.log(car1);
