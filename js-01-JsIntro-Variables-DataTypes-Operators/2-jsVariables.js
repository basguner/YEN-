
//***JAVASCRİPT DEĞİŞKENLER ***/
// Değişken bir değer tutar ve çağrıldığı her yerde o değer işleme girer.



const degiskenAdi="Javascript"
let sayi=10
var isFalse=true

console.log(degiskenAdi);
console.log(sayi*10);
//****GLOBAL SCOPE VE LOCAL SCOPE****/
//? Global Scope: Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir.
//? Kodu yamaya bağladığımızda global scope yazarız.SAdece tek global scope var.

const x="Bu global aland oluşturuldu";

//? Local Scope : Bir block içi (fonksiyon, if bloğu  gibi alanlar)


console.log("Bu kısım local alandır");

/ ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

