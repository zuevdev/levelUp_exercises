const endpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form');
const checkboxes = document.querySelectorAll('.checkbox');

const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query){
  const res = await fetch(`${proxy}${endpoint}?i=${getChecked(checkboxes)}&q=${query}`);
  const data = await res.json();
 return data.results;
}

async function handleSubmit(e){
  e.preventDefault();
  form.submit.disabled = true;
  const recipes = await fetchRecipes(form.query.value);
  displayRecipes(recipes);
  form.submit.disabled = false;
}

function displayRecipes(recipes){
  const html = recipes.map(recipe => {
    return `
      <div class="recipe p-2 border rounded">
        <h2 class="text-4xl font-semibold">${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title} thumbnail"/>`}
        <a class="text-blue-700 underline" href="${recipe.href}">View recipe</a>
      </div>
   `;
  })
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit)

async function getAndShowRecipes(recipes){
  const recipesData = await fetchRecipes(recipes);
  displayRecipes(recipesData);
}

getAndShowRecipes(form.query.value);

function getChecked(checkboxes){
  let checkedValues = '';
  checkboxes.forEach(ch => {
    if(ch.checked) checkedValues += (ch.id) + ',';
  })
  return checkedValues.slice(0, -1);
}



