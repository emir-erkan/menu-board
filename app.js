// Default Application State with Pre-populated Dummy Data
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
            name: "Monitor 1 (Pizzas)",
            categories: [
                { 
                    name_ru: "Пиццы", name_kk: "Пиццалар", 
                    items: [
                        { name_ru: "Маргарита", name_kk: "Маргарита", price: "2500", image: "https://placehold.co/400x400/222/FFF?text=Pizza+1", vegan: true, beef: false, chicken: false },
                        { name_ru: "Пепперони", name_kk: "Пепперони", price: "3000", image: "https://placehold.co/400x400/222/FFF?text=Pizza+2", vegan: false, beef: true, chicken: false },
                        { name_ru: "Мясная", name_kk: "Етті", price: "3500", image: "https://placehold.co/400x400/222/FFF?text=Pizza+3", vegan: false, beef: true, chicken: false },
                        { name_ru: "Куриная", name_kk: "Тауық етімен", price: "2800", image: "https://placehold.co/400x400/222/FFF?text=Pizza+4", vegan: false, beef: false, chicken: true },
                        { name_ru: "Четыре сыра", name_kk: "Төрт ірімшік", price: "3200", image: "https://placehold.co/400x400/222/FFF?text=Pizza+5", vegan: true, beef: false, chicken: false },
                        { name_ru: "Грибная", name_kk: "Саңырауқұлақпен", price: "2700", image: "https://placehold.co/400x400/222/FFF?text=Pizza+6", vegan: true, beef: false, chicken: false },
                        { name_ru: "Барбекю", name_kk: "Барбекю", price: "3400", image: "https://placehold.co/400x400/222/FFF?text=Pizza+7", vegan: false, beef: true, chicken: false }
                    ] 
                }
            ]
        },
        {
            id: 2,
            name: "Monitor 2 (Burgers & Durums)",
            categories: [
                { 
                    name_ru: "Бургеры", name_kk: "Бургерлер", 
                    items: [
                        { name_ru: "Классический Бургер", name_kk: "Классикалық Бургер", price: "1500", image: "https://placehold.co/400x400/222/FFF?text=Burger+1", vegan: false, beef: true, chicken: false },
                        { name_ru: "Чикенбургер", name_kk: "Чикенбургер", price: "1400", image: "https://placehold.co/400x400/222/FFF?text=Burger+2", vegan: false, beef: false, chicken: true }
                    ] 
                },
                { 
                    name_ru: "Дюрюмы", name_kk: "Дүрүмдер", 
                    items: [
                        { name_ru: "Дюрюм с говядиной", name_kk: "Сиыр етінен дүрүм", price: "1800", image: "https://placehold.co/400x400/222/FFF?text=Durum+1", vegan: false, beef: true, chicken: false },
                        { name_ru: "Дюрюм с курицей", name_kk: "Тауық етінен дүрүм", price: "1600", image: "https://placehold.co/400x400/222/FFF?text=Durum+2", vegan: false, beef: false, chicken: true },
                        { name_ru: "Дюрюм Микс", name_kk: "Аралас дүрүм", price: "1900", image: "https://placehold.co/400x400/222/FFF?text=Durum+3", vegan: false, beef: true, chicken: true },
                        { name_ru: "Острый Дюрюм", name_kk: "Ащы дүрүм", price: "1700", image: "https://placehold.co/400x400/222/FFF?text=Durum+4", vegan: false, beef: true, chicken: false }
                    ] 
                }
            ]
        },
        {
            id: 3,
            name: "Monitor 3 (Pides)",
            categories: [
                { 
                    name_ru: "Пиде", name_kk: "Пиде", 
                    items: [
                        { name_ru: "Пиде с фаршем", name_kk: "Фаршпен пиде", price: "2200", image: "https://placehold.co/400x400/222/FFF?text=Pide+1", vegan: false, beef: true, chicken: false },
                        { name_ru: "Пиде с сыром", name_kk: "Ірімшікпен пиде", price: "2000", image: "https://placehold.co/400x400/222/FFF?text=Pide+2", vegan: true, beef: false, chicken: false },
                        { name_ru: "Пиде с мясом кубиками", name_kk: "Кесек етпен пиде", price: "2500", image: "https://placehold.co/400x400/222/FFF?text=Pide+3", vegan: false, beef: true, chicken: false },
                        { name_ru: "Пиде с сужуком", name_kk: "Шұжықпен пиде", price: "2400", image: "https://placehold.co/400x400/222/FFF?text=Pide+4", vegan: false, beef: true, chicken: false },
                        { name_ru: "Микс Пиде", name_kk: "Аралас пиде", price: "2600", image: "https://placehold.co/400x400/222/FFF?text=Pide+5", vegan: false, beef: true, chicken: false },
                        { name_ru: "Пиде с курицей", name_kk: "Тауық етімен пиде", price: "2100", image: "https://placehold.co/400x400/222/FFF?text=Pide+6", vegan: false, beef: false, chicken: true },
                        { name_ru: "Вегетарианское Пиде", name_kk: "Вегетариандық пиде", price: "1900", image: "https://placehold.co/400x400/222/FFF?text=Pide+7", vegan: true, beef: false, chicken: false }
                    ] 
                }
            ]
        },
        {
            id: 4,
            name: "Monitor 4 (Mangal Doners)",
            categories: [
                { 
                    name_ru: "Мангал Донеры", name_kk: "Манғал Донерлер", 
                    items: [
                        { name_ru: "Донер Мангал Классик", name_kk: "Классикалық Манғал Донер", price: "1800", image: "https://placehold.co/400x400/222/FFF?text=Doner+1", vegan: false, beef: true, chicken: false },
                        { name_ru: "Донер Мангал Куриный", name_kk: "Тауық Манғал Донер", price: "1600", image: "https://placehold.co/400x400/222/FFF?text=Doner+2", vegan: false, beef: false, chicken: true },
                        { name_ru: "Донер с сыром", name_kk: "Ірімшікпен донер", price: "1900", image: "https://placehold.co/400x400/222/FFF?text=Doner+3", vegan: false, beef: true, chicken: false },
                        { name_ru: "Острый Донер", name_kk: "Ащы донер", price: "1850", image: "https://placehold.co/400x400/222/FFF?text=Doner+4", vegan: false, beef: true, chicken: false },
                        { name_ru: "Мега Донер", name_kk: "Мега Донер", price: "2500", image: "https://placehold.co/400x400/222/FFF?text=Doner+5", vegan: false, beef: true, chicken: false },
                        { name_ru: "Мини Донер", name_kk: "Мини Донер", price: "1200", image: "https://placehold.co/400x400/222/FFF?text=Doner+6", vegan: false, beef: true, chicken: false },
                        { name_ru: "Донер на тарелке", name_kk: "Тәрелкедегі донер", price: "2200", image: "https://placehold.co/400x400/222/FFF?text=Doner+7", vegan: false, beef: true, chicken: false },
                        { name_ru: "Искендер Донер", name_kk: "Ескендір Донер", price: "2800", image: "https://placehold.co/400x400/222/FFF?text=Doner+8", vegan: false, beef: true, chicken: false },
                        { name_ru: "Донер с халапеньо", name_kk: "Халапеньомен донер", price: "1950", image: "https://placehold.co/400x400/222/FFF?text=Doner+9", vegan: false, beef: true, chicken: false },
                        { name_ru: "Фирменный Мангал Донер", name_kk: "Фирмалық Манғал Донер", price: "2400", image: "https://placehold.co/400x400/222/FFF?text=Doner+10", vegan: false, beef: true, chicken: true }
                    ] 
                }
            ]
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
    // Attempt to load previously saved user data from localStorage
    const saved = localStorage.getItem('fastfoodMenuData');
    if (saved) {
        // If data exists, parse it and overwrite the default dummy data structure
        appData = JSON.parse(saved);
    }
    // Note: If 'fastfoodMenuData' is NOT in localStorage, the script will naturally
    // fall back to the pre-populated appData structure defined above.

    applyGlobalSettings();
    updateMonitorDropdowns();
    renderCms();
}

// System Settings - Applies primary, secondary, and background colors, and font-family
function applyGlobalSettings() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', appData.settings.color_bg);
    root.style.setProperty('--primary-color', appData.settings.color_primary);
    root.style.setProperty('--secondary-color', appData.settings.color_secondary);
    root.style.setProperty('--font-family', appData.settings.font);
    
    // Set values in the CMS sidebar to match current state
    document.getElementById('layout-select').value = appData.settings.layout;
    document.getElementById('color-bg').value = appData.settings.color_bg;
    document.getElementById('color-primary').value = appData.settings.color_primary;
    document.getElementById('color-secondary').value = appData.settings.color_secondary;
    document.getElementById('font-select').value = appData.settings.font;
}

// Navigation & Fullscreen Handlers
btns.cms.addEventListener('click', () => switchView('cms'));
btns.display.addEventListener('click', () => switchView('display'));
btns.fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
        document.exitFullscreen();
    }
});

// Switches between the CMS Editor and the Monitor Display views
function switchView(viewName) {
    views.cms.classList.toggle('active', viewName === 'cms');
    views.display.classList.toggle('active', viewName === 'display');
    btns.cms.classList.toggle('active', viewName === 'cms');
    btns.display.classList.toggle('active', viewName === 'display');
    
    // Show/hide display-specific controls based on the active view
    containers.displayControls.style.display = viewName === 'display' ? 'flex' : 'none';
    if (viewName === 'display') renderDisplay();
}

// Multi-Monitor Dropdown Sync Logic
function updateMonitorDropdowns() {
    const cmsSelect = document.getElementById('cms-monitor-select');
    const displaySelect = document.getElementById('active-monitor-select');
    cmsSelect.innerHTML = ''; displaySelect.innerHTML = '';
    
    // Populate both dropdowns with current monitors
    appData.monitors.forEach((m, idx) => {
        const option1 = new Option(m.name, idx);
        const option2 = new Option(m.name, idx);
        if (idx === currentMonitorIndex) { option1.selected = true; option2.selected = true; }
        cmsSelect.add(option1); displaySelect.add(option2);
    });
}

// Ensure both monitor selectors stay in sync
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

// Adds a new blank monitor to the system
document.getElementById('add-monitor-btn').addEventListener('click', () => {
    const newId = appData.monitors.length + 1;
    appData.monitors.push({ id: newId, name: `Monitor ${newId}`, categories: [] });
    // Switch focus to the new monitor
    currentMonitorIndex = appData.monitors.length - 1;
    updateMonitorDropdowns(); renderCms();
});

// CMS Engine: Renders the editor interface for the current monitor's data
function renderCms() {
    containers.categories.innerHTML = '';
    const currentMonitor = appData.monitors[currentMonitorIndex];
    
    currentMonitor.categories.forEach((cat, catIndex) => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category-card';
        
        // Generate HTML for each item (dish) in the category
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

        // Generate the category container HTML with header inputs
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

// Data Handling Functions (exposed to window for onclick handlers)
window.updateCat = (cIdx, field, val) => { appData.monitors[currentMonitorIndex].categories[cIdx][field] = val; };
window.updateDish = (cIdx, iIdx, field, val) => { appData.monitors[currentMonitorIndex].categories[cIdx].items[iIdx][field] = val; };
window.addDish = (cIdx) => {
    appData.monitors[currentMonitorIndex].categories[cIdx].items.push({ name_ru: '', name_kk: '', price: '', image: '', vegan: false, beef: false, chicken: false });
    renderCms();
};
window.deleteDish = (cIdx, iIdx) => {
    // Ask for confirmation before deletion for UX
    if (confirm(`Are you sure you want to delete this dish?`)) {
        appData.monitors[currentMonitorIndex].categories[cIdx].items.splice(iIdx, 1);
        renderCms();
    }
}
document.getElementById('add-category-btn').addEventListener('click', () => {
    appData.monitors[currentMonitorIndex].categories.push({ name_ru: 'Новая категория', name_kk: 'Жаңа санат', items: [] });
    renderCms();
});

// Image Upload Handler: Reads file as Base64 string for localStorage persistence
window.handleImageUpload = (event, catIndex, itemIndex) => {
    const file = event.target.files[0];
    if (file) {
        // Basic check for file size to warn users about the ~5MB localStorage limit
        if (file.size > 1024 * 1024) { // Warning if image is over 1MB
            alert('This image is large. To avoid storage limits, please use images smaller than 1MB.');
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            // Read Base64 result and store it
            appData.monitors[currentMonitorIndex].categories[catIndex].items[itemIndex].image = e.target.result;
            // Rerender CMS to show preview of the new image
            renderCms(); 
        };
        reader.readAsDataURL(file);
    }
};

// Global Settings Handlers: Updates app state based on input changes and applies settings
['layout-select', 'color-bg', 'color-primary', 'color-secondary', 'font-select'].forEach(id => {
    document.getElementById(id).addEventListener('change', (e) => {
        // Map HTML element ID back to the corresponding key in appData.settings
        const key = id.replace('-select', '').replace('-', '_');
        appData.settings[key] = e.target.value;
        // Immediate visual feedback by applying settings
        applyGlobalSettings();
    });
});

// Saves the entire application state (monitors, categories, dishes, settings, images) to localStorage
document.getElementById('save-data-btn').addEventListener('click', () => {
    try {
        localStorage.setItem('fastfoodMenuData', JSON.stringify(appData));
        alert('Database saved successfully!');
    } catch (e) {
        // Fallback for when localStorage hits its limit (usually around 5MB)
        console.error(e);
        alert('Storage limit reached! Please use smaller images (<1MB each) or link to external URLs.');
    }
});

// Monitor Display Engine: Renders the actual digital menu board based on current settings and data
function renderDisplay() {
    containers.board.className = `menu-board ${appData.settings.layout}`;
    containers.board.innerHTML = '';
    const currentMonitor = appData.monitors[currentMonitorIndex];

    currentMonitor.categories.forEach(cat => {
        // Skip rendering categories with no items to keep display clean
        if(cat.items.length === 0) return;
        
        const catDiv = document.createElement('div');
        catDiv.className = 'display-category';
        
        // Generate the final display HTML for each dish
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

        // Generate the final category container HTML for display
        catDiv.innerHTML = `
            <h2>${cat.name_ru} / ${cat.name_kk}</h2>
            <div class="display-dishes-list">${dishesHtml}</div>
        `;
        containers.board.appendChild(catDiv);
    });
}

// Execute core boot sequence upon script load
init();