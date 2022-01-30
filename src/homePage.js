function homePage() {
    const content = document.createElement('div'); 
    content.id = 'home-header';

    /*const heroText = document.createElement('h1')
    heroText.textContent = 'Michelle\'s Magnificent Restaurant'; 
    heroText.id = 'hero-text'; 
    content.appendChild(heroText); */ 

    const homeText = document.createElement('div'); 
    homeText.id = 'home-text'; 
    
    const heroText = document.createElement('h1')
    heroText.textContent = 'Your Very Own Professional Chef'; 
    heroText.id = 'hero-text'; 
    homeText.appendChild(heroText);  

    const ctaText = document.createElement('h3')
    ctaText.textContent = 'On Duty 24/7'; 
    ctaText.id = 'cta-text'; 
    homeText.appendChild(ctaText); 

    /*const homeButtons = document.createElement('div'); 
    const menuButton = document.createElement('button'); 
    menuButton.textContent = 'Menu'; 
    menuButton.classList.add('cta-button'); 

    homeButtons.appendChild(menuButton); 

    const contactButton = document.createElement('button'); 
    contactButton.textContent = 'Contact'; 
    contactButton.classList.add('cta-button'); 
    homeButtons.appendChild(contactButton); */ 

    //homeText.appendChild(homeButtons); 
    content.appendChild(homeText); 
    /*const headerPicture = document.createElement('img')
    headerPicture.src = '/src/header-image.jpg'; 
    headerPicture.id = 'header-picture'; 
    content.appendChild(headerPicture); */ 
    content.style.backgroundImage = 'url(/src/assets/header-image.jpg)'; 

    return content; 
}

export default homePage; 