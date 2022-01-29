function menu(){
    console.log('hi from menu!'); 
    const menuPage = document.createElement('div'); 

    const pastaDiv = document.createElement('div'); 
    pastaDiv.classList.add('food-item'); 
    const pastaHeader = document.createElement('h2');
    pastaHeader.classList.add('food-header');  
    pastaHeader.textContent = 'Spaghetti and Meatballs'; 
    const pastaText = document.createElement('p'); 
    pastaText.classList.add('food-text'); 
    pastaText.textContent = 'Very cooked spaghetti noodles topped with the finest Prego and meataballés';
    pastaDiv.appendChild(pastaHeader); 
    pastaDiv.appendChild(pastaText); 
    menuPage.appendChild(pastaDiv); 

    const eggDiv = document.createElement('div'); 
    eggDiv.classList.add('food-item'); 
    const eggHeader = document.createElement('h2');
    eggHeader.classList.add('food-header');  
    eggHeader.textContent = 'Eggs and Rice'; 
    const eggText = document.createElement('p'); 
    eggText.classList.add('food-text'); 
    eggText.textContent = 'Steamed rice topped with stir fried eggs and whatever is in the fridge (or nothing at all!)';
    eggDiv.appendChild(eggHeader); 
    eggDiv.appendChild(eggText); 
    menuPage.appendChild(eggDiv); 

    const mugcakeDiv = document.createElement('div'); 
    mugcakeDiv.classList.add('food-item'); 
    const mugcakeHeader = document.createElement('h2');
    mugcakeHeader.classList.add('food-header');  
    mugcakeHeader.textContent = 'Mug Cake'; 
    const mugcakeText = document.createElement('p'); 
    mugcakeText.classList.add('food-text'); 
    mugcakeText.textContent = 'Mug cake of whatever flavor you want! If it is not nutella or peanut butter though, be prepared for a suprise.';
    mugcakeDiv.appendChild(mugcakeHeader); 
    mugcakeDiv.appendChild(mugcakeText); 
    menuPage.appendChild(mugcakeDiv); 

    const appleDiv = document.createElement('div'); 
    appleDiv.classList.add('food-item'); 
    const appleHeader = document.createElement('h2');
    appleHeader.classList.add('food-header');  
    appleHeader.textContent = 'Apples and Fixins'; 
    const appleText = document.createElement('p'); 
    appleText.classList.add('food-text'); 
    appleText.textContent = 'Apple slices paired with the god\'s nutty spread and possibly other kitchen fixins (ie oatmealé, breadé, stringé cheesé).';
    appleDiv.appendChild(appleHeader); 
    appleDiv.appendChild(appleText); 
    menuPage.appendChild(appleDiv); 

    return menuPage; 
}
export default menu; 