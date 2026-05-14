// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ['imagenes/1.webp', 'imagenes/2.webp', 'imagenes/3.webp', 'imagenes/4.webp', 'imagenes/5.webp', 'imagenes/6.webp', 'imagenes/7.webp', 'imagenes/8.webp', 'imagenes/9.webp', 'imagenes/10.webp', 'imagenes/11.webp', 'imagenes/DSC_8423.webp', 'imagenes/DSC_8424.webp', 'imagenes/DSC_8425.webp', 'imagenes/DSC_8426.webp', 'imagenes/DSC_8427.webp', 'imagenes/DSC_8428.webp', 'imagenes/DSC_8429.webp', 'imagenes/DSC_8430.webp', 'imagenes/DSC_8431.webp', 'imagenes/DSC_8432.webp', 'imagenes/DSC_8433.webp', 'imagenes/DSC_8434.webp', 'imagenes/DSC_8435.webp', 'imagenes/DSC_8436.webp', 'imagenes/DSC_8437.webp', 'imagenes/DSC_8438.webp', 'imagenes/DSC_8439.webp', 'imagenes/DSC_8440.webp', 'imagenes/DSC_8441.webp', 'imagenes/DSC_8442.webp', 'imagenes/DSC_8444.webp', 'imagenes/DSC_8445.webp', 'imagenes/DSC_8446.webp', 'imagenes/DSC_8447.webp', 'imagenes/DSC_8448.webp', 'imagenes/DSC_8449.webp', 'imagenes/DSC_8450.webp', 'imagenes/DSC_8451.webp', 'imagenes/DSC_8452.webp', 'imagenes/DSC_8453.webp', 'imagenes/DSC_8454.webp', 'imagenes/DSC_8455.webp', 'imagenes/DSC_8456.webp', 'imagenes/DSC_8457.webp', 'imagenes/DSC_8458.webp', 'imagenes/DSC_8459.webp', 'imagenes/DSC_8460.webp', 'imagenes/DSC_8461.webp', 'imagenes/DSC_8462.webp', 'imagenes/DSC_8463.webp', 'imagenes/DSC_8464.webp', 'imagenes/DSC_8465.webp', 'imagenes/DSC_8466.webp', 'imagenes/DSC_8467.webp', 'imagenes/DSC_8468.webp', 'imagenes/DSC_8469.webp', 'imagenes/DSC_8470.webp', 'imagenes/DSC_8471.webp', 'imagenes/DSC_8472.webp', 'imagenes/DSC_8473.webp', 'imagenes/DSC_8474.webp', 'imagenes/DSC_8475.webp', 'imagenes/DSC_8476.webp', 'imagenes/DSC_8477.webp', 'imagenes/DSC_8478.webp', 'imagenes/DSC_8479.webp', 'imagenes/DSC_8480.webp', 'imagenes/DSC_8481.webp', 'imagenes/DSC_8482.webp', 'imagenes/DSC_8483.webp', 'imagenes/DSC_8484.webp', 'imagenes/DSC_8485.webp', 'imagenes/DSC_8486.webp', 'imagenes/DSC_8487.webp', 'imagenes/DSC_8488.webp', 'imagenes/DSC_8489.webp', 'imagenes/DSC_8490.webp', 'imagenes/DSC_8491.webp', 'imagenes/DSC_8492.webp', 'imagenes/DSC_8493.webp', 'imagenes/DSC_8494.webp', 'imagenes/DSC_8495.webp', 'imagenes/DSC_8496.webp', 'imagenes/DSC_8497.webp', 'imagenes/DSC_8498.webp', 'imagenes/DSC_8499.webp', 'imagenes/DSC_8500.webp', 'imagenes/DSC_8501.webp', 'imagenes/DSC_8502.webp', 'imagenes/DSC_8503.webp', 'imagenes/DSC_8504.webp', 'imagenes/DSC_8505.webp', 'imagenes/DSC_8506.webp', 'imagenes/DSC_8507.webp', 'imagenes/DSC_8508.webp', 'imagenes/DSC_8509.webp', 'imagenes/DSC_8510.webp', 'imagenes/DSC_8511.webp', 'imagenes/DSC_8512.webp'];
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
                <img src="${photo}" alt="${displayNumber}" loading="lazy">
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
