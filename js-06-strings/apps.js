///*****strings***** */




//!string tanımlama
const str1 = "claruswey"
const str2 = `hello`
console.log(typeof(str2));


//**string constructor ile string oluşturma */
const str3 = new String("world")
console.log(typeof(str2));

const str4 =""



let kelime = "clarusway"
console.log(kelime[0]);
console.log(kelime[1]);
/! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir 
//parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()         Returns the Unicode of the character at the specified index.
// concat()             Joins two or more strings, and returns a new string.
// endsWith()           Checks whether a string ends with a specified substring.
// fromCharCode()       Converts Unicode values to characters.
// includes()           Checks whether a string contains the specified substring.
// indexOf()            Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()        Returns the index of the last occurrence of the specified value in a string.
// localeCompare()      Compares two strings in the current locale.
// match()              Matches a string against a regular expression, and returns an array of all matches.
// repeat()             Returns a new string which contains the specified number of copies of the original string.
// replace()            Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()              Searches a string against a regular expression, and returns the index of the first match.
// slice()              Extracts a portion of a string and returns it as a new string.
// split()              Splits a string into an array of substrings.
// startsWith()         Checks whether a string begins with a specified substring.
// substr()             Extracts the part of a string between the start index and a number of characters after it.
// substring()          Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()  Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()  Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()        Converts a string to lowercase letters.
// toString()           Returns a string representing the specified object.
// toUpperCase()        Converts a string to uppercase letters.
// trim()               Removes whitespace from both ends of a string.
// valueOf()            Returns the primitive value of a String object.




/************lenght- proprrth */

//? lenght => bir stringin boşluklarla  toplam kaç karakter odugunu verir


 const metin = "clarusway"
 console.log(metin.lenth);


 //!*************string metodları***//////


 ////*************
 //********toLowerCase() toUpperCase() inmutable=değiştirmez*/ */


const metin ="clarusway"
 console.log(metin.toLowerCase());
 console.log(metin);
 let yeniMetin = metin.toLowerCase()
 console.log(yeniMetin);