import './Home.css'
import {data} from '../../data/data';
import { print, filter } from '../../utils/utils';

let peopleData = data


export default function Home(app){
    const homeContainer = document.createElement('section');
    homeContainer.className = 'home-container';

    app.appendChild(homeContainer)

    print(peopleData)

    
    const filterButton = document.querySelector('.search-button');
    const cleanFilters = document.querySelector('.clean-filter')
    const inputSearch = document.querySelector('.input-search');
    const inputAge = document.querySelector('.input-age');
    const select =  document.querySelector('.filter-select')
    
    filterButton.addEventListener('click', () => filter(peopleData))

    cleanFilters.addEventListener('click', () => {
        inputSearch.value = '';
        inputAge.value = '';
        select.value = 'default'
        print(peopleData)
    })

    inputSearch.addEventListener('keydown', (e) => {
        if(e.key == 'Enter'){
            filter(peopleData)
        }
    })

    inputAge.addEventListener('keydown', (e) => {
        if(e.key == 'Enter'){
            filter(peopleData)
        }
    })
}
