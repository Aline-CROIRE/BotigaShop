import React from 'react';
import '../styles/blog.css';
import image1 from '../assets/images/image1.webp'
import image2 from '../assets/images/image2.webp'
import image3 from '../assets/images/image3.webp'
import image4 from '../assets/images/image4.webp'
import image5 from '../assets/images/image5.webp'
import image6 from '../assets/images/image6.webp'

const blogPosts = [
  {
    id: 1,
    image:image1,
    title: 'Sed magna dui, dignissim id felis vitae, consectetur',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]'
  },
  {
    id: 2,
    image: image2,
    title: 'Fusce suscipit risus tempor, blandit urna at, laoreet ex',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]'
  },
  {
    id: 3,
    image: image3 ,
    title: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [..]'
  },
  {
    id: 4,
    image: image4 ,
    title: 'Nam pharetra fringilla justo, et commodo lacus molestie ut',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]'
  },
  {
    id: 5,
    image: image5 ,
    title: 'Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [-]'
  },
  {
    id: 6,
    image: image6,
    title: 'Duis lacinia convallis odio, quis efficitur dolor pulvinar nec',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [..]'
  }
];

const Blog = () => {
  return (
    <div>
    <h1 className="blog-title">Blog</h1>
    <div className="blog-container">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <img src={post.image} alt={post.title} />
          <div className="blog-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <a href="#" className="read-more">Read more</a>
          </div>
        </div>
      ))}
    </div>
    </div>
  
  );
};

export default Blog;