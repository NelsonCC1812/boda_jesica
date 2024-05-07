const sendFormConfirm = async e => {
    e.preventDefault()

    const form = {
        name: document.querySelector('#name').value,
        companion: document.querySelector('#companion').value,
        kidsNumber: Number(document.querySelector('#kidsNumber').value) || 0,
        others: document.querySelector('#others').value
    }

    if (validateConfirmForm(form) && (await sendConfirm(form))) {
        document.querySelector('#confirm-form-correct').classList.remove('hidden')
        resetConfirmForm()
    }
}


const sendFormMusic = async e => {
    e.preventDefault()

    const form = {
        music: document.querySelector('#music').value,
    }

    if (validateMusicForm(form) && (await sendMusic(form))) {
        document.querySelector('#music-form-correct').classList.remove('hidden')
        resetMusicForm()
    }
}