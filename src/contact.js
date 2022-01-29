function contact(){
    console.log('hi from contact!'); 
    const contactPage = document.createElement('div'); 

    const phoneNumber = document.createElement('div'); 
    //TODO: add phone icon 
    phoneNumber.textContent = '(030)-030-8008'; 
    contactPage.appendChild(phoneNumber); 

    const address = document.createElement('div'); 
    address.textContent = '030 Owokawai Ave UWUTAKE, LV 033330';
    //TODO: add google map 
    contactPage.appendChild(address); 

    return contactPage; 
}
export default contact; 