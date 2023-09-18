import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: "dummy data", author: "khaled", id: 1 },
        { title: 'Welcome Party', body: "dummy data", author: "khaled", id: 2 },
        { title: 'web dev tips', body: "dummy data", author: "fattah", id: 3 },
    ]);

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blogs => blogs.id !== id);
    setBlogs(newBlogs);
}

useEffect(() => {
    console.log("useEffect run");
    console.log(blogs)
});

    return (
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs" handleDelete = {handleDelete} />
            <BlogList blogs = {blogs.filter((blog) => blog.author === "khaled")} title="Khaled's blogs" />

        </div>
    );
}
 
export default Home;