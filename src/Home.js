import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: "dummy data", author: "khaled", id: 1 },
        { title: 'Welcome Party', body: "dummy data", author: "kareen", id: 2 },
        { title: 'web dev tips', body: "dummy data", author: "fattah", id: 3 },
    ]);

    return (
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs" />
        </div>
    );
}
 
export default Home;