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

const mainEl = document.querySelector(".wrapper.recipe")

function renderTitle(){
//     <section class="recipe-title border">
//     <h3>Spicy Arrabiata Penne</h3>
//      </section>

const titleSection = document.createElement("section")
titleSection.setAttribute("class", "recipe-title border")

const

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
    
}