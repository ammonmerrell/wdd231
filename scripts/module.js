const modal = document.getElementById('course-info');
const endModal = document.getElementById('end-info');
const modalButton = document.getElementById('button');

modalButton.addEventListener('click', () => {
    modal.showModal()
});
endModal.addEventListener('click', () => {
    modal.close()
})