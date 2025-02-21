let names = [];

const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const drawButton = document.getElementById('drawButton');
const nameList = document.getElementById('nameList');
const result = document.getElementById('result');

// Funkcja do wyświetlania listy osób
function renderNameList() {
    nameList.innerHTML = ''; // Czyści listę przed ponownym wyświetleniem
    names.forEach((name, index) => {
        const nameItem = document.createElement('div');
        nameItem.className = 'name-item';

        const nameText = document.createElement('span');
        nameText.textContent = name;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Usuń';
        deleteButton.addEventListener('click', () => {
            names.splice(index, 1); // Usuwa osobę z listy
            renderNameList(); // Ponownie renderuje listę
        });

        nameItem.appendChild(nameText);
        nameItem.appendChild(deleteButton);
        nameList.appendChild(nameItem);
    });
}

// Dodawanie imienia do listy
addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        if (!names.includes(name)) { // Sprawdza, czy imię już istnieje
            names.push(name);
            nameInput.value = ''; // Czyści pole tekstowe
            renderNameList(); // Aktualizuje listę
        } else {
            alert('To imię już jest na liście!');
        }
    } else {
        alert('Wpisz imię!');
    }
});

// Funkcja do losowania osoby z uwzględnieniem wagi
function drawNameWithWeight() {
    if (names.length === 0) {
        return 'Brak osób do wylosowania!';
    }

    // Tworzymy listę z wagami
    const weightedNames = [];
    names.forEach(name => {
        const lowerName = name.toLowerCase();
        if (lowerName === 'pawel' || lowerName === 'paweł') {
            // Osoba o imieniu "Pawel" ma wagę 1
            weightedNames.push({ name, weight: 1 });
        } else {
            // Pozostałe osoby mają wagę 5
            weightedNames.push({ name, weight: 5 });
        }
    });

    // Obliczamy sumę wag
    const totalWeight = weightedNames.reduce((sum, entry) => sum + entry.weight, 0);

    // Losujemy liczbę z zakresu 0 do sumy wag
    const random = Math.random() * totalWeight;

    // Wybieramy osobę na podstawie wylosowanej liczby
    let cumulativeWeight = 0;
    for (const entry of weightedNames) {
        cumulativeWeight += entry.weight;
        if (random < cumulativeWeight) {
            return entry.name;
        }
    }
}

// Losowanie osoby
drawButton.addEventListener('click', () => {
    if (names.length > 0) {
        const winner = drawNameWithWeight();
        result.textContent = `Wylosowana osoba: ${winner}`;
    } else {
        result.textContent = 'Brak osób do wylosowania!';
    }
});

// Inicjalne wyświetlenie listy (jeśli są już jakieś imiona)
renderNameList();
