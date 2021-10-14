const inputElement = document.querySelector('input');
const addButton = document.querySelector('form button');
const ulElement = document.querySelector('ul');

addButton.addEventListener('click', {passive: false},(ev) => {
    ev.preventDefault();
    if(inputElement.value) {
        const listElement = document.createElement('li');
        const removeBtn = document.createElement('button');

        listElement.innerHTML = `<span>${inputElement.value}</span>`;
        removeBtn.innerHTML = `<i class="fas fa-trash-alt fa-sm"></i>`;

        removeBtn.classList.add('remove-btn');

        ulElement.appendChild(listElement);
        listElement.appendChild(removeBtn);

        inputElement.value = '';
        
        removeBtn.addEventListener('click', () => {
            listElement.remove();
        })

        listElement.addEventListener('click', () => {
            listElement.classList.toggle('checked-list');
        })
    }
});

