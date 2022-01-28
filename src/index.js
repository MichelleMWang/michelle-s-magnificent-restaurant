import navbar from './navbar'; 
import homePage from './homePage'; 

//function initialLoad() {
    const contentDiv = document.getElementById('content'); 
    const nav = navbar(); 
    contentDiv.appendChild(nav); 
    contentDiv.appendChild(homePage()); 
//}

//export default initialLoad; 
