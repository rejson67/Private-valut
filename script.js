// Check authentication for protected pages
function checkAuth() {
    if (!localStorage.getItem('dv_username') || !localStorage.getItem('dv_pin')) {
        window.location.href = 'index.html';
    }
}

// Format time display
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}

// Initialize time and update every minute
if (document.getElementById('current-time')) {
    updateTime();
    setInterval(updateTime, 60000);
}

// Local storage wrapper
const storage = {
    getNotes: () => {
        return JSON.parse(localStorage.getItem('dv_notes') || '[]');
    },
    saveNotes: (notes) => {
        localStorage.setItem('dv_notes', JSON.stringify(notes));
    },
    getGallery: () => {
        return JSON.parse(localStorage.getItem('dv_gallery') || '[]');
    },
    saveGallery: (images) => {
        localStorage.setItem('dv_gallery', JSON.stringify(images));
    }
}; 
