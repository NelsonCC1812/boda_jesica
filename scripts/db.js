const sendData = e => {
    e.preventDefault()

    const db = firebase.initializeApp(FIRE_KEY).firestore()

    const name = document.querySelector('#name')
    const companion = document.querySelector('#companion')
    const withKids = document.querySelector('#withKids')
    const others = document.querySelector('#others')

    db.collection('Items').add({ name, companion, withKids, others })
    then(elm => {
        if (elm == null) return document.querySelector('#form-error').classList.remove('hidden')
        return document.querySelector('#form-correct').classList.remove('hidden')
    })
        .catch(err => document.querySelector('#form-error').classList.remove('hidden'))
}