function removeTaskButton() {
    const removeButton = document.createElement('button');
    removeButton.id = 'removeButton';
    removeButton.className = 'removeButton';

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt');
    removeButton.appendChild(icon);

    removeButton.style.color = 'black';
    removeButton.style.border = 'none';
    removeButton.style.cursor = 'pointer';
    removeButton.style.backgroundColor = 'transparent'

    return removeButton;
}
export default removeTaskButton
