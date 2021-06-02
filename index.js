const mainEl = document.querySelector("main")
const searchSection = document.createElement("section")
searchSection.setAttribute("class", "form-container")
const cardsSectionEl = document.createElement("section")
cardsSectionEl.setAttribute("class", "result-container")
mainEl.append(searchSection, cardsSectionEl)

// For the main page
    // Search meal by name of Arrabiata
    // https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

    // Filter by Category of Seafood
    // https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

    // Filter by main ingredient of chicken brast
    // https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

    // Filter by Area of Canada
    // https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

    // Lookup a single random meal
    // https://www.themealdb.com/api/json/v1/1/random.php

// For the second page
    // Lookup full meal details by id
    // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772


function renderForm() {
    searchSection.innerHTML = ""
    const searchForm = document.createElement("form")
    searchForm.setAttribute("class", "recipe-search-form")
    searchForm.setAttribute("action", "submit")
    
        const searchFormLabel = document.createElement("label")
        searchFormLabel.setAttribute("id", "recipe-label")
        searchFormLabel.setAttribute("for", "recipe-search")
        searchFormLabel.innerText = "Search for your recipe:"
    
        const searchFormInput = document.createElement("input")
        searchFormInput.setAttribute("id", "recipe-input")
        searchFormInput.setAttribute("type", "text")
        searchFormInput.setAttribute("name", "recipe-search")
    
    searchForm.append(searchFormLabel, searchFormInput)
    
    searchSection.append(searchForm)

    listenToSearchMealForm()
}


function renderSingleCard(meal) {
    // <form class="card">
    //   <section class="card-title">BeaverTails</section>
    //   <section class="card-thumbnail">
    //     <img
    //       src="https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg"
    //       alt="an image of beavertails"
    //     />
    //   </section>
    // </form>
    const formEl = document.createElement("form")
    formEl.className = "card"
    
    const cardTitleEl = document.createElement("h2")
    cardTitleEl.className = "card-title"
    cardTitleEl.innerText = meal.strMeal
    
    const thumbNailSectionEl = document.createElement("section")
    thumbNailSectionEl.className = "card-thumbnail"
    
    const thumbNailImageEl = document.createElement("img")
    thumbNailImageEl.setAttribute("src", meal.strMealThumb)
    thumbNailImageEl.setAttribute("alt", `an image of ${meal.strMeal}`)
    
    thumbNailSectionEl.append(thumbNailImageEl)
    
    formEl.append(cardTitleEl, thumbNailSectionEl)
    
    cardsSectionEl.append(formEl)
}

function renderMultipleCards(data){
    cardsSectionEl.innerHTML = ""
    for ( const meal of data) {
        renderSingleCard(meal)
    }
}

function getMealByName(mealName) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(function(response){
        return response.json()
    })
}

function getRandomMeal() {
    return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(function(response){
        return response.json()
    })
}

function getMealByCategory(category) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(function(response){
        return response.json()
    })
}

function getMealByMainIngredient(mainIngredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`)
    .then(function(response){
        return response.json()
    })
}

function getMealByCuisine(cuisine) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`)
    .then(function(response){
        return response.json()
    })
}

function listenToSearchMealForm() {
    const formEl = document.querySelector(".recipe-search-form")
    formEl.addEventListener('submit', function(event) {
        event.preventDefault()
        
        const searchValue = formEl["recipe-search"].value

        if (state.searchParameters === "cuisine") {
            getMealByCuisine(searchValue).then(function(mealsFromServer) {
                renderMultipleCards(mealsFromServer.meals)
            })
        }else if (state.searchParameters === "name") {
            getMealByName(searchValue).then(function(mealsFromServer) {
                renderMultipleCards(mealsFromServer.meals)
            })
        }else if (state.searchParameters === "ingredient") {
            getMealByMainIngredient(searchValue).then(function(mealsFromServer) {
                renderMultipleCards(mealsFromServer.meals)
            })
        }else if (state.searchParameters === "category") {
            getMealByCategory(searchValue).then(function(mealsFromServer) {
                renderMultipleCards(mealsFromServer.meals)
            })
        }

    })
}

const selectEl = document.querySelector("#search-categories")

let state = {
    meals:[],
    comments:[],
    selectedMeal: "",
    currentUser: "",
    searchParameters: selectEl.value
}

selectEl.addEventListener("input", function () {
    cardsSectionEl.innerHTML = ""
    if (selectEl.value==="random") {
        getRandomMeal().then(function(mealsFromServer) {
            renderMultipleCards(mealsFromServer.meals)
        })
        state.searchParameters = selectEl.value
    } else {
        state.searchParameters = selectEl.value
        renderForm()
    }
})