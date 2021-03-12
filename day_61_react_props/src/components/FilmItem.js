const FilmItem = (props) => {
    console.log(props)
    return (
        <figure>
            <img src={props.imgUrl} alt="" />
            <figcaption>
                <h2>{props.filmTitle}</h2>
                <h2>{props.filmYear}</h2>
                <h2>{props.filmDirector}</h2>
            </figcaption>
        </figure>
    );
}

export default FilmItem;