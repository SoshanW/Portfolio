const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
let isOpen = false;

menuIcon,addEventListener('click', () => {
  if(!isOpen){
    sidebar.style.width = '250px';
    menuIcon.classList.add('change');
  }else{
    sidebar.style.width = '0';
    menuIcon.classList.remove('change');
  }
  isOpen = !isOpen;
});