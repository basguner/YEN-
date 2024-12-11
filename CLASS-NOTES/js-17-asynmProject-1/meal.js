fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
.then((res) => res.json()) 
.then((veri) => showScreen(veri.meals));




function showScreen(data) {
    const mealsDiv = document.querySelector(".food");
  
    data.forEach((a) => {
      mealsDiv.innerHTML += `
  <div class="col-sm-6 col-md-4">
  <p>${a.strMeal} </p>
  <img width="200px" src=${a.strMealThumb}  alt=""/>
  </div>
  
  
  
  `;
    });
  }


  console.log(
    document.querySelectorAll(("img"))
  )