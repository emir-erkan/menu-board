// Default Application State
let appData = {
    settings: {
        layout: 'layout-grid-top',
        color_bg: '#0f0f11',
        color_primary: '#ffffff',
        color_secondary: '#ff4500',
        font: "'Inter', sans-serif"
    },
    monitors: [
        {
            id: 1,
            name: "Monitor 1 (TAKSIM Main)",
            categories: [{ 
                name_ru: "Бургеры", name_kk: "Бургерлер", 
                items: [{ name_ru: "Чизбургер", name_kk: "Чизбургер", price: "1500", image: "https://placehold.co/400x400/222/FFF?text=Burger", vegan: false, beef: true, chicken: false }] 
            }]
        },
        {
            id: 2,
            name: "Monitor 2 (FRIDAY Drinks)",
            categories: []
        }
    ]
};

let currentMonitorIndex = 0;

// DOM Elements
const views = { cms: document.getElementById('cms-view'), display: document.getElementById('display-view') };
const btns = { cms: document.getElementById('btn-cms'), display: document.getElementById('btn-display'), fullscreen: document.getElementById('btn-fullscreen') };
const containers = { categories: document.getElementById('categories-container'), board: document.getElementById('menu-board'), displayControls: document.getElementById('display-controls') };

// Boot Sequence
function init() {
    const saved = localStorage.getItem('fastfoodMenuData');
    if (saved) appData = JSON.parse(saved);
    applyGlobalSettings();
    updateMonitorDropdowns();
    renderCms();
}

// System Settings
function applyGlobalSettings() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', appData.settings.color_bg);
    root.style.setProperty('--primary-color', appData.settings.color_primary);
    root.style.setProperty('--secondary-color', appData.settings.color_secondary);
    root.style.setProperty('--font-family', appData.settings.font);
    
    document.getElementById('layout-select').value = appData.settings.layout;
    document.getElementById('color-bg').value = appData.settings.color_bg;
    document.getElementById('color-primary').value = appData.settings.color_primary;
    document.getElementById('color-secondary').value = appData.settings.color_secondary;
    document.getElementById('font-select').value = appData.settings.font;
}

// Navigation & Fullscreen
btns.cms.addEventListener('click', () => switchView('cms'));
btns.display.addEventListener('click', () => switchView('display'));
btns.fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
        document.exitFullscreen();
    }
});

function switchView(viewName) {
    views.cms.classList.toggle('active', viewName === 'cms');
    views.display.classList.toggle('active', viewName === 'display');
    btns.cms.classList.toggle('active', viewName === 'cms');
    btns.display.classList.toggle('active', viewName === 'display');
    containers.displayControls.style.display = viewName === 'display' ? 'flex' : 'none';
    if (viewName === 'display') renderDisplay();
}

// Multi-Monitor Logic
function updateMonitorDropdowns() {
    const cmsSelect = document.getElementById('cms-monitor-select');
    const displaySelect = document.getElementById('active-monitor-select');
    cmsSelect.innerHTML = ''; displaySelect.innerHTML = '';
    
    appData.monitors.forEach((m, idx) => {
        const option1 = new Option(m.name, idx);
        const option2 = new Option(m.name, idx);
        if (idx === currentMonitorIndex) { option1.selected = true; option2.selected = true; }
        cmsSelect.add(option1); displaySelect.add(option2);
    });
}

document.getElementById('cms-monitor-select').addEventListener('change', (e) => {
    currentMonitorIndex = parseInt(e.target.value);
    document.getElementById('active-monitor-select').value = currentMonitorIndex;
    renderCms();
});
document.getElementById('active-monitor-select').addEventListener('change', (e) => {
    currentMonitorIndex = parseInt(e.target.value);
    document.getElementById('cms-monitor-select').value = currentMonitorIndex;
    renderDisplay();
});
document.getElementById('add-monitor-btn').addEventListener('click', () => {
    const newId = appData.monitors.length + 1;
    appData.monitors.push({ id: newId, name: `Monitor ${newId}`, categories: [] });
    currentMonitorIndex = appData.monitors.length - 1;
    updateMonitorDropdowns(); renderCms();
});

// CMS Engine
function renderCms() {
    containers.categories.innerHTML = '';
    const currentMonitor = appData.monitors[currentMonitorIndex];
    
    currentMonitor.categories.forEach((cat, catIndex) => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category-card';
        
        let itemsHtml = cat.items.map((item, itemIndex) => `
            <div class="dish-row">
                <img src="${item.image || 'https://placehold.co/100x100?text=No+Img'}" class="cms-dish-preview">
                <input type="file" accept="image/*" onchange="handleImageUpload(event, ${catIndex}, ${itemIndex})">
                <div>
                    <input type="text" placeholder="RU Name" value="${item.name_ru}" onchange="updateDish(${catIndex}, ${itemIndex}, 'name_ru', this.value)">
                    <input type="text" placeholder="KK Name" value="${item.name_kk}" onchange="updateDish(${catIndex}, ${itemIndex}, 'name_kk', this.value)">
                </div>
                <input type="text" placeholder="Price" value="${item.price}" onchange="updateDish(${catIndex}, ${itemIndex}, 'price', this.value)">
                <div>
                    <label><input type="checkbox" ${item.vegan ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'vegan', this.checked)"> 🥬</label>
                    <label><input type="checkbox" ${item.beef ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'beef', this.checked)"> 🥩</label>
                    <label><input type="checkbox" ${item.chicken ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'chicken', this.checked)"> 🍗</label>
                </div>
                <button onclick="deleteDish(${catIndex}, ${itemIndex})" style="background:#dc3545;color:white;padding:5px;border-radius:3px;">X</button>
            </div>
        `).join('');

        catDiv.innerHTML = `
            <div class="category-header">
                <input type="text" placeholder="Category (RU)" value="${cat.name_ru}" onchange="updateCat(${catIndex}, 'name_ru', this.value)">
                <input type="text" placeholder="Category (KK)" value="${cat.name_kk}" onchange="updateCat(${catIndex}, 'name_kk', this.value)">
                <button onclick="addDish(${catIndex})" class="secondary-btn" style="width:auto; margin:0;">+ Dish</button>
            </div>
            <div class="dishes-container">${itemsHtml}</div>
        `;
        containers.categories.appendChild(catDiv);
    });
}

// Data Handlers
window.updateCat = (cIdx, field, val) => { appData.monitors[currentMonitorIndex].categories[cIdx][field] = val; };
window.updateDish = (cIdx, iIdx, field, val) => { appData.monitors[currentMonitorIndex].categories[cIdx].items[iIdx][field] = val; };
window.addDish = (cIdx) => {
    appData.monitors[currentMonitorIndex].categories[cIdx].items.push({ name_ru: '', name_kk: '', price: '', image: '', vegan: false, beef: false, chicken: false });
    renderCms();
};
window.deleteDish = (cIdx, iIdx) => {
    appData.monitors[currentMonitorIndex].categories[cIdx].items.splice(iIdx, 1);
    renderCms();
}
document.getElementById('add-category-btn').addEventListener('click', () => {
    appData.monitors[currentMonitorIndex].categories.push({ name_ru: 'Новая категория', name_kk: 'Жаңа санат', items: [] });
    renderCms();
});

// Image Upload (Base64 encoding for local storage)
window.handleImageUpload = (event, catIndex, itemIndex) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            appData.monitors[currentMonitorIndex].categories[catIndex].items[itemIndex].image = e.target.result;
            renderCms(); // Refresh UI to show new image
        };
        reader.readAsDataURL(file);
    }
};

// Global Settings Handlers
['layout-select', 'color-bg', 'color-primary', 'color-secondary', 'font-select'].forEach(id => {
    document.getElementById(id).addEventListener('change', (e) => {
        const key = id.replace('-select', '').replace('-', '_');
        appData.settings[key] = e.target.value;
        applyGlobalSettings();
    });
});

document.getElementById('save-data-btn').addEventListener('click', () => {
    try {
        localStorage.setItem('fastfoodMenuData', JSON.stringify(appData));
        alert('Database saved successfully!');
    } catch (e) {
        alert('Storage limit reached! Please use smaller images or link to external URLs.');
    }
});

// Monitor Display Engine
function renderDisplay() {
    containers.board.className = `menu-board ${appData.settings.layout}`;
    containers.board.innerHTML = '';
    const currentMonitor = appData.monitors[currentMonitorIndex];

    currentMonitor.categories.forEach(cat => {
        if(cat.items.length === 0) return;
        const catDiv = document.createElement('div');
        catDiv.className = 'display-category';
        
        let dishesHtml = cat.items.map(item => `
            <div class="display-dish">
                <div class="dish-image-container">
                    <img src="${item.image || 'https://placehold.co/600x600/222/FFF?text=No+Image'}" alt="${item.name_ru}">
                </div>
                <div class="dish-info">
                    <div class="dish-header">
                        <span class="dish-title-ru">${item.name_ru}</span>
                        <span class="dish-price">${item.price} ₸</span>
                    </div>
                    <span class="dish-title-kk">${item.name_kk}</span>
                    <div class="dish-icons">
                        ${item.vegan ? '<span class="icon-vegan">VEGAN</span>' : ''}
                        ${item.beef ? '<span class="icon-beef">BEEF</span>' : ''}
                        ${item.chicken ? '<span class="icon-chicken">CHICKEN</span>' : ''}
                    </div>
                </div>
            </div>
        `).join('');

        catDiv.innerHTML = `
            <h2>${cat.name_ru} / ${cat.name_kk}</h2>
            <div class="display-dishes-list">${dishesHtml}</div>
        `;
        containers.board.appendChild(catDiv);
    });
}

// Execute
init();