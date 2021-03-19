import { Link } from "react-router-dom"

const BlogItem = (props) => {
    return (
        <figure>
            <img src={props.img_url} alt="" />
            <figcaption>
                <h1>{props.title}</h1>

                <Link to={`/blogs/${props.id}`}>Read more</Link>
            </figcaption>
        </figure>
    );
}

export default BlogItem;