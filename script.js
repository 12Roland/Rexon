// Wait for window load
window.addEventListener('load', function() {
    // Set minimum display time to 5 seconds (5000 milliseconds)
    const minimumDisplayTime = 2560;
    const startTime = Date.now();
    
    function hidePreloader() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);
        
        setTimeout(function() {
            // Add 'loaded' class to body
            document.body.classList.add('loaded');
            
            // Remove preloader from DOM after fade out
            setTimeout(function() {
                const preloader = document.getElementById('preloader');
                if (preloader) {
                    preloader.remove();
                }
            }, 500); // Match this with the CSS transition time
        }, remainingTime);
    }
    
    // Start the process
    hidePreloader();
});


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHOW DROPDOWN ===============*/
const showDropdown = (dropdownId) =>{
   const dropdown = document.getElementById(dropdownId)

   dropdown.addEventListener('click', ()=>{
      /* Show dropdown */
      dropdown.classList.toggle('show-dropdown')
   })
}
showDropdown('dropdown')

