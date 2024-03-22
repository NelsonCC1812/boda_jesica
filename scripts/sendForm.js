const sendForm = async e => {
    e.preventDefault()

    const form = {
        name: document.querySelector('#name').value,
        companion: document.querySelector('#companion').value,
        kidsNumber: Number(document.querySelector('#kidsNumber').value),
        others: document.querySelector('#others').value
    }


    if (!validateForm(form) && !(await sendData(form))) document.querySelector('#form-error').classList.remove('hidden')

    document.querySelector('#form-correct').classList.remove('hidden')
    resetForm()
}