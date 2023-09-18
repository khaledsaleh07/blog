import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: "dummy data", author: "khaled", id: 1 },
        { title: 'Welcome Party', body: "dummy data", author: "khaled", id: 2 },
        { title: 'web dev tips', body: "dummy data", author: "fattah", id: 3 },
    ]);

const [name, setName] = useState('khaled');

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blogs => blogs.id !== id);
    setBlogs(newBlogs);
}

useEffect(() => {
    console.log("useEffect run");
    console.log(name);
    console.log(blogs)
}, [name]);

    return (
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs" handleDelete = {handleDelete} />
            <button onClick = {() => setName('fattah')} >Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;