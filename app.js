// Default Data Structure
let menuData = {
    settings: {
        layout: 'grid-layout',
        color: '#ff4500',
        font: "'Inter', sans-serif"
    },
    categories: []
};

// Elements
const btnCms = document.getElementById('btn-cms');
const btnDisplay = document.getElementById('btn-display');
const viewCms = document.getElementById('cms-view');
const viewDisplay = document.getElementById('display-view');
const categoriesContainer = document.getElementById('categories-container');
const menuBoard = document.getElementById('menu-board');

// Load Data from LocalStorage
function loadData() {
    const saved = localStorage.getItem('menuData');
    if (saved) {
        menuData = JSON.parse(saved);
    }
    applySettings();
    renderCms();
}

// Apply Global Settings
function applySettings() {
    document.documentElement.style.setProperty('--primary-color', menuData.settings.color);
    document.documentElement.style.setProperty('--font-family', menuData.settings.font);
    menuBoard.className = `menu-board ${menuData.settings.layout}`;
    
    document.getElementById('layout-select').value = menuData.settings.layout;
    document.getElementById('color-select').value = menuData.settings.color;
    document.getElementById('font-select').value = menuData.settings.font;
}

// Tab Switching
btnCms.addEventListener('click', () => {
    viewCms.classList.add('active');
    viewDisplay.classList.remove('active');
    btnCms.classList.add('active');
    btnDisplay.classList.remove('active');
});

btnDisplay.addEventListener('click', () => {
    viewDisplay.classList.add('active');
    viewCms.classList.remove('active');
    btnDisplay.classList.add('active');
    btnCms.classList.remove('active');
    renderDisplay(); // Refresh display when switching
});

// CMS Render Logic
function renderCms() {
    categoriesContainer.innerHTML = '';
    menuData.categories.forEach((cat, catIndex) => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category-card';
        
        let itemsHtml = cat.items.map((item, itemIndex) => `
            <div class="dish-row">
                <input type="text" placeholder="Name (RU)" value="${item.name_ru}" onchange="updateDish(${catIndex}, ${itemIndex}, 'name_ru', this.value)">
                <input type="text" placeholder="Name (KK)" value="${item.name_kk}" onchange="updateDish(${catIndex}, ${itemIndex}, 'name_kk', this.value)">
                <input type="text" placeholder="Price" value="${item.price}" onchange="updateDish(${catIndex}, ${itemIndex}, 'price', this.value)">
                <div>
                    <label><input type="checkbox" ${item.vegan ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'vegan', this.checked)"> 🥬</label>
                    <label><input type="checkbox" ${item.beef ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'beef', this.checked)"> 🥩</label>
                    <label><input type="checkbox" ${item.chicken ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'chicken', this.checked)"> 🍗</label>
                </div>
            </div>
        `).join('');

        catDiv.innerHTML = `
            <div class="category-header">
                <input type="text" placeholder="Category (RU)" value="${cat.name_ru}" onchange="updateCat(${catIndex}, 'name_ru', this.value)">
                <input type="text" placeholder="Category (KK)" value="${cat.name_kk}" onchange="updateCat(${catIndex}, 'name_kk', this.value)">
                <button onclick="addDish(${catIndex})" style="background:#555; color:white;">+ Dish</button>
            </div>
            <div class="dishes-container">${itemsHtml}</div>
        `;
        categoriesContainer.appendChild(catDiv);
    });
}

// Data Update Functions
window.updateCat = (index, field, value) => { menuData.categories[index][field] = value; };
window.updateDish = (catIndex, itemIndex, field, value) => { menuData.categories[catIndex].items[itemIndex][field] = value; };
window.addDish = (catIndex) => {
    menuData.categories[catIndex].items.push({ name_ru: '', name_kk: '', price: '', vegan: false, beef: false, chicken: false });
    renderCms();
};

document.getElementById('add-category-btn').addEventListener('click', () => {
    menuData.categories.push({ name_ru: 'Новая категория', name_kk: 'Жаңа санат', items: [] });
    renderCms();
});

// Settings Listeners
document.getElementById('layout-select').addEventListener('change', (e) => { menuData.settings.layout = e.target.value; applySettings(); });
document.getElementById('color-select').addEventListener('change', (e) => { menuData.settings.color = e.target.value; applySettings(); });
document.getElementById('font-select').addEventListener('change', (e) => { menuData.settings.font = e.target.value; applySettings(); });

// Save & Display
document.getElementById('save-data-btn').addEventListener('click', () => {
    localStorage.setItem('menuData', JSON.stringify(menuData));
    alert('Menu saved successfully!');
});

function renderDisplay() {
    menuBoard.innerHTML = '';
    menuData.categories.forEach(cat => {
        if(cat.items.length === 0) return; // Skip empty categories
        const catDiv = document.createElement('div');
        catDiv.className = 'display-category';
        
        let dishesHtml = cat.items.map(item => `
            <div class="display-dish">
                <div class="dish-info">
                    <span class="dish-title-ru">${item.name_ru} 
                        <span class="dish-icons">
                            ${item.vegan ? '<span class="icon-vegan">V</span>' : ''}
                            ${item.beef ? '<span class="icon-beef">B</span>' : ''}
                            ${item.chicken ? '<span class="icon-chicken">C</span>' : ''}
                        </span>
                    </span>
                    <span class="dish-title-kk">${item.name_kk}</span>
                </div>
                <div class="dish-price">${item.price} ₸</div>
            </div>
        `).join('');

        catDiv.innerHTML = `
            <h2>${cat.name_ru} / ${cat.name_kk}</h2>
            <div class="display-dishes-list">${dishesHtml}</div>
        `;
        menuBoard.appendChild(catDiv);
    });
}

// Init
loadData();