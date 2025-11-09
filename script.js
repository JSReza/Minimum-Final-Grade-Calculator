const form = document.getElementById('form');
const resultEl = document.getElementById('result');
const modal = document.getElementById('errorModal');
const closeBtn = document.querySelector('.close');
const modalMessage = document.getElementById('modal-message');

form.addEventListener('submit', function(e){
    e.preventDefault()
    const currentGrade = parseFloat(document.getElementById('current-grade').value)
    const finalWeight = parseFloat(document.getElementById('weight').value)

    if (isNaN(currentGrade) || isNaN(finalWeight)) {
        showModal("Please enter valid numbers for both fields.")
        return
    }else if (currentGrade <= 1 || currentGrade >= 100) {
        showModal("Current grade must be between 1 and 100.")
        return
    }else if (finalWeight <= 1 || finalWeight >= 100) {
        showModal("Final weight must be between 1 and 100.")
        return
    }

    const required = (70 - (currentGrade * (1-finalWeight/100)))/(finalWeight/100)
    resultEl.innerHTML = `You need <strong>${required.toFixed(1)}%</strong> on your final to pass with a C-`
})

closeBtn.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

function showModal(message) {
    modalMessage.textContent = message
    modal.style.display = "block"
}
