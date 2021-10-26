import {useEffect, useState} from 'react';

const Home = () => {
   const [blogs, setBlogs] = useState(null);

   useEffect(()=>{
       fetch ( 'http://localhost:8000/blogs')
         .then(res =>{
             return res.json();
         })
         .then(data =>{
             setBlogs(data)
         })
         console.log('use effect ran')
   }, [])
    return ( 
    <div ClassName="home">
        {blogs && blogs.map((blog) => (
         <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
         </div>   
       ))} 
    </div>
    );
}

export default Home;