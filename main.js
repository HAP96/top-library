const content = document.getElementById('content')
const newBtn = document.getElementById('newBtn')
const loginBtn = document.getElementById('loginBtn')

const bookFactory = (title, author, pages, isRead) => {
    return {title, author, pages, isRead}
}

myLibrary = []

const renderCards = () => {
    for (book of myLibrary) {
        const card = document.createElement('div')
        const title = document.createElement('h1')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const btns = document.createElement('div')
        const isRead = document.createElement('button')
        const remove = document.createElement('button')
        const cardContent = document.createElement('div')

        card.classList.add('card-el')
        title.classList.add('card-title')
        author.classList.add('card-author')
        author.classList.add('card-item')
        pages.classList.add('card-pages')
        pages.classList.add('card-item')
        isRead.id = 'isReadBtn'
        isRead.classList.add('cardBtn')
        remove.classList.add('cardBtn')
        remove.id = 'removeBtn'
        btns.classList.add('card-btns')
        cardContent.classList.add('card-content')

        isRead.onclick = toggleRead
        remove.onclick = removeCard

        title.textContent = book.title
        author.innerHTML = `<span>Author:</span>` + ' ' + book.author
        pages.innerHTML = `<span>Pages:</span>` + ' ' + book.pages
        remove.textContent = 'Delete'
        
        btns.appendChild(isRead)
        btns.appendChild(remove)
        cardContent.appendChild(author)
        cardContent.appendChild(pages)
        card.appendChild(title)
        card.appendChild(cardContent)
        card.appendChild(btns)
        content.appendChild(card)

        if (book.isRead === true) {
            isRead.textContent = 'Read'
            isRead.classList.add('active')
        } else {
            isRead.textContent = 'Not Read'
            isRead.classList.add('not-active')
        }
    }
}

const updateGrid = () => {
    content.innerHTML = ''
    renderCards()
}

const toggleRead = (book) => {
    const title = book.target.parentNode.parentNode.firstChild.innerHTML
    const test = myLibrary.find((book) => book.title === title)

    if (test.isRead === true) {
        test.isRead = false
    } else {
        test.isRead = true
    }

    updateGrid()
}

const removeCard = (book) => {
    const title = book.target.parentNode.parentNode.firstChild.innerHTML
    let test = myLibrary.filter((book) => book.title !== title)
    myLibrary = test
    updateGrid()
}

const renderForm = () => {
    content.innerHTML = ''

    const form = document.createElement('form')
    form.id = 'form'
    form.name = 'form'

    const titleDiv = document.createElement('div')
    titleDiv.id = 'titleDiv'
    const inputDiv = document.createElement('div')
    inputDiv.id = 'inputDiv'
    const btnDiv = document.createElement('div')
    btnDiv.id = 'btnDiv'

    const formTitle = document.createElement('h1')
    formTitle.classList.add('form-title')
    formTitle.textContent = 'Add a New Book'

    const closeBtn = document.createElement('button')
    closeBtn.id = 'closeBtn'
    closeBtn.innerHTML = `<span class="material-symbols-outlined">close</span>`

    const title = document.createElement('input')
    title.type = 'text'
    title.id = 'title'
    const titleLabel = document.createElement('label')
    titleLabel.for ='title'
    titleLabel.textContent = 'Title:'

    const author = document.createElement('input')
    author.type = 'text'
    author.id = 'author'
    const authorLabel = document.createElement('label')
    authorLabel.for ='author'
    authorLabel.textContent = 'Author:'

    const pages = document.createElement('input')
    pages.type = 'number'
    pages.id = 'pages'
    const pagesLabel = document.createElement('label')
    pagesLabel.for = 'pages'
    pagesLabel.textContent = 'Pages:'

    const isRead = document.createElement('select')
    isRead.id = 'isRead'
    const isReadLabel = document.createElement('label')
    isReadLabel.for = 'isRead'
    isReadLabel.textContent = 'Status?'
    const read = document.createElement('option')
    read.textContent = 'Read'
    read.value = true

    const notRead = document.createElement('option')
    notRead.textContent = 'Not Read'
    notRead.value = false

    const addBtn = document.createElement('button')
    addBtn.id = 'addBtn'
    addBtn.textContent = 'Add Book'

    titleDiv.appendChild(formTitle)
    titleDiv.appendChild(closeBtn)
    isRead.appendChild(read)
    isRead.appendChild(notRead)

    inputDiv.appendChild(titleLabel)
    inputDiv.appendChild(title)
    inputDiv.appendChild(authorLabel)
    inputDiv.appendChild(author)
    inputDiv.appendChild(pagesLabel)
    inputDiv.appendChild(pages)
    inputDiv.appendChild(isReadLabel)
    inputDiv.appendChild(isRead)
    btnDiv.appendChild(addBtn)

    form.appendChild(titleDiv)
    form.appendChild(inputDiv)
    form.appendChild(btnDiv)

    content.appendChild(form)

    closeBtn.onclick = closeForm
    addBtn.onclick = addBook
}

const closeForm = (e) => {
    const form = document.forms.form
    form.reset()
    e.preventDefault()
    content.innerHTML = ''
    updateGrid()
}

const addBook = (e) => {
    e.preventDefault()
    const form = document.forms.form
    const title = form.elements.title.value
    const author = form.elements.author.value
    const pages = form.elements.pages.value
    const isRead = form.elements.isRead.value
    const bool = (isRead === 'true')
    
    const book = bookFactory(title, author, pages, bool)
    myLibrary.push(book)
    updateGrid()
}

loginBtn.addEventListener('click', function() {
    alert('COMING SOON!')
})

newBtn.onclick = renderForm

renderCards()