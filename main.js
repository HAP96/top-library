const content = document.getElementById('content')

const bookFactory = (title, author, pages, isRead) => {
    return {title, author, pages, isRead}
}

const book1 = bookFactory('title1', 'author1', 101, true)
const book2 = bookFactory('title2', 'author2', 202, false)
const book3 = bookFactory('title3', 'author3', 303, true)
const book4 = bookFactory('title4', 'author4', 404, false)
const book5 = bookFactory('title5', 'author5', 404, false)
const book6 = bookFactory('title6', 'author6', 404, false)
const book7 = bookFactory('title7', 'author7', 404, false)

myLibrary = []
myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
myLibrary.push(book4)
myLibrary.push(book5)
myLibrary.push(book6)
myLibrary.push(book7)

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

renderCards()