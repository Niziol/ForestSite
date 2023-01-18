const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav__items').parentElement;
const navItems = nav.querySelectorAll('.nav__item');

const showNavigation = () => {
	nav.classList.toggle('nav-mobile--active');
};

const closeNavigation = () => {
	nav.classList.remove('nav-mobile--active');
};

function checkPosition() {
	if (window.matchMedia('(min-width: 992px)').matches) {
		nav.classList.add('nav-desktop');
		nav.classList.remove('nav-mobile');
	} else {
		nav.classList.add('nav-mobile');
		nav.classList.remove('nav-desktop');
	}
}

checkPosition();

burgerBtn.addEventListener('click', showNavigation);
navItems.forEach((navItem) => {
	navItem.addEventListener('click', closeNavigation);
});
window.addEventListener('resize', checkPosition);
