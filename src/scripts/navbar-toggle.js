export const navbarToggle = () => {
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarMenus = Array.prototype.slice.call(document.querySelectorAll('.navbar-menu'), 0);
    
        // Check if there are any navbar burgers
        if ($navbarMenus.length > 0) {
    
            // Add a click event on each of them
            $navbarMenus.forEach( el => {
                el.addEventListener('click', () => {
    
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
    
                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
    
                });
            });
        }
    });
}
