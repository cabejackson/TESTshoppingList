function renderShoppingList() {
    // this function will be responsible for rendering the shopping list in the DOM
    // Q1: where should the shopping list be rendered? --> .js-shopping-list , which inserts li's inside
    //Q2: how do we display our list in this element --> using the STORE array
    //Q3: how do we translate STORE into HTML?
    /*
    pseudocode:
    //Generate a string representing an <li> with:
// <li> should have (1) the item name rendered as inner text
// <li> should have (2) the item's index in the STORE set as a data attribute on the <li>
// <li> should have the item's checked state (true or false) 
//rendered as the presence or absence of a CSS class for indicating checked items 
//(specifically, .shopping-item__checked from index.css)
    //Join together the individual item strings into one long string
    //Insert the <li> string inside the .js-shopping-list <ul> in the DOM



//a function that returns the hardcoded string of <li>s
//so whatever is returned in the function below
//will render in the renderShoppingList function
function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  return `
    <li>apples</li>
    <li>oranges</li>
    <li>milk</li>
    <li>bread</li>
  `;
}
        // render the shopping list in the DOM
    const shoppingListItemsString = generateShoppingItemsString(STORE);

        // insert that HTML into the DOM
    $('.js-shopping-list').html(shoppingListItemsString); //we know this works bc of line w/ const shoppingListItemSting prints out

//TESTS to see if function (renderShoppingList) is working
    console.log('`renderShoppingList` ran');


    
  }
  
  
  function handleNewItemSubmit() {
    // this function will be responsible for when users add a new shopping list item
    console.log('`handleNewItemSubmit` ran');
  }
  
  
  function handleItemCheckClicked() {
    // this function will be responsible for when users click the "check" button on
    // a shopping list item.
    console.log('`handleItemCheckClicked` ran');
  }
  
  
  function handleDeleteItemClicked() {
    // this function will be responsible for when users want to delete a shopping list
    // item
    console.log('`handleDeleteItemClicked` ran')
  }
  
  // this function will be our callback when the page loads. it's responsible for
  // initially rendering the shopping list, and activating our individual functions
  // that handle new item submission and user clicks on the "check" and "delete" buttons
  // for individual shopping list items.
  function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
  
  }
  
  // when the page loads, call `handleShoppingList`
  $(handleShoppingList);









i left off here, "In order to generate this string, we'll need to iterate over each item in STORE "