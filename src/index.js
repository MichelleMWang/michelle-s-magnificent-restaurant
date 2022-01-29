import navbar from './navbar'; 
import homePage from './homePage'; 
import menu from './menu'; 
import contact from './contact'; 

//function initialLoad() {
    const contentDiv = document.getElementById('content'); 

    const nav = navbar(); 
    const tabs = nav.querySelectorAll('.nav-item'); 
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            contentDiv.removeChild(contentDiv.childNodes[2]); 
            const tabName = tab.textContent; 
            console.log(tabName); 
            if (tabName == 'Menu'){
                contentDiv.appendChild(menu()); 
            } else if (tabName == 'Contact'){
                contentDiv.appendChild(contact()); 
            } else contentDiv.appendChild(homePage()); 
        }); 
    }); 
    contentDiv.appendChild(nav); 

    contentDiv.appendChild(homePage()); 
//}

//export default initialLoad; 
