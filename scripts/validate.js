const validateConfirmForm = ({ name, companion, kidsNumber, others }) => {

    if (!document.querySelector('#confirm-form').reportValidity()) return null


    if (!name) return null

    if (typeof kidsNumber != Number) return null
    if (kidsNumber < 0) return null


    return { name, companion, kidsNumber, others }
}

const validateMusicForm = ({ music }) => {
    if (!document.querySelector('#music-form').reportValidity()) return null

    if (!music) return null
    return { music }
}