import "./scss/style.scss"
const form = document.querySelector("header form");


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("form tetiklendi")


    getInputVl()



}
)
