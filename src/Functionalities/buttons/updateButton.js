function updateTaskButton() {
    const updateButton = document.createElement('button');
    updateButton.id = 'updateButton';
    updateButton.className = 'updateButton';

    const icon = document.createElement('i');

    icon.classList.add('fas', 'fa-edit');

    updateButton.appendChild(icon);

    updateButton.style.color = 'yellow';
    updateButton.style.border = 'none';
    updateButton.style.cursor = 'pointer';
    updateButton.style.backgroundColor = 'transparent'

    return updateButton;
}
export default updateTaskButton
