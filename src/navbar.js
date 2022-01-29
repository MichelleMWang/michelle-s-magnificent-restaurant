function navbar() {
    const navBar = document.createElement('nav'); 
    navBar.id = 'navbar'; 

    const navItems = document.createElement('ul'); 
    navItems.id = 'nav-items'; 

    const navHomeLi = document.createElement('li');
    const navHome = document.createElement('a'); 
    navHome.textContent = 'Home'; 
    navHome.classList.add('nav-item');  
    navHomeLi.appendChild(navHome); 

    const navMenuLi = document.createElement('li');
    const navMenu = document.createElement('a'); 
    navMenu.textContent = 'Menu';
    navMenu.classList.add('nav-item'); 
    navMenuLi.appendChild(navMenu);  

    const navContactLi = document.createElement('li');
    const navContact = document.createElement('a'); 
    navContact.textContent = 'Contact'; 
    navContact.classList.add('nav-item'); 
    navContactLi.appendChild(navContact);  

    navItems.appendChild(navHome); 
    navItems.appendChild(navMenu); 
    navItems.appendChild(navContact); 
    navBar.appendChild(navItems); 

    return navBar; 
}

export default navbar; 