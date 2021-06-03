
{/* <main class="wrapper recipe">
      <section class="recipe-title border">
        <h3>Spicy Arrabiata Penne</h3>
      </section>
      <section class="recipe-image">
        <img
          src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
          alt="Arrabiata img"
          width="250px"
        />
      </section>
      <section class="recipe-video">
        <iframe
          width="250px"
          height="250px"
          src="https://www.youtube.com/embed/1IszT_guI08"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <!--function URLConvertor(){ 
              const URL = ${https://www.youtube.com/watch?v=1IszT_guI08}
                        https://www.youtube.com/embed/1IszT_guI08 
                        difference is watch?v= & embed/
              let URL = URL.replace("watch?v=", "embed/")
            }
            strYoutube
        -->
      </section>
      <section class="recipe-instructions border">
        <h3>Instructions:</h3>
        <p>
          Bring a large pot of water to a boil. Add kosher salt to the boiling
          water, then add the pasta. Cook according to the package instructions,
          about 9 minutes.\r\nIn a large skillet over medium-high heat, add the
          olive oil and heat until the oil starts to shimmer. Add the garlic and
          cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped
          tomatoes, red chile flakes, Italian seasoning and salt and pepper to
          taste. Bring to a boil and cook for 5 minutes. Remove from the heat
          and add the chopped basil.\r\nDrain the pasta and add it to the sauce.
          Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.
        </p>
      </section>
      <ul class="recipe-ingredients border">
        <h3>Ingredients (with measurements):</h3>
        <li>penne rigate: 1 pound</li>
        <li>penne rigate: 1 pound</li>
        <li>penne rigate: 1 pound</li>
        <li>penne rigate: 1 pound</li>
        <!-- ${strIngredient1}: ${strMeasure1} -->
        <!-- need to be a for loop to get all the ingredients and measurements until null -->
      </ul>
      <section class="recipe-comments border">
        <!-- <h3 class="comment-title">Comments</h3> -->
        <ul class="comments-box">
          <li>
            Ade: Looks amazing! I cant believe something so tasty exist on the
            planet of this earth<button>edit</button><button>delete</button>
          </li>
          <li>
            Ade: Looks amazing!<button>edit</button><button>delete</button>
          </li>
          <li>
            Ade: Looks amazing!<button>edit</button><button>delete</button>
          </li>
          <li>
            Ade: Looks amazing!<button>edit</button><button>delete</button>
          </li>
        </ul>
        <input type="text" placeholder="enter a comment" />
      </section>
    </main> */}

    // function intialFetches() {
    //   fetch("http://localhost:3000/currentMeal")
    //   .then(resp=>resp.json())
    //   .then(function (data) {
    //     setState({currentMealId: data.currentId})
    //     fetch("http://localhost:3000/meals")
    //   .then(resp=>resp.json())
    //   .then(function (data) {
    //     setState({meals: [...state.meals, ...data]})
    //     const currentMeal = state.meals.find(meal=>meal.id===state.currentMealId)
    //   })
    //   })
    // }

const mainEl = document.querySelector(".wrapper.recipe")
console.log(mainEl)

function renderTitle(){
//     <section class="recipe-title border">
//     <h3>Spicy Arrabiata Penne</h3>
//      </section>

  const titleSection = document.createElement("section")
  titleSection.setAttribute("class", "recipe-title border")

    const h3El = document.createElement("h3")
    h3El.innerText = ""

  titleSection.append(h3El)

  mainEl.append(titleSection)
}

function renderImage() {
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
      imgEl.setAttribute("src", "")
      imgEl.setAttribute("alt", "")
      imgEl.setAttribute("width", "250px")

    imageSection.append(imgEl)

    mainEl.append(imageSection)    
}
 
function renderVideo() {
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
//   <!--function URLConvertor(){ 
//         const URL = ${https://www.youtube.com/watch?v=1IszT_guI08}
//                   https://www.youtube.com/embed/1IszT_guI08 
//                   difference is watch?v= & embed/
//         let URL = URL.replace("watch?v=", "embed/")
//       }
//       strYoutube
//   -->
// </section>  
  const videoSectionEl = document.createElement("section")
  videoSectionEl.setAttribute("class", "recipe-video")
  
  const iframeEl = document.createElement("iframe")
  iframeEl.setAttribute("width", "250px")
  iframeEl.setAttribute("height", "250px")
  iframeEl.setAttribute("src", URLConvertor)
  iframeEl.setAttribute("title", "YouTube video player")
  iframeEl.setAttribute("frameborder", "0")
  iframeEl.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
  iframeEl.setAttribute("allowfullscreen", "")
  
  videoSectionEl.append(iframeEl)
  
  mainEl.append(videoSectionEl)

  function URLConvertor(){ 
    let URL = "https://www.youtube.com/watch?v=1IszT_guI08"
    // https://www.youtube.com/embed/1IszT_guI08 
    // difference is watch?v= & embed/
    URL = URL.replace("watch?v=", "embed/")
  }
}


function renderRecipe() {
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
    pEl.innerText = ""

  recipeSection.append(h3El, pEl)

  mainEl.append(recipeSection)
}

function renderIngredients() {
//   <ul class="recipe-ingredients border">
//   <h3>Ingredients (with measurements):</h3>
//   <li>penne rigate: 1 pound</li>
//   <li>penne rigate: 1 pound</li>
//   <li>penne rigate: 1 pound</li>
//   <li>penne rigate: 1 pound</li>
//   <!-- ${strIngredient1}: ${strMeasure1} -->
//   <!-- need to be a for loop to get all the ingredients and measurements until null -->
// </ul>

  const ingredientsList = document.createElement("ul")
  ingredientsList.setAttribute("class", "recipe-ingredients border")

    const h3El = document.createElement("h3")
    h3El.innerText = "Ingredients (with measurements):"

  ingredientsList.append(h3El)

  // will add loop later

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

  const commentInputEl = document.createElement("input")
  commentInputEl.setAttribute("type", "text")
  commentInputEl.setAttribute("placeholder", "Enter a comment!")

  commentsSectionEl.append(commentInputEl)

  const ulEl = document.createElement("ul")
  ulEl.setAttribute("class", "comments-box")

  commentsSectionEl.append(ulEl)
  
  mainEl.append(commentsSectionEl)
}

function render(){
  renderTitle()
  renderImage()
  renderVideo()
  renderRecipe()
  renderIngredients()
  renderComments()
}

render()