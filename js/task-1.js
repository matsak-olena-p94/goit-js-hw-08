const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {

    const categoryTitle = item.querySelector('h2').textContent;

    const subcategories = item.querySelectorAll('ul li');

    console.log(`${categoryTitle} - ${subcategories.length} subcategories`);
});