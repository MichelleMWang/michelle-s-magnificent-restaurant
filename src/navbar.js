function navbar() {
    const navBar = document.createElement('nav'); 
    navBar.id = 'navbar'; 

    const navItems = document.createElement('ul'); 
    navItems.id = 'nav-items'; 

    const navHome = document.createElement('li');
    navHome.textContent = 'Home'; 
    navHome.classList.add('nav-item');  

    const navMenu = document.createElement('li');
    navMenu.textContent = 'Menu';
    navMenu.classList.add('nav-item');   

    const navContact = document.createElement('li');
    navContact.textContent = 'Contact'; 
    navContact.classList.add('nav-item');  

    navItems.appendChild(navHome); 
    navItems.appendChild(navMenu); 
    navItems.appendChild(navContact); 
    navBar.appendChild(navItems); 

    return navBar; 
}

export default navbar; 