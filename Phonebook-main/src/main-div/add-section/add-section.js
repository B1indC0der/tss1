import './add-section.scss'

const AddSection = () => {
    const addSection = document.createElement('div')
    addSection.className = 'add_section'

    const addBtn = document.createElement('button')
    addBtn.className = 'add_section__btn'
    addBtn.innerText = 'Добавить'

    const addDialog = () => {
        let mainBasis = document.getElementById('basis-main')
        mainBasis.classList.remove('active')
        let addBasis = document.getElementById('basis-add')
        addBasis.classList.add('active')
    }
    addBtn.addEventListener('click', addDialog)

    addSection.appendChild(addBtn)

    return addSection
}

export default AddSection