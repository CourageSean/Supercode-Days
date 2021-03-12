import FilmItem from "./FilmItem"

const FilmList = () => {
    return (
        <div>
            <h1>MY 3 FAVOURITES MOVIES <br />
                OF ALL  TIME
            </h1>
            <section className="grid">
                <FilmItem
                    imgUrl={'https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg'}
                    filmTitle={'The Godfather'}
                    filmYear={1972}
                    filmDirector={'Francis Ford Coppola'}
                />
                <FilmItem
                    imgUrl={'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'}
                    filmTitle={'The Godfather part 2'}
                    filmYear={1974}
                    filmDirector={'Francis Ford Coppola'}
                />
                <FilmItem
                    imgUrl={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTutYKYPLrJojIHn6LHv5fpw-uQKFW4KUVwjMQgA5WNy4fyCYTj'}
                    filmTitle={'The Godfather part 3'}
                    filmYear={1990}
                    filmDirector={'Francis Ford Coppola'}
                />
            </section>
        </div>
    );
}

export default FilmList;