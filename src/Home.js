import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: "dummy data", author: "khaled", id: 1 },
        { title: 'Welcome Party', body: "dummy data", author: "kareen", id: 2 },
        { title: 'web dev tips', body: "dummy data", author: "fattah", id: 3 },
    ]);

    return (
        <div className="home">
            { blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author} </p>
                </div>
            )) }
        </div>
    );
}
 
export default Home;