const resetForm = () => {
    document.querySelector('#name').value = ""
    document.querySelector('#companion').value = ""
    document.querySelector('#kidsNumber').value = 0
    document.querySelector('#others').value = ""

    document.querySelector('#form-error').classList.add('hidden')
    document.querySelector('#form-correct').classList.add('hidden')
}