const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const toggleIcon = toggle.querySelector('i');

toggle.onclick = function(event) {
    menu.classList.toggle('active');

    // Update aria-expanded attribute (if you're keeping accessibility features)
    const isExpanded = menu.classList.contains('active');
    // menu.setAttribute('aria-expanded', isExpanded); // Uncomment if using ARIA

    // Change toggle icon
    if (isExpanded) {
        toggleIcon.classList.remove('fa-share-alt');
        toggleIcon.classList.add('fa-times');
    } else {
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-share-alt');
    }
    event.stopPropagation();
}

// Close menu when clicking outside (if you're keeping this feature)
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
        // menu.setAttribute('aria-expanded', false); // Uncomment if using ARIA
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-share-alt');
    }
});

// Close menu with Escape key (if you're keeping this feature)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
        // menu.setAttribute('aria-expanded', false); // Uncomment if using ARIA
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-share-alt');
    }
});