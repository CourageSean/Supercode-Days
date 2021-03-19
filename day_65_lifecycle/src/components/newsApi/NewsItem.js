const NewsItem = (props) => {
    return (
        <figure>
            <img src={props.urlToImage} alt="" />
            <figcaption>
                <h1>{props.title}</h1>
                <a href={props.url} target="_blank">Read more</a>
            </figcaption>
        </figure>);
}

export default NewsItem;