document.querySelector('#confirm-form').addEventListener('click', () => {
    const correct = document.querySelector('#confirm-form-correct')
    const error = document.querySelector('#confirm-form-error')

    !correct.classList.contains('hidden') && correct.classList.add('hidden')
    !error.classList.contains('hidden') && error.classList.add('hidden')
})

document.querySelector('#music-form').addEventListener('click', () => {
    document.querySelector('#music-form-correct').classList.add('hidden')
    document.querySelector('#music-form-error').classList.add('hidden')
})