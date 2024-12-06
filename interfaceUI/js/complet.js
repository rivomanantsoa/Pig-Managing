document.addEventListener('DOMContentLoaded', () => {
    resetFilters();

    // Gestion des événements
    document.getElementById('searchInput').addEventListener('input', () => {
        applySearch();
    });

    document.getElementById('checking').addEventListener('change', () => {
        toggleFilterMode();
    });

    document.querySelector('.button').addEventListener('click', resetFilters);

    const selects = document.querySelectorAll('#SelectedAge, #SelectedPoids, #SelectedGenre, #SelectedRace, #SelectedType, #SelectedSpecificite');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            applyFilters();
        });
    });
});

function applySearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const pigCards = document.querySelectorAll('.pig-card');
    pigCards.forEach(card => {
        const textContent = card.innerText.toLowerCase();
        card.style.display = textContent.includes(searchTerm) ? 'block' : 'none';
    });
    updateStatistics();
}

function toggleFilterMode() {
    const isChecked = document.getElementById('checking').checked;
    document.getElementById('searchInput').disabled = isChecked;
    document.getElementById('amoxie').style.display = isChecked ? 'flex' : 'none';
    if (!isChecked) resetFilters();
}

function resetFilters() {
    document.querySelectorAll('select').forEach(select => select.value = '');
    document.querySelectorAll('.pig-card').forEach(card => card.style.display = 'block');
    updateStatistics();
}

function applyFilters() {
    const filters = {
        age: document.getElementById('SelectedAge').value,
        poids: document.getElementById('SelectedPoids').value,
        genre: document.getElementById('SelectedGenre').value,
        race: document.getElementById('SelectedRace').value,
        type: document.getElementById('SelectedType').value,
        specificite: document.getElementById('SelectedSpecificite').value,
    };

    const pigCards = document.querySelectorAll('.pig-card');
    pigCards.forEach(card => {
        const matches = Object.keys(filters).every(key => {
            const value = filters[key];
            if (!value) return true;
            const field = card.querySelector(`.${key}`);
            return field && field.innerText.includes(value);
        });
        card.style.display = matches ? 'block' : 'none';
    });

    updateStatistics();
}

function updateStatistics() {
    const pigCards = document.querySelectorAll('.pig-card');
    let total = 0, males = 0, females = 0;

    pigCards.forEach(card => {
        if (card.style.display !== 'none') {
            total++;
            const genre = card.querySelector('.genre').innerText;
            if (genre.includes('Male')) males++;
            else if (genre.includes('Femelle')) females++;
        }
    });

    const statsContainer = document.getElementById('pigStats');
    statsContainer.innerHTML = `
        <div>Total : ${total}</div>
        <div>Mâles : ${males}</div>
        <div>Femelles : ${females}</div>
    `;
}
