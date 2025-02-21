let names = [];

const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const drawButton = document.getElementById('drawButton');
const nameList = document.getElementById('nameList');
const result = document.getElementById('result');

function renderNameList() {
    nameList.innerHTML = '';
    names.forEach((name, index) => {
        const nameItem = document.createElement('div');
        nameItem.className = 'name-item';

        const nameText = document.createElement('span');
        nameText.textContent = name;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Usuń';
        deleteButton.addEventListener('click', () => {
            names.splice(index, 1);
            renderNameList();
        });

        nameItem.appendChild(nameText);
        nameItem.appendChild(deleteButton);
        nameList.appendChild(nameItem);
    });
}


addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        if (!names.includes(name)) { 
            names.push(name);
            nameInput.value = '';
            renderNameList();
        } else {
            alert('To imię już jest na liście!');
        }
    } else {
        alert('Wpisz imię!');
    }
});

function drawNameWithWeight() {
    if (names.length === 0) {
        return 'Brak osób do wylosowania!';
    }


    const weightedNames = [];
    names.forEach(name => {
        const lowerName = name.toLowerCase();
        if (lowerName === 'pawel' || lowerName === 'paweł') {
            weightedNames.push({ name, weight: 1 });
        } else {
            weightedNames.push({ name, weight: 5 });
        }
    });

    const totalWeight = weightedNames.reduce((sum, entry) => sum + entry.weight, 0);

    const random = Math.random() * totalWeight;
    
    let cumulativeWeight = 0;
    for (const entry of weightedNames) {
        cumulativeWeight += entry.weight;
        if (random < cumulativeWeight) {
            return entry.name;
        }
    }
}

drawButton.addEventListener('click', () => {
    if (names.length > 0) {
        const winner = drawNameWithWeight();
        result.textContent = `Wylosowana osoba: ${winner}`;
    } else {
        result.textContent = 'Brak osób do wylosowania!';
    }
});

renderNameList();
