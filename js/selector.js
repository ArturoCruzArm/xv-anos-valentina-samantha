// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ['imagenes/1.webp', 'imagenes/10.webp', 'imagenes/11.webp', 'imagenes/2.webp', 'imagenes/2026-05-04-17-46-44-551.webp', 'imagenes/2026-05-04-17-46-56-459.webp', 'imagenes/2026-05-04-17-47-00-562.webp', 'imagenes/2026-05-04-17-47-11-986.webp', 'imagenes/2026-05-04-17-47-22-526.webp', 'imagenes/2026-05-04-17-47-25-160.webp', 'imagenes/2026-05-04-17-47-29-061.webp', 'imagenes/2026-05-04-17-47-30-862.webp', 'imagenes/2026-05-04-17-47-34-264.webp', 'imagenes/2026-05-04-17-47-36-968.webp', 'imagenes/2026-05-04-17-47-39-219.webp', 'imagenes/2026-05-04-17-47-42-137.webp', 'imagenes/2026-05-04-17-47-45-087.webp', 'imagenes/2026-05-04-17-47-48-816.webp', 'imagenes/2026-05-04-17-47-55-087.webp', 'imagenes/2026-05-04-17-48-05-687.webp', 'imagenes/2026-05-04-17-48-08-553.webp', 'imagenes/2026-05-04-17-48-12-908.webp', 'imagenes/2026-05-04-17-48-21-261.webp', 'imagenes/2026-05-04-17-50-04-404.webp', 'imagenes/2026-05-04-17-50-06-075.webp', 'imagenes/3.webp', 'imagenes/4.webp', 'imagenes/5.webp', 'imagenes/6.webp', 'imagenes/7.webp', 'imagenes/8.webp', 'imagenes/9.webp', 'imagenes/DSC_0006.webp', 'imagenes/DSC_0007.webp', 'imagenes/DSC_0008.webp', 'imagenes/DSC_0009.webp', 'imagenes/DSC_0010.webp', 'imagenes/DSC_0011.webp', 'imagenes/DSC_0037.webp', 'imagenes/DSC_0042.webp', 'imagenes/DSC_0043.webp', 'imagenes/DSC_0044.webp', 'imagenes/DSC_0045.webp', 'imagenes/DSC_0046.webp', 'imagenes/DSC_0047.webp', 'imagenes/DSC_0048.webp', 'imagenes/DSC_0050.webp', 'imagenes/DSC_0051.webp', 'imagenes/DSC_0052.webp', 'imagenes/DSC_0053.webp', 'imagenes/DSC_0054.webp', 'imagenes/DSC_0055.webp', 'imagenes/DSC_0056.webp', 'imagenes/DSC_0057.webp', 'imagenes/DSC_0058.webp', 'imagenes/DSC_0059.webp', 'imagenes/DSC_0060.webp', 'imagenes/DSC_0062.webp', 'imagenes/DSC_0063.webp', 'imagenes/DSC_0064.webp', 'imagenes/DSC_0065.webp', 'imagenes/DSC_0066.webp', 'imagenes/DSC_0067.webp', 'imagenes/DSC_0068.webp', 'imagenes/DSC_0069.webp', 'imagenes/DSC_0070.webp', 'imagenes/DSC_0071.webp', 'imagenes/DSC_0072.webp', 'imagenes/DSC_0073.webp', 'imagenes/DSC_0074.webp', 'imagenes/DSC_0075.webp', 'imagenes/DSC_0076.webp', 'imagenes/DSC_0077.webp', 'imagenes/DSC_0078.webp', 'imagenes/DSC_0079.webp', 'imagenes/DSC_0082.webp', 'imagenes/DSC_0083.webp', 'imagenes/DSC_0084.webp', 'imagenes/DSC_0085.webp', 'imagenes/DSC_0087.webp', 'imagenes/DSC_0088.webp', 'imagenes/DSC_0089.webp', 'imagenes/DSC_0090.webp', 'imagenes/DSC_0091.webp', 'imagenes/DSC_0092.webp', 'imagenes/DSC_0094.webp', 'imagenes/DSC_0095.webp', 'imagenes/DSC_0096.webp', 'imagenes/DSC_0097.webp', 'imagenes/DSC_0098.webp', 'imagenes/DSC_0099.webp', 'imagenes/DSC_0100.webp', 'imagenes/DSC_0101.webp', 'imagenes/DSC_0102.webp', 'imagenes/DSC_0104.webp', 'imagenes/DSC_0107.webp', 'imagenes/DSC_0108.webp', 'imagenes/DSC_0109.webp', 'imagenes/DSC_0110.webp', 'imagenes/DSC_0111.webp', 'imagenes/DSC_0112.webp', 'imagenes/DSC_0113.webp', 'imagenes/DSC_0114.webp', 'imagenes/DSC_0115.webp', 'imagenes/DSC_0116.webp', 'imagenes/DSC_0117.webp', 'imagenes/DSC_0118.webp', 'imagenes/DSC_0119.webp', 'imagenes/DSC_0120.webp', 'imagenes/DSC_0121.webp', 'imagenes/DSC_0122.webp', 'imagenes/DSC_0123.webp', 'imagenes/DSC_0124.webp', 'imagenes/DSC_0125.webp', 'imagenes/DSC_0126.webp', 'imagenes/DSC_0127.webp', 'imagenes/DSC_0128.webp', 'imagenes/DSC_0129.webp', 'imagenes/DSC_0130.webp', 'imagenes/DSC_0131.webp', 'imagenes/DSC_0132.webp', 'imagenes/DSC_0133.webp', 'imagenes/DSC_0134.webp', 'imagenes/DSC_0135.webp', 'imagenes/DSC_0136.webp', 'imagenes/DSC_0137.webp', 'imagenes/DSC_0138.webp', 'imagenes/DSC_0139.webp', 'imagenes/DSC_0140.webp', 'imagenes/DSC_0141.webp', 'imagenes/DSC_0142.webp', 'imagenes/DSC_0143.webp', 'imagenes/DSC_0144.webp', 'imagenes/DSC_0145.webp', 'imagenes/DSC_0146.webp', 'imagenes/DSC_0147.webp', 'imagenes/DSC_0148.webp', 'imagenes/DSC_0149.webp', 'imagenes/DSC_0150.webp', 'imagenes/DSC_0151.webp', 'imagenes/DSC_0152.webp', 'imagenes/DSC_0153.webp', 'imagenes/DSC_0154.webp', 'imagenes/DSC_0155.webp', 'imagenes/DSC_0156.webp', 'imagenes/DSC_0157.webp', 'imagenes/DSC_0158.webp', 'imagenes/DSC_0159.webp', 'imagenes/DSC_0160.webp', 'imagenes/DSC_0161.webp', 'imagenes/DSC_0162.webp', 'imagenes/DSC_0163.webp', 'imagenes/DSC_0164.webp', 'imagenes/DSC_0165.webp', 'imagenes/DSC_0166.webp', 'imagenes/DSC_0167.webp', 'imagenes/DSC_0168.webp', 'imagenes/DSC_0169.webp', 'imagenes/DSC_0170.webp', 'imagenes/DSC_0171.webp', 'imagenes/DSC_0172.webp', 'imagenes/DSC_0173.webp', 'imagenes/DSC_0174.webp', 'imagenes/DSC_0175.webp', 'imagenes/DSC_0176.webp', 'imagenes/DSC_0177.webp', 'imagenes/DSC_0178.webp', 'imagenes/DSC_0179.webp', 'imagenes/DSC_0180.webp', 'imagenes/DSC_0181.webp', 'imagenes/DSC_0182.webp', 'imagenes/DSC_0183.webp', 'imagenes/DSC_0184.webp', 'imagenes/DSC_0185.webp', 'imagenes/DSC_0186.webp', 'imagenes/DSC_0187.webp', 'imagenes/DSC_0188.webp', 'imagenes/DSC_0189.webp', 'imagenes/DSC_0190.webp', 'imagenes/DSC_0191.webp', 'imagenes/DSC_0192.webp', 'imagenes/DSC_0193.webp', 'imagenes/DSC_0194.webp', 'imagenes/DSC_0195.webp', 'imagenes/DSC_0196.webp', 'imagenes/DSC_0197.webp', 'imagenes/DSC_0199.webp', 'imagenes/DSC_0200.webp', 'imagenes/DSC_0201.webp', 'imagenes/DSC_0202.webp', 'imagenes/DSC_0203.webp', 'imagenes/DSC_0204.webp', 'imagenes/DSC_0205.webp', 'imagenes/DSC_0206.webp', 'imagenes/DSC_0207.webp', 'imagenes/DSC_0208.webp', 'imagenes/DSC_0209.webp', 'imagenes/DSC_0210.webp', 'imagenes/DSC_0211.webp', 'imagenes/DSC_0212.webp', 'imagenes/DSC_0213.webp', 'imagenes/DSC_0214.webp', 'imagenes/DSC_0215.webp', 'imagenes/DSC_0216.webp', 'imagenes/DSC_0217.webp', 'imagenes/DSC_0218.webp', 'imagenes/DSC_0219.webp', 'imagenes/DSC_0220.webp', 'imagenes/DSC_0221.webp', 'imagenes/DSC_0222.webp', 'imagenes/DSC_0223.webp', 'imagenes/DSC_0224.webp', 'imagenes/DSC_0225.webp', 'imagenes/DSC_0226.webp', 'imagenes/DSC_0227.webp', 'imagenes/DSC_0228.webp', 'imagenes/DSC_0229.webp', 'imagenes/DSC_0230.webp', 'imagenes/DSC_0231.webp', 'imagenes/DSC_0232.webp', 'imagenes/DSC_0233.webp', 'imagenes/DSC_0234.webp', 'imagenes/DSC_0235.webp', 'imagenes/DSC_0236.webp', 'imagenes/DSC_0237.webp', 'imagenes/DSC_8423.webp', 'imagenes/DSC_8424.webp', 'imagenes/DSC_8425.webp', 'imagenes/DSC_8426.webp', 'imagenes/DSC_8427.webp', 'imagenes/DSC_8428.webp', 'imagenes/DSC_8429.webp', 'imagenes/DSC_8430.webp', 'imagenes/DSC_8431.webp', 'imagenes/DSC_8432.webp', 'imagenes/DSC_8433.webp', 'imagenes/DSC_8434.webp', 'imagenes/DSC_8435.webp', 'imagenes/DSC_8436.webp', 'imagenes/DSC_8437.webp', 'imagenes/DSC_8438.webp', 'imagenes/DSC_8439.webp', 'imagenes/DSC_8440.webp', 'imagenes/DSC_8441.webp', 'imagenes/DSC_8442.webp', 'imagenes/DSC_8444.webp', 'imagenes/DSC_8445.webp', 'imagenes/DSC_8446.webp', 'imagenes/DSC_8447.webp', 'imagenes/DSC_8448.webp', 'imagenes/DSC_8449.webp', 'imagenes/DSC_8450.webp', 'imagenes/DSC_8451.webp', 'imagenes/DSC_8452.webp', 'imagenes/DSC_8453.webp', 'imagenes/DSC_8454.webp', 'imagenes/DSC_8455.webp', 'imagenes/DSC_8456.webp', 'imagenes/DSC_8457.webp', 'imagenes/DSC_8458.webp', 'imagenes/DSC_8459.webp', 'imagenes/DSC_8460.webp', 'imagenes/DSC_8461.webp', 'imagenes/DSC_8462.webp', 'imagenes/DSC_8463.webp', 'imagenes/DSC_8464.webp', 'imagenes/DSC_8465.webp', 'imagenes/DSC_8466.webp', 'imagenes/DSC_8467.webp', 'imagenes/DSC_8468.webp', 'imagenes/DSC_8469.webp', 'imagenes/DSC_8470.webp', 'imagenes/DSC_8471.webp', 'imagenes/DSC_8472.webp', 'imagenes/DSC_8473.webp', 'imagenes/DSC_8474.webp', 'imagenes/DSC_8475.webp', 'imagenes/DSC_8476.webp', 'imagenes/DSC_8477.webp', 'imagenes/DSC_8478.webp', 'imagenes/DSC_8479.webp', 'imagenes/DSC_8480.webp', 'imagenes/DSC_8481.webp', 'imagenes/DSC_8482.webp', 'imagenes/DSC_8483.webp', 'imagenes/DSC_8484.webp', 'imagenes/DSC_8485.webp', 'imagenes/DSC_8486.webp', 'imagenes/DSC_8487.webp', 'imagenes/DSC_8488.webp', 'imagenes/DSC_8489.webp', 'imagenes/DSC_8490.webp', 'imagenes/DSC_8491.webp', 'imagenes/DSC_8492.webp', 'imagenes/DSC_8493.webp', 'imagenes/DSC_8494.webp', 'imagenes/DSC_8495.webp', 'imagenes/DSC_8496.webp', 'imagenes/DSC_8497.webp', 'imagenes/DSC_8498.webp', 'imagenes/DSC_8499.webp', 'imagenes/DSC_8500.webp', 'imagenes/DSC_8501.webp', 'imagenes/DSC_8502.webp', 'imagenes/DSC_8503.webp', 'imagenes/DSC_8504.webp', 'imagenes/DSC_8505.webp', 'imagenes/DSC_8506.webp', 'imagenes/DSC_8507.webp', 'imagenes/DSC_8508.webp', 'imagenes/DSC_8509.webp', 'imagenes/DSC_8510.webp', 'imagenes/DSC_8511.webp', 'imagenes/DSC_8512.webp'];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

const STORAGE_KEY = 'xv_valentina_samantha_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada)
    };
}

function hasAnySelection(selection) {
    const normalized = normalizeSelection(selection);
    return normalized.ampliacion || normalized.impresion || normalized.invitacion || normalized.descartada;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains("selected");
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) {
        saveSelections({ sync: false });
        return false;
    }

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        } else if (typeof sbUpsertSelections === 'function') {
            sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    const displayNumber = currentPhotoIndex + 1;
    if (!confirm('¿Borrar la selección de la foto ' + displayNumber + '?')) {
        return;
    }
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años — Valentina Samantha',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-valentina-samantha-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '🌸 SELECCIÓN DE FOTOS - XV AÑOS VALENTINA SAMANTHA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);
    document.getElementById('btnDeleteSelection').addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections({ sync: false });
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        if (typeof sbRegistrarVisita === 'function') sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
