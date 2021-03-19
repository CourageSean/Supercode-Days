import { Link, useParams, useHistory } from "react-router-dom";

import data from './data/data'
const BlogDetails = () => {
    let { blog } = useParams();
    const history = useHistory();
    console.log(history)
    console.log(blog)
    let blogItem = data.filter(elt => elt.id.toString() === blog.toString())
    console.log(blogItem)
    return (
        <section>
            <div>
                <Link to="/blogs">Go back</Link>
            </div>
            <div>
                <button onClick={() => history.goBack()}>Go back</button>
            </div>
            blog details
            <figure>
                <img src={blogItem[0].img_url} alt="" />
                <figcaption>
                    <h1>{blogItem[0].author}</h1>
                    <h1>{blogItem[0].title}</h1>
                    <p>{blogItem[0].description}</p>
                    <h3>{blogItem[0].published_date}</h3>
                </figcaption>
            </figure>
        </section>
    );
}

export default BlogDetails;