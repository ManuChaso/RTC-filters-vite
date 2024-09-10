import './Card.css'

export default function Card(info, parent){
    const cardContainer = document.createElement('div')
    cardContainer.className = 'card-container'

    const name = document.createElement('h3')
    name.className = 'card-name'
    name.textContent = info["nombre"]


    const age = document.createElement('h3')
    age.className = 'card-age'
    age.textContent = info["edad"]

    const gender = document.createElement('h3')
    gender.className = 'card-gender'
    gender.textContent = info["género"]

    const job = document.createElement('h3')
    job.className = 'card-job'
    job.textContent = info["oficio"]

    cardContainer.append(name, age, gender, job)

    parent.appendChild(cardContainer)
}