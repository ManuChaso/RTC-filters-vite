import './Header.css'

export default function Header(app){
    const filters = document.createElement('header');
    filters.className = 'filters'


    const inputSearch = document.createElement('input');
    inputSearch.className = 'input-search'
    inputSearch.placeholder = 'Buscar...'

    const inputAge = document.createElement('input');
    inputAge.className = 'input-age'
    inputAge.type = 'number'
    inputAge.placeholder = 'Edad...'

    const searchButton = document.createElement('button')
    searchButton.className = 'search-button'
    searchButton.textContent = 'Filtrar'

    const cleanFilters = document.createElement('button')
    cleanFilters.className = 'clean-filter'
    cleanFilters.textContent = 'Limpiar'

    filters.innerHTML += `
        <select name="select" class="filter-select">
            <option selected value="default">Todos</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
        </select>
    `


    filters.append(inputSearch, inputAge, searchButton, cleanFilters)

    app.appendChild(filters)
}