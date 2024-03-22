const validateForm = ({ name, companion, kidsNumber, others }) => {

    if (!document.querySelector('form').reportValidity()) return null


    if (!name) return null

    if (typeof kidsNumber !== Number) return null
    if (kidsNumber < 0) return null


    return { name, companion, kidsNumber, others }
}