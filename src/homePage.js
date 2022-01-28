function homePage() {
    const content = document.createElement('div'); 
    content.id = 'home-header';

    const heroText = document.createElement('h1')
    heroText.textContent = 'Michelle\'s Magnificent Restaurant'; 
    heroText.id = 'hero-text'; 
    content.appendChild(heroText);

    const ctaText = document.createElement('h3')
    ctaText.textContent = 'Your Very Own Professional Chef, On Duty 24/7'; 
    ctaText.id = 'cta-text'; 
    content.appendChild(ctaText);  

    /*const headerPicture = document.createElement('img')
    headerPicture.src = '/src/header-image.jpg'; 
    headerPicture.id = 'header-picture'; 
    content.appendChild(headerPicture); */ 
    content.style.backgroundImage = 'url(/src/header-image.jpg)'; 

    return content; 
}

export default homePage; 