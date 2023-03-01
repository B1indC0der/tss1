import './go-back-section.scss'

const GoBackSection = () => {
    const GoBackSection = document.createElement('div')
    GoBackSection.className = 'go-back_section'

    const addBtn = document.createElement('button')
    addBtn.className = 'go-back_section__btn'
    addBtn.innerText = 'Добавить'

    const addDialog = () => {
        let mainBasis = document.getElementById('basis-main')
        mainBasis.classList.remove('active')
        let addBasis = document.getElementById('basis-add')
        addBasis.classList.add('active')
    }
    addBtn.addEventListener('click', addDialog)

    GoBackSection.appendChild(addBtn)

    return GoBackSection
}

export default GoBackSection