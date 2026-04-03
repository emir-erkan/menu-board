// Pre-populated Application State with 4-Monitor Dummy Data
let appData = {
    settings: {
        color_bg: '#0f0f11', color_primary: '#ffffff', color_secondary: '#ff4500', font: "'Inter', sans-serif",
        color_ru_title: '#ffffff', color_kz_title: '#ff4500', color_price: '#00ff00',
        color_dish_bg: '#1a1a1d', color_group_bg: '#111111', color_title_bg: '#dc3545'
    },
    monitors: [
        {
            id: 1, name: "Monitor 1 (Pizzas)", layout: 'layout-1-sidebar-grid',
            categories: [
                { name_ru: "Пиццы", name_kk: "Пиццалар", items: [
                    { name_ru: "Маргарита", name_kk: "Маргарита", price: "2500", image: "pizza.png", vegan: true, beef: false, chicken: false, isNew: true },
                    { name_ru: "Пепперони", name_kk: "Пепперони", price: "3000", image: "pizza2.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Мясная", name_kk: "Етті", price: "3500", image: "pizza.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Куриная", name_kk: "Тауық етімен", price: "2800", image: "pizza2.png", vegan: false, beef: false, chicken: true, isNew: false },
                    { name_ru: "Четыре сыра", name_kk: "Төрт ірімшік", price: "3200", image: "pizza.png", vegan: true, beef: false, chicken: false, isNew: false },
                    { name_ru: "Грибная", name_kk: "Саңырауқұлақпен", price: "2700", image: "pizza2.png", vegan: true, beef: false, chicken: false, isNew: true },
                    { name_ru: "Кола Комбо", name_kk: "Кола Комбо", price: "3400", image: "drink.png", vegan: false, beef: true, chicken: false, isNew: false }
                ]}
            ]
        },
        {
            id: 2, name: "Monitor 2 (Burgers & Durums)", layout: 'layout-4-masonry-hybrid',
            categories: [
                { name_ru: "Бургеры", name_kk: "Бургерлер", items: [
                    { name_ru: "Классический Бургер", name_kk: "Классикалық Бургер", price: "1500", image: "burger.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Дабл Чизбургер", name_kk: "Екі есе Чизбургер", price: "1800", image: "burger2.png", vegan: false, beef: true, chicken: false, isNew: true },
                    { name_ru: "Чикенбургер Комбо", name_kk: "Чикенбургер Комбо", price: "1400", image: "drink.png", vegan: false, beef: false, chicken: true, isNew: false }
                ]},
                { name_ru: "Дюрюмы", name_kk: "Дүрүмдер", items: [
                    { name_ru: "Дюрюм с говядиной", name_kk: "Сиыр етінен дүрүм", price: "1800", image: "durum.png", vegan: false, beef: true, chicken: false, isNew: true },
                    { name_ru: "Дюрюм с курицей", name_kk: "Тауық етінен дүрүм", price: "1600", image: "durum.png", vegan: false, beef: false, chicken: true, isNew: false },
                    { name_ru: "Дюрюм Микс", name_kk: "Аралас дүрүм", price: "1900", image: "durum.png", vegan: false, beef: true, chicken: true, isNew: false },
                    { name_ru: "Острый Дюрюм", name_kk: "Ащы дүрүм", price: "1700", image: "durum.png", vegan: false, beef: true, chicken: false, isNew: false }
                ]}
            ]
        },
        {
            id: 3, name: "Monitor 3 (Pides)", layout: 'layout-2-red-panels',
            categories: [
                { name_ru: "Пиде", name_kk: "Пиде", items: [
                    { name_ru: "Пиде с фаршем", name_kk: "Фаршпен пиде", price: "2200", image: "pide.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Пиде с сыром", name_kk: "Ірімшікпен пиде", price: "2000", image: "pide.png", vegan: true, beef: false, chicken: false, isNew: false },
                    { name_ru: "Пиде с мясом кубиками", name_kk: "Кесек етпен пиде", price: "2500", image: "pide.png", vegan: false, beef: true, chicken: false, isNew: true },
                    { name_ru: "Пиде с сужуком", name_kk: "Шұжықпен пиде", price: "2400", image: "pide.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Микс Пиде", name_kk: "Аралас пиде", price: "2600", image: "pide.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Пиде с курицей", name_kk: "Тауық етімен пиде", price: "2100", image: "pide.png", vegan: false, beef: false, chicken: true, isNew: false },
                    { name_ru: "Вегетарианское Пиде", name_kk: "Вегетариандық пиде", price: "1900", image: "pide.png", vegan: true, beef: false, chicken: false, isNew: false }
                ]}
            ]
        },
        {
            id: 4, name: "Monitor 4 (Mangal Doners)", layout: 'layout-3-minimalist',
            categories: [
                { name_ru: "Мангал Донеры", name_kk: "Манғал Донерлер", items: [
                    { name_ru: "Донер Мангал Классик", name_kk: "Классикалық Манғал Донер", price: "1800", image: "doner.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Донер Мангал Куриный", name_kk: "Тауық Манғал Донер", price: "1600", image: "doner.png", vegan: false, beef: false, chicken: true, isNew: false },
                    { name_ru: "Донер с сыром", name_kk: "Ірімшікпен донер", price: "1900", image: "doner.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Острый Донер", name_kk: "Ащы донер", price: "1850", image: "durum.png", vegan: false, beef: true, chicken: false, isNew: true },
                    { name_ru: "Мега Донер", name_kk: "Мега Донер", price: "2500", image: "doner.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Мини Донер", name_kk: "Мини Донер", price: "1200", image: "durum.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Донер на тарелке", name_kk: "Тәрелкедегі донер", price: "2200", image: "doner.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Искендер Комбо", name_kk: "Ескендір Комбо", price: "2800", image: "drink.png", vegan: false, beef: true, chicken: false, isNew: false },
                    { name_ru: "Донер с халапеньо", name_kk: "Халапеньомен донер", price: "1950", image: "doner.png", vegan: false, beef: true, chicken: false, isNew: false }
                ]}
            ]
        }
    ]
};

let currentMonitorIndex = 0;
const views = { cms: document.getElementById('cms-view'), display: document.getElementById('display-view') };
const btns = { cms: document.getElementById('btn-cms'), display: document.getElementById('btn-display'), fullscreen: document.getElementById('btn-fullscreen') };
const containers = { categories: document.getElementById('categories-container'), board: document.getElementById('menu-board'), displayControls: document.getElementById('display-controls') };

function init() {
    const saved = localStorage.getItem('fastfoodMenuData');
    if (saved) appData = JSON.parse(saved);
    applyGlobalSettings(); updateMonitorDropdowns(); renderCms();
}

function applyGlobalSettings() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', appData.settings.color_bg);
    root.style.setProperty('--primary-color', appData.settings.color_primary);
    root.style.setProperty('--secondary-color', appData.settings.color_secondary);
    root.style.setProperty('--font-family', appData.settings.font);
    
    root.style.setProperty('--color-ru-title', appData.settings.color_ru_title || '#ffffff');
    root.style.setProperty('--color-kz-title', appData.settings.color_kz_title || '#ff4500');
    root.style.setProperty('--color-price', appData.settings.color_price || '#00ff00');
    root.style.setProperty('--color-dish-bg', appData.settings.color_dish_bg || '#1a1a1d');
    root.style.setProperty('--color-group-bg', appData.settings.color_group_bg || '#111111');
    root.style.setProperty('--color-title-bg', appData.settings.color_title_bg || '#dc3545');

    ['color-bg', 'color-primary', 'color-secondary', 'font-select', 'color-ru-title', 'color-kz-title', 'color-price', 'color-dish-bg', 'color-group-bg', 'color-title-bg'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'font-select') el.value = appData.settings.font;
            else {
                const key = id.replace(/-/g, '_');
                el.value = appData.settings[key] || '#ffffff';
            }
        }
    });
}

btns.cms.addEventListener('click', () => switchView('cms'));
btns.display.addEventListener('click', () => switchView('display'));
btns.fullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(err => console.error(err));
    else document.exitFullscreen();
});

function switchView(viewName) {
    views.cms.classList.toggle('active', viewName === 'cms');
    views.display.classList.toggle('active', viewName === 'display');
    btns.cms.classList.toggle('active', viewName === 'cms');
    btns.display.classList.toggle('active', viewName === 'display');
    containers.displayControls.style.display = viewName === 'display' ? 'flex' : 'none';
    if (viewName === 'display') renderDisplay();
}

function updateMonitorDropdowns() {
    const cmsSelect = document.getElementById('cms-monitor-select');
    const displaySelect = document.getElementById('active-monitor-select');
    cmsSelect.innerHTML = ''; displaySelect.innerHTML = '';
    appData.monitors.forEach((m, idx) => {
        const option1 = new Option(m.name, idx); const option2 = new Option(m.name, idx);
        if (idx === currentMonitorIndex) { option1.selected = true; option2.selected = true; }
        cmsSelect.add(option1); displaySelect.add(option2);
    });
    if(appData.monitors.length > 0) {
        const layoutSelect = document.getElementById('layout-select');
        if(layoutSelect) layoutSelect.value = appData.monitors[currentMonitorIndex].layout || 'layout-standard';
    }
}

document.getElementById('cms-monitor-select').addEventListener('change', (e) => { currentMonitorIndex = parseInt(e.target.value); document.getElementById('active-monitor-select').value = currentMonitorIndex; updateMonitorDropdowns(); renderCms(); });
document.getElementById('active-monitor-select').addEventListener('change', (e) => { currentMonitorIndex = parseInt(e.target.value); document.getElementById('cms-monitor-select').value = currentMonitorIndex; updateMonitorDropdowns(); renderDisplay(); });
['color-bg', 'color-primary', 'color-secondary', 'font-select', 'color-ru-title', 'color-kz-title', 'color-price', 'color-dish-bg', 'color-group-bg', 'color-title-bg'].forEach(id => { document.getElementById(id).addEventListener('change', (e) => { const key = id === 'font-select' ? 'font' : id.replace(/-/g, '_'); appData.settings[key] = e.target.value; applyGlobalSettings(); }); });
document.getElementById('layout-select').addEventListener('change', (e) => { appData.monitors[currentMonitorIndex].layout = e.target.value; renderDisplay(); });

function renderCms() {
    containers.categories.innerHTML = '';
    const currentMonitor = appData.monitors[currentMonitorIndex];
    if(!currentMonitor) return;
    currentMonitor.categories.forEach((cat, catIndex) => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category-card';
        let itemsHtml = cat.items.map((item, itemIndex) => `
            <div class="dish-row">
                <img src="${item.image || 'pizza.png'}" class="cms-dish-preview">
                <input type="file" accept="image/*" onchange="handleImageUpload(event, ${catIndex}, ${itemIndex})">
                <div>
                    <input type="text" placeholder="RU Name" value="${item.name_ru}" onchange="updateDish(${catIndex}, ${itemIndex}, 'name_ru', this.value)">
                    <input type="text" placeholder="KK Name" value="${item.name_kk}" onchange="updateDish(${catIndex}, ${itemIndex}, 'name_kk', this.value)">
                </div>
                <input type="text" placeholder="Price" value="${item.price}" onchange="updateDish(${catIndex}, ${itemIndex}, 'price', this.value)">
                <div style="font-size:0.8rem; line-height:1.2;">
                    <label style="color:#aaa; display:block;"><input type="checkbox" ${item.isNew ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'isNew', this.checked)"> ⭐ NEW</label>
                    <label><input type="checkbox" ${item.vegan ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'vegan', this.checked)"> 🥬 Vegan</label>
                    <label><input type="checkbox" ${item.beef ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'beef', this.checked)"> 🥩 Beef</label>
                    <label><input type="checkbox" ${item.chicken ? 'checked' : ''} onchange="updateDish(${catIndex}, ${itemIndex}, 'chicken', this.checked)"> 🍗 Chick</label>
                </div>
                <button onclick="deleteDish(${catIndex}, ${itemIndex})" class="danger-btn">X</button>
            </div>
        `).join('');
        catDiv.innerHTML = `<div class="category-header"><input type="text" placeholder="Category (RU)" value="${cat.name_ru}" onchange="updateCat(${catIndex}, 'name_ru', this.value)"><input type="text" placeholder="Category (KK)" value="${cat.name_kk}" onchange="updateCat(${catIndex}, 'name_kk', this.value)"><button onclick="addDish(${catIndex})" class="secondary-btn" style="width:auto; margin:0;">+ Dish</button><button onclick="deleteCategory(${catIndex})" class="danger-btn" style="width:auto; margin:0;">Delete Grp</button></div><div class="dishes-container">${itemsHtml}</div>`;
        containers.categories.appendChild(catDiv);
    });
}

window.updateCat = (cIdx, field, val) => { appData.monitors[currentMonitorIndex].categories[cIdx][field] = val; };
window.updateDish = (cIdx, iIdx, field, val) => { appData.monitors[currentMonitorIndex].categories[cIdx].items[iIdx][field] = val; };
window.addDish = (cIdx) => { appData.monitors[currentMonitorIndex].categories[cIdx].items.push({ name_ru: 'Новое блюдо', name_kk: 'Жаңа тағам', price: '', image: '', vegan: false, beef: false, chicken: false, isNew: false }); renderCms(); };
window.deleteDish = (cIdx, iIdx) => { if(confirm('Delete dish?')){ appData.monitors[currentMonitorIndex].categories[cIdx].items.splice(iIdx, 1); renderCms(); } }
window.deleteCategory = (cIdx) => { if(confirm('Delete entire group?')){ appData.monitors[currentMonitorIndex].categories.splice(cIdx, 1); renderCms(); } }
document.getElementById('add-category-btn').addEventListener('click', () => { appData.monitors[currentMonitorIndex].categories.push({ name_ru: 'Новая категория', name_kk: 'Жаңа санат', items: [] }); renderCms(); });
document.getElementById('add-monitor-btn').addEventListener('click', () => { const newId = appData.monitors.length + 1; appData.monitors.push({ id: newId, name: `Monitor ${newId}`, layout: 'layout-1-sidebar-grid', categories: [] }); currentMonitorIndex = appData.monitors.length - 1; updateMonitorDropdowns(); renderCms(); });

window.handleImageUpload = (event, catIndex, itemIndex) => {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 800 * 1024) { alert('Image too large (>800KB). Please compress images.'); return; }
        const reader = new FileReader(); reader.onload = function(e) { appData.monitors[currentMonitorIndex].categories[catIndex].items[itemIndex].image = e.target.result; renderCms(); }; reader.readAsDataURL(file);
    }
};

document.getElementById('save-data-btn').addEventListener('click', () => { try { localStorage.setItem('fastfoodMenuData', JSON.stringify(appData)); alert('Saved!'); } catch (e) { alert('Storage limit reached! Compress images.'); } });
document.getElementById('reset-data-btn').addEventListener('click', () => { if(confirm('Reset all to default?')){ localStorage.removeItem('fastfoodMenuData'); location.reload(); } });

// =========================================
// SMART AUTO-FIT RENDERING ENGINE
// =========================================

// Calculates the optimal rows x cols matrix to fit exactly N items securely in a rectangle
function calculateGridDimensions(itemCount) {
    if(itemCount <= 1) return { c: 1, r: 1 };
    if(itemCount === 2) return { c: 2, r: 1 };
    if(itemCount === 3) return { c: 3, r: 1 };
    if(itemCount === 4) return { c: 2, r: 2 };
    if(itemCount <= 6) return { c: 3, r: 2 };
    if(itemCount <= 8) return { c: 4, r: 2 };
    if(itemCount === 9) return { c: 3, r: 3 };
    if(itemCount <= 10) return { c: 5, r: 2 };
    if(itemCount <= 12) return { c: 4, r: 3 };
    if(itemCount <= 15) return { c: 5, r: 3 };
    // Fallback scaling for huge lists
    return { c: Math.ceil(Math.sqrt(itemCount) * 1.5), r: Math.ceil(Math.sqrt(itemCount) / 1.5) };
}

function renderDisplay() {
    const currentMonitor = appData.monitors[currentMonitorIndex];
    if(!currentMonitor) return;

    containers.board.className = `menu-board ${currentMonitor.layout || 'layout-standard'}`;
    containers.board.innerHTML = '';

    // Calculate total items across all groups on this monitor to divide screen space proportionally
    const totalItemsOnMonitor = currentMonitor.categories.reduce((sum, cat) => sum + cat.items.length, 0);

    currentMonitor.categories.forEach(cat => {
        const itemCount = cat.items.length;
        if(itemCount === 0) return;
        
        const catDiv = document.createElement('div');
        catDiv.className = 'display-category';
        
        // CSS Smart Fit Injectors:
        // 1. Flex-Grow maps to the percentage of total items (e.g. 6 items takes 3x the vertical space of 2 items).
        catDiv.style.flexGrow = (itemCount / totalItemsOnMonitor).toString();
        
        // 2. Fetch the perfect grid matrix to ensure everything wraps strictly inside the new flexible bounding box.
        const grid = calculateGridDimensions(itemCount);
        catDiv.style.setProperty('--grid-cols', grid.c);
        catDiv.style.setProperty('--grid-rows', grid.r);

        let dishesHtml = cat.items.map(item => {
            const iconsHtml = `
                ${item.isNew ? '<span class="new-badge">NEW</span>' : ''}
                <div class="type-icons">
                    ${item.vegan ? '<span>V</span>' : ''}
                    ${item.beef ? '<span>B</span>' : ''}
                    ${item.chicken ? '<span>C</span>' : ''}
                </div>
            `;
            return `
            <div class="display-dish">
                <div class="dish-image-container">
                    <img src="${item.image || 'pizza.png'}" alt="${item.name_ru}">
                    ${iconsHtml}
                </div>
                <div class="dish-info">
                    <div class="dish-header">
                        <span class="dish-title-kk">${item.name_kk}</span>
                    </div>
                    <span class="dish-title-ru">${item.name_ru}</span>
                    <span class="dish-price">${item.price} ₸</span>
                </div>
            </div>
            `;
        }).join('');

        catDiv.innerHTML = `
            <h2>${cat.name_kk} / ${cat.name_ru}</h2>
            <div class="display-dishes-list">${dishesHtml}</div>
        `;
        containers.board.appendChild(catDiv);
    });
}

init();