const BookCard = ({title, image, description, characters, clickDetails }) => {
    return (
        <div className="book-card">
            <h1 className="book-title"> {title} </h1>
            <div className="img-box">
                <img src={image} alt={title} />
            </div>

            <h5> {description} </h5>
            <button onClick={() => clickDetails(title, characters)} className="btn">More Details</button>
        </div>
    )
}

export default BookCard