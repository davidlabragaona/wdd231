//================ Dates ===================
const year = new Date(Date.now());
document.querySelector('#currentYear').textContent = year.getFullYear();
document.querySelector('#lastModified').textContent = `Last modified: ${document.lastModified}`;