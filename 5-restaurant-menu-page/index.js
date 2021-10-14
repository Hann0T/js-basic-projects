const menuContainer = document.querySelector('.Menus');
const buttonFilterAll = document.querySelector('#filterAll');
const buttonFilterBreakfast = document.querySelector('#filterBreakfast');
const buttonFilterLunch = document.querySelector('#filterLunch');
const buttonFilterShakes = document.querySelector('#filterShakes');
const buttonFilterDinner = document.querySelector('#filterDinner');

const menuList = [
  { menuName: 'Buttermil Pancakes', menuPrice: 15.99, category: 'Breakfast' },
  { menuName: 'Eggs', menuPrice: 5.99, category: 'Breakfast' },
  { menuName: 'Diner Double', menuPrice: 13.99, category: 'Lunch' },
  { menuName: 'Godzilla Milkshake', menuPrice: 6.99, category: 'Shakes' },
  { menuName: 'KingKong Milkshake', menuPrice: 4.99, category: 'Shakes' },
  { menuName: 'Country Delight', menuPrice: 20.99, category: 'Dinner' },
];
let currentFilter = 'All';

const getMenu = (menuName, menuPrice) => {
  return `
		<div>
			<img src="" alt=""/>
			<div>
				<h3>${menuName} <span class="menu__price">$${menuPrice}</span></h3>
				<hr/>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ad saepe modi aperiam quidem vel asperiores aliquam esse cumque fuga?
				</p>
			</div>
		</div>
	`;
};
const filterByCategory = (category) => {
  if (currentFilter === category) return;
  let menus = menuList.filter((menu) => menu.category === category);
  currentFilter = category;
  printMenus(menus);
};

const printMenus = (menus) => {
  menuContainer.innerHTML = '';
  menus.forEach((menu) => {
    let HTMLmenu = getMenu(menu.menuName, menu.menuPrice);
    menuContainer.innerHTML += HTMLmenu;
  });
};

window.addEventListener('DOMContentLoaded', () => {
  printMenus(menuList);
});

buttonFilterBreakfast.addEventListener('click', () => {
  filterByCategory('Breakfast');
});
buttonFilterLunch.addEventListener('click', () => {
  filterByCategory('Lunch');
});
buttonFilterShakes.addEventListener('click', () => {
  filterByCategory('Shakes');
});
buttonFilterDinner.addEventListener('click', () => {
  filterByCategory('Dinner');
});
buttonFilterAll.addEventListener('click', () => {
  if (currentFilter === 'All') return;

  printMenus(menuList);
  currentFilter = 'All';
});
