function intialFetches() {
  fetch("http://localhost:3000/currentMeal")
  .then(resp=>resp.json())
  .then(function (mealId) {
    // setState({currentMealId: data.currentId})
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.currentAPIId}`)
  .then(resp=>resp.json())
  .then(function (data) {
    const newData = niceData(data.meals[0])
    render(newData)
  })
  })
}

let state = {
  meals:[],
  comments:[],
  selectedMeal: null,
  // currentUser: "",
}

function setState(newState) {
  state = {...state, ...newState}
}

function stateFetches () {
  fetch("http://localhost:3000/meals")
  .then(resp=>resp.json())
  .then(function(data){
    console.log("this is the meal data", data)
    setState({meals: [...state.meals, ...data]})
  })

  fetch("http://localhost:3000/currentMeal")
  .then(function(resp) {
    return resp.json()
  })
  .then(function(data){
    console.log("this is the current meal:", data)
    setState({selectedMeal: data.currentAPIId})
  })
  fetch("http://localhost:3000/comments")
  .then(function(resp) {
    return resp.json()
  })
  .then(function(data){
    console.log("these are the comments:", data)
    setState({comments: [...state.comments, ...data]})
  })
}

stateFetches ()

function niceData(trickyData) {
  let chosenMeal = {
    mealName: trickyData.strMeal,
    mealImg: trickyData.strMealThumb,
    mealVideo: trickyData.strYoutube,
    mealInstructions: trickyData.strInstructions,
    mealIngredients: [],
  }
  for (const key in trickyData) {
    const value = trickyData[key]

    if (key.includes("Ingredient") && value !== (null || "")) {
      const measureKey = key.replace("Ingredient", "Measure")

      chosenMeal.mealIngredients.push({
        ingredient: value,
        measure: trickyData[measureKey]
      })
    }
  }

  const filteredIngerdients = chosenMeal.mealIngredients.filter(ingredient=>ingredient.measure!==" ")

  chosenMeal = {...chosenMeal, mealIngredients: [...filteredIngerdients]}

  return chosenMeal
}


const mainEl = document.querySelector(".wrapper.recipe")
console.log(mainEl)

function renderTitle(mealName){
//     <section class="recipe-title border">
//     <h3>Spicy Arrabiata Penne</h3>
//      </section>

  const titleSection = document.createElement("section")
  titleSection.setAttribute("class", "recipe-title border")

  const h3El = document.createElement("h3")
    h3El.innerText = mealName
    
  titleSection.append(h3El)
  
  mainEl.append(titleSection)
}

function renderImage(mealName, mealImage) {
    // <section class="recipe-image">
    //   <img
    //     src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    //     alt="Arrabiata img"
    //     width="250px"
    //   />
    // </section>    
    const imageSection = document.createElement("section")
    imageSection.setAttribute("class", "recipe-image")
    
      const imgEl = document.createElement("img")
      imgEl.setAttribute("src", mealImage)
      imgEl.setAttribute("alt", `image of ${mealName}`)
      imgEl.setAttribute("width", "250px")

      imageSection.append(imgEl)

    mainEl.append(imageSection)    
  }
 
  function renderVideo(mealVideo) {
//   <section class="recipe-video">
//   <iframe
//     width="250px"
//     height="250px"
//     src="https://www.youtube.com/embed/1IszT_guI08"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen
//   ></iframe>

  const videoSectionEl = document.createElement("section")
  videoSectionEl.setAttribute("class", "recipe-video")
  
  const iframeEl = document.createElement("iframe")
  iframeEl.setAttribute("width", "250px")
  iframeEl.setAttribute("height", "250px")
  iframeEl.setAttribute("src", URLConvertor())
  iframeEl.setAttribute("title", "YouTube video player")
  iframeEl.setAttribute("frameborder", "0")
  iframeEl.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
  iframeEl.setAttribute("allowfullscreen", "")
  
  videoSectionEl.append(iframeEl)
  
  mainEl.append(videoSectionEl)
  
  function URLConvertor(){ 
    let URL = mealVideo
    // https://www.youtube.com/embed/1IszT_guI08 
    // difference is watch?v= & embed/
    URL = URL.replace("watch?v=", "embed/")
    
    return URL
  }
}


function renderRecipe(recipe) {
  // <section class="recipe-instructions border">
  //       <h3>Instructions:</h3>
  //       <p>
  //         Bring a large pot of water to a boil. Add kosher salt to the boiling
  //         water, then add the pasta. Cook according to the package instructions,
  //         about 9 minutes.\r\nIn a large skillet over medium-high heat, add the
  //         olive oil and heat until the oil starts to shimmer. Add the garlic and
  //         cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped
  //         tomatoes, red chile flakes, Italian seasoning and salt and pepper to
  //         taste. Bring to a boil and cook for 5 minutes. Remove from the heat
  //         and add the chopped basil.\r\nDrain the pasta and add it to the sauce.
  //         Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.
  //       </p>
  //     </section>

  const recipeSection = document.createElement("section")
  recipeSection.setAttribute("class", "recipe-instructions border")

  const h3El = document.createElement("h3")
    h3El.innerText = "Instructions:"
    
    const pEl = document.createElement("p")
    pEl.innerText = recipe
    
  recipeSection.append(h3El, pEl)
  
  mainEl.append(recipeSection)
}

function renderIngredients(ingredients) {
//   <ul class="recipe-ingredients border">
//   <h3>Ingredients (with measurements):</h3>
//   <li>penne rigate: 1 pound</li>
//   <li>penne rigate: 1 pound</li>
//   <li>penne rigate: 1 pound</li>
//   <li>penne rigate: 1 pound</li>
//   <!-- ${strIngredient1}: ${strMeasure1} -->
//   <!-- need to be a for loop to get all the ingredients and measurements until null -->
// </ul>

console.log(ingredients)
  const ingredientsList = document.createElement("ul")
  ingredientsList.setAttribute("class", "recipe-ingredients border")

    const h3El = document.createElement("h3")
    h3El.innerText = "Ingredients (with measurements):"
    
  ingredientsList.append(h3El)
  
  for (const ingredient of ingredients) {
    const liEl = document.createElement("li")
    liEl.innerText = `${ingredient.ingredient}: ${ingredient.measure}`

    ingredientsList.append(liEl)
  }

  mainEl.append(ingredientsList)
}

function renderComments(){
  // <section class="recipe-comments border">
  //       <input type="text" placeholder="enter a comment" />
  //       <ul class="comments-box">
  //         <li>
  //           Ade: Looks amazing! I cant believe something so tasty exist on the
  //           planet of this earth<button>edit</button><button>delete</button>
  // </section>
  
  const commentsSectionEl = document.createElement("section")
  commentsSectionEl.setAttribute("class","recipe-comments border")

  const formEl = document.createElement("form")

  const commentInputEl = document.createElement("input")
      commentInputEl.setAttribute("type", "text")
      commentInputEl.setAttribute("placeholder", "Enter a comment!")

    formEl.append(commentInputEl)
    
    formEl.addEventListener("submit", function(event){

      event.preventDefault()

      const newComment = {
      content: commentInputEl.value,
      mealId: state.selectedMeal,
      upvotes: 0,
      downvotes: 0
    }

      fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
      })

      formEl.reset()
    })
    
    const ulEl = document.createElement("ul")
    ulEl.setAttribute("class", "comments-box")

  commentsSectionEl.append(formEl, ulEl)
  
  mainEl.append(commentsSectionEl)
}

function render(data){
  renderTitle(data.mealName)
  renderImage(data.mealName, data.mealImg)
  renderVideo(data.mealVideo)
  renderRecipe(data.mealInstructions)
  renderIngredients(data.mealIngredients)
  renderComments()
}

intialFetches()