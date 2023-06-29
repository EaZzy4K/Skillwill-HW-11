import BookCard from '../components/BookCard.jsx'
import AlchemistImg from '../assets/alchemist.jpg'
import OrwellImg from '../assets/orwell.jpg'

const charStr = toString.characters

const data = [
    {id:1, title: 'The Alchemist', image: AlchemistImg, characters: ['Santiago', ' Thief', ' The Alchemist'], description: 'A cool spiritual book'},
    {id:2, title: '1984', image: OrwellImg, characters: ['Lucas', ' Rodrigo', ' Ushangi'], description: 'haven\'t read. wonderful book'}
]

const BookList = () => {

  function clickDetails(title, charStr) {
    alert(
      `Title: ${title} 
Characters: ${charStr}`)

console.log(
  `Title: ${title} 
Characters: ${charStr}`)
  }

  return (
    <div className='book-list'>
      {data.map((book) => <BookCard key={book.id} title={book.title} image={book.image} characters={book.characters} description={book.description} clickDetails={clickDetails}/>)}
    </div>
  )
}

export default BookList