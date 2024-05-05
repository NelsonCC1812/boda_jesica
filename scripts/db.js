const sendConfirm = ({ name, companion, kidsNumber, others }) => {

    const db = firebase.initializeApp(FIRE_KEY).firestore()

    db.collection('Confirm').add({ name, companion, kidsNumber, others })
        .then(res => res.id)
        .catch(err => document.querySelector('#confirm-form-error').classList.remove('hidden'))
}

const sendMusic = ({ music }) => {
    const db = firebase.initializeApp(FIRE_KEY).firestore()

    db.collection('Music').add({ music })
        .then(res => res.id)
        .catch(err => document.querySelector('#music-form-error').classList.remove('hidden'))
}