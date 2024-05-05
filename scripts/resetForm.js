const resetConfirmForm = () => {
    document.querySelector('#name').value = ""
    document.querySelector('#companion').value = ""
    document.querySelector('#kidsNumber').value = 0
    document.querySelector('#others').value = ""

    document.querySelector('#confirm-form-error').classList.add('hidden')
    document.querySelector('#confirm-form-correct').classList.add('hidden')
}

const resetMusicForm = () => {
    document.querySelector('#music').value = ""

    document.querySelector('#music-form-error').classList.add('hidden')
    document.querySelector('#music-form-correct').classList.add('hidden')
}