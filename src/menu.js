function menu(){
    console.log('hi from menu!'); 
    const menuPage = document.createElement('div'); 

    const pastaDiv = document.createElement('div'); 
    pastaDiv.classList.add('food-item'); 
    const pastaImage = document.createElement('img'); 
    pastaImage.src = './assets/pasta.jpg'; 
    pastaImage.classList.add('food-image'); 
    const pastaTextBlock = document.createElement('div'); 
    const pastaHeader = document.createElement('h2');
    pastaHeader.classList.add('food-header');  
    pastaHeader.textContent = 'Spaghetti and Meatballs'; 
    const pastaText = document.createElement('p'); 
    pastaText.classList.add('food-text'); 
    pastaText.textContent = 'Very cooked spaghetti noodles topped with the finest Prego, meataballés, and fresh mozzarella';
    pastaDiv.appendChild(pastaImage); 
    pastaTextBlock.appendChild(pastaHeader); 
    pastaTextBlock.appendChild(pastaText); 
    pastaDiv.appendChild(pastaTextBlock); 
    menuPage.appendChild(pastaDiv); 

    const eggDiv = document.createElement('div'); 
    eggDiv.classList.add('food-item'); 
    const eggImage = document.createElement('img'); 
    eggImage.src = './assets/egg.jpg'; 
    eggImage.classList.add('food-image'); 
    const eggTextBlock = document.createElement('div'); 
    const eggHeader = document.createElement('h2');
    eggHeader.classList.add('food-header');  
    eggHeader.textContent = 'Eggs and Rice'; 
    const eggText = document.createElement('p'); 
    eggText.classList.add('food-text'); 
    eggText.textContent = 'Steamed rice topped with stir fried eggs and whatever is in the fridge (or nothing at all!)';
    eggDiv.appendChild(eggImage); 
    eggTextBlock.appendChild(eggHeader); 
    eggTextBlock.appendChild(eggText); 
    eggDiv.appendChild(eggTextBlock);
    menuPage.appendChild(eggDiv); 

    const mugcakeDiv = document.createElement('div'); 
    mugcakeDiv.classList.add('food-item'); 
    const mugcakeImage = document.createElement('img'); 
    mugcakeImage.src = './assets/mugcake.jpg';
    mugcakeImage.classList.add('food-image');  
    const mugcakeTextBlock = document.createElement('div'); 
    const mugcakeHeader = document.createElement('h2');
    mugcakeHeader.classList.add('food-header');  
    mugcakeHeader.textContent = 'Mug Cake'; 
    const mugcakeText = document.createElement('p'); 
    mugcakeText.classList.add('food-text'); 
    mugcakeText.textContent = 'Mug cake of whatever flavor you want! If it is not nutella or peanut butter though, be prepared for a suprise.';
    mugcakeDiv.appendChild(mugcakeImage); 
    mugcakeTextBlock.appendChild(mugcakeHeader); 
    mugcakeTextBlock.appendChild(mugcakeText);
    mugcakeDiv.appendChild(mugcakeTextBlock);  
    menuPage.appendChild(mugcakeDiv); 

    const appleDiv = document.createElement('div'); 
    appleDiv.classList.add('food-item'); 
    const appleImage = document.createElement('img'); 
    appleImage.src = './assets/apples.jpg'; 
    appleImage.classList.add('food-image'); 
    const appleTextBlock = document.createElement('div'); 
    const appleHeader = document.createElement('h2');
    appleHeader.classList.add('food-header');  
    appleHeader.textContent = 'Apples and Fixins'; 
    const appleText = document.createElement('p'); 
    appleText.classList.add('food-text'); 
    appleText.textContent = 'Apple slices paired with the god\'s nutty spread and possibly other kitchen fixins (ie oatmealé, breadé, stringé cheesé).';
    appleDiv.appendChild(appleImage); 
    appleTextBlock.appendChild(appleHeader); 
    appleTextBlock.appendChild(appleText); 
    appleDiv.appendChild(appleTextBlock); 
    menuPage.appendChild(appleDiv); 

    return menuPage; 
}
export default menu; 