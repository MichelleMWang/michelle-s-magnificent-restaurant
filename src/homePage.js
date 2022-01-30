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
    content.appendChild(homeText); 

    content.style.backgroundImage = 'url(./assets/header-image.jpg)'; 

    return content; 
}

export default homePage; 