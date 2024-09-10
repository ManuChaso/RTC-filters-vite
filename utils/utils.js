import Card from "../components/Card/Card";


export function filter(data){
    const inputSearch = document.querySelector('.input-search').value.toLowerCase()
    const inputAge = document.querySelector('.input-age').value
    const select = document.querySelector('.filter-select').value

    const newData = data.filter(person => {
        const name = inputSearch ?
        (person['nombre'].toLowerCase().includes(inputSearch) ||
        person['oficio'].toLowerCase().includes(inputSearch)) :
        true;
        const age = inputAge ? inputAge > person['edad'] : true
        const gender = select !== 'default' ? person["género"] == select : true

        if(name && age && gender){
            return person
        }
    });

    print(newData)
}

export function print(data){
    const homeContainer = document.querySelector('.home-container')
    homeContainer.innerHTML = ''

    if(data.length > 0){
        data.forEach(person => {
            Card(person, homeContainer)
        })
    }else{
        alert('No se han encontrado personas')
    }
}