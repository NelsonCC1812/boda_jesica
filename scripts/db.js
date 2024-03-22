const sendData = ({ name, companion, kidsNumber, others }) => {

    const db = firebase.initializeApp(FIRE_KEY).firestore()

    db.collection('Items').add({ name, companion, kidsNumber, others })
        .then(res => res.id)
        .catch(err => document.querySelector('#form-error').classList.remove('hidden'))
}