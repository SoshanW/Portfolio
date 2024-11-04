document.addEventListener('DOMContentLoaded', function() {
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
let isOpen = false;

// Toggle menu icon and sidebar
menuIcon.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event from bubbling up
    toggleSidebar();
});

// Close sidebar when clicking outside
document.addEventListener('click', function(e) {
    if (isOpen && !sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
        toggleSidebar();
    }
});

// Function to toggle sidebar
function toggleSidebar() {
    isOpen = !isOpen;
    menuIcon.classList.toggle('change');
    sidebar.style.width = isOpen ? '250px' : '0';
}

// Handle active navigation state
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-links a');
const sidebarLinks = document.querySelectorAll('.sidebar a');

function setActiveClass(links) {
    links.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveClass(navLinks);
setActiveClass(sidebarLinks);
});