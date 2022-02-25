const loadMeals = async() =>{
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;

    // clear the searchField
    searchField.value = '';
    if(searchText == ''){
        alert('please write your food name');
    }
    else{
        // show the spinner
        const spinnerDiv = document.getElementById('spiner-id');
        spinnerDiv.classList.remove('d-none');
        //get the api
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // fetch(url)
        // .then(res => res.json())
        // .then(data =>displayMeals(data.meals));
        const res = await fetch(url);
        const data = await res.json();
        displayMeals(data.meals);
    }  
}

const displayMeals = mealsLists =>{
    //hide the spinner
    const spinnerDiv = document.getElementById('spiner-id');
    spinnerDiv.classList.add('d-none');

    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.textContent = '';
    const foodDetails = document.getElementById('food-details');
    foodDetails.textContent = '';

    mealsLists.forEach(meal =>{
        const div =document.createElement('div');
        div.classList.add('col')
        div.innerHTML =`
        <div onclick="mealDetails('${meal.idMeal}')" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                </div>
        </div>
        `;
        mealsContainer.appendChild(div);
    })
};

const mealDetails = async(mealId)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // fetch(url)
    // .then(res => res.json())
    // .then(data =>showMealDetails(data.meals[0]))
    const res = await fetch(url);
    const data = await res.json();
    showMealDetails(data.meals[0])
};

const showMealDetails = details =>{
    console.log(details)
    const foodDetails = document.getElementById('food-details');
    foodDetails.textContent = '';
   
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${details.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${details.strMeal}</h5>
              <p class="card-text">${details.strCategory}</p>
              <p class="card-text">${details.strInstructions.slice(0,150)}</p>
              <a href="${details.strYoutube}" class="btn btn-primary">watch video</a>
            </div>
    `;
    foodDetails.appendChild(div);
}
