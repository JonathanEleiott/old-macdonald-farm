// grab the button
const addAnimalButton = document.querySelector(`button`);
// add event listener for the "Add Animal" button when it is clicked
addAnimalButton.addEventListener(`click`, (event) => {
  // prevent the form from refreshing
  event.preventDefault();
  // grab the input
  const userInput = document.querySelector(`input`);
  // grab the information from the input
  // console.log(userInput.value);

  // grab the ul (id = recommended-animals-list)
  const recommendedAnimalsUL = document.querySelector(`#recommended-animals-list`);
  // create an li
  const newAnimalLI = document.createElement(`li`);
  // set the innerText to user input and add buttons
  newAnimalLI.innerHTML = `${userInput.value} <button>Add</button> <button>Remove</button>`;
  // append the li to the ul

  // add an event listener to the new li for when it is clicked
  newAnimalLI.addEventListener(`click`, (event) => {
    if(event.target.tagName === `BUTTON`) {
      if(event.target.innerText === `Add`) {
        // grab the animals ul (id = permanent-animals-list)
        const permanentAnimalsUL = document.querySelector(`#permanent-animals-list`);
        // add the newAnimalLI to the ul
        permanentAnimalsUL.append(newAnimalLI);
        // change the innerHTML of hte newAnimalLI to just the text
        newAnimalLI.innerHTML = newAnimalLI.innerText.slice(0, -11)
      } else {
        newAnimalLI.remove();
      }
    }
  });

  recommendedAnimalsUL.append(newAnimalLI);
  userInput.value = ``;
});



