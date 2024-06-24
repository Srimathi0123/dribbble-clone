import React, { useState } from 'react';
import './MainPageComponent.css';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaEye, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaPinterest } from "react-icons/fa";
import imgsri from '../img/imgsri.jpg';
import im2 from '../img/im2.jpg';
import im3 from '../img/im3.png';
import im4 from '../img/im4.jpg';
import im5 from '../img/im5.png';
import im6 from '../img/im6.jpg';
import im7 from '../img/im7.png';
import im8 from '../img/im8.png';
import im9 from '../img/im9.png';

import im15 from '../img/im15.png';
import im16 from '../img/im16.jpg';
import dribbble from '../img/dribbble.png';
import { LiaInstagram } from 'react-icons/lia';
import { FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';

const initialImages = [
  { id: 1, src: im2, alt: 'Coffee', name: 'Coffee Kitty', author: 'Abinaya', tags: ['cat', 'milk', 'tea', 'coffee kitty','lets go','animation'], likes: 989, liked: false, views: 9.1, category: 'Animation' },
  { id: 2, src: im3, alt: 'illustration branding', name: 'illustration branding', author: 'Varsha', tags: ['illustration branding', 'fancy', 'pink', 'pillow','branding'], likes: 965, liked: false, views: 5.1, category: 'Branding' },
  { id: 3, src: im4, alt: 'Riverside cabin', name: 'Riverside cabin', author: 'Srimathi', tags: ['home', 'Riverside cabin', 'black', 'lights','Illustration',], likes: 777, liked: false, views: 8.1, category: 'Illustration' },
  { id: 4, src: im5, alt: 'Mobile UI', name: 'mobile UI', author: 'Pradeepasri', tags: ['mobile', 'phone', 'cell', 'mobile ui'], likes: 997, liked: false, views: 9.1, category: 'Mobile' },
  { id: 5, src: im6, alt: 'Travelers Campionship Merch Illustration', name: 'Travelers Campionship Merch Illustration', author: 'John rose', tags: ['Travelers Campionship Merch Illustration', 'nature', 'travel', 'ooty'], likes: 100, liked: false, views: 2.1, category: 'Illustration' },
  { id: 6, src: im7, alt: 'flower', name: 'Flower shop Web App', author: 'Jack ron', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'Web Design' },
  { id: 7, src: im8, alt: 'Hatch Branding', name: 'Hatch Branding', author: 'Rose marry', tags: ['hatch', 'Hatch Branding'], likes: 880, liked: false, views: 2.1, category: 'Typography' },
  { id: 8, src: im9, alt: 'solar house', name: 'Solar House', author: 'Harry', tags: ['solar', 'solar house', 'house', 'home', 'yellow','product Design'], likes: 87, liked: false, views: 6.0, category: 'product Design' },
  { id: 11, src: im15, alt: 'phone', name: 'Trading App', author: 'Dumble dore', tags: ['phone', 'mobile', 'cell', 'black'], likes: 980, liked: false, views: 2.1, category: 'Mobile' },
  { id: 12, src: im16, alt: 'psycholo', name: 'Trading App', author: 'Dumble dore', tags: ['phone', 'mobile', 'cell', 'black','web design'], likes: 780, liked: false, views: 2.1, category: 'Print' },
  { id: 13, src: im16, alt: 'psycholo', name: 'Trading App', author: 'Dumble dore', tags: ['phone', 'mobile', 'cell', 'black','web design'], likes: 780, liked: false, views: 2.1, category: 'Print' },
  { id: 14, src: im8, alt: 'Hatch Branding', name: 'Hatch Branding', author: 'Rose marry', tags: ['hatch', 'Hatch Branding'], likes: 880, liked: false, views: 2.1, category: 'Typography' },
  { id: 15, src: im6, alt: 'Travelers Campionship Merch Illustration', name: 'Travelers Campionship Merch Illustration', author: 'John rose', tags: ['Travelers Campionship Merch Illustration', 'nature', 'travel', 'ooty'], likes: 100, liked: false, views: 2.1, category: 'Illustration' },
  { id: 16, src: im3, alt: 'illustration branding', name: 'illustration branding', author: 'Varsha', tags: ['illustration branding', 'fancy', 'pink', 'pillow','branding'], likes: 965, liked: false, views: 5.1, category: 'Branding' },
];

const MainPageComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [images, setImages] = useState(initialImages);
  const [likedImages, setLikedImages] = useState({});
  const [prevLikedImages, setPrevLikedImages] = useState({});
  
  const filteredImages = images.filter((image) => {
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    const matchesSearchQuery = image.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               image.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLikes =  image.likes > 600;

    return matchesCategory && matchesSearchQuery && matchesLikes;
  });

  
  const handleLike = (id) => {
    setLikedImages((prevLikedImages) => ({
      ...prevLikedImages,
      [id]: !prevLikedImages[id],
    }));
    setImages((prevImages) => prevImages.map((image) => {
      if (image.id === id) {
        return { ...image, likes: image.likes + (likedImages[id] ? -1 : 1) };
      }
      return image;
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); 
  };

  return (
    <div>
      <div className='menus'>
        <div className='navigation'>
          <a href='#'>Find designers <RiArrowDropDownLine /></a>
          <div className='navigation-content'>
            <a href='#'>Designers search</a>
            <a href='#'>Post a job</a>
          </div>
          </div>
        <div className='navigation'>
          <a href='#'>Discover</a>
        </div>
        <div className='navigation'>
          <a href='#'>Courses<RiArrowDropDownLine /></a>
          <div className='navigation-content'>
            <a href='#'>
              UX Diploma</a>
            <a href='#'>UI Certificate</a>
          </div>
        </div>
        <div className='navigation'>
          <a href='#'>Jobs</a>
        </div>
        <div className='navigation'>
          <a href='#'>Go Pro</a>
        </div>
       
      </div>
      <div className='dribbble'>
        <img src={dribbble} alt='dribbble' />
      </div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search...'
          className='search-bar'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <CiSearch className='searchbaricon' /> */}
      </div>
      <img src={imgsri} alt='logo' className='logo' />
      <div className='main-page'>
        <div className='drop'>
          <select
            name='subject'
            id='subject'
            className='subject-dropdown'
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value='All'>Popular</option>
            <option value='Mobile'>following</option>
            <option value='Animation'>New & Noteworthy</option>
            
          </select>
        </div>
        <div className='below-menu'>
          <div className='navigation'>
            <a href='#' onClick={() => handleCategoryChange('All')}>
              Discover
            </a>
          </div>
          <div className='navigation'>
            <a href='#' onClick={() => handleCategoryChange('Animation')}>
              Animation
            </a>
          </div>
          <div className='navigation'>
            <a onClick={() => handleCategoryChange('Branding')}>
              Branding
            </a>
          </div>
          <div className='navigation'>
            <a href='#' onClick={() => handleCategoryChange('Illustration')}>
              Illustration
            </a>
          </div>
          <div className='navigation'>
            <a href='#' onClick={() => handleCategoryChange('Mobile')}>
              Mobile
            </a>
          </div>
          <div className='navigation'>
            <a href='#' onClick={() => handleCategoryChange('Print')}>
              Print
            </a>
          </div>
          <div className='navigation'>
            <a href='#' onClick={() => handleCategoryChange('Branding')}>
              Product Images
            </a>
          </div>
          <div className='navigation'>
            <a href='#' onClick={() => handleCategoryChange('Typography')}>
              Typography
            </a>
          </div>
          <div className='navigation'>
            <a  onClick={() => handleCategoryChange('Web Design')}>
              Web design
            </a>
          </div>
        </div>
        <button className='filter'>
          <IoFilterSharp /> Filters
        </button>
      </div>
      <div className='image-gallery'>
        {filteredImages.map(image => (
          <div key={image.id} className='image-container'>
            <img src={image.src} alt={image.alt} />
            <div className='image-name-overlay'>{image.name}</div>
            <div className='image-details'>
              <p className='image-author'>{image.author}</p>
              <p
  className='like-button'
  onClick={() => handleLike(image.id)}
  >
    {likedImages[image.id]? <FaHeart color='red' /> : <FaRegHeart />}
  </p>
  <div className='count'>
  <p> {image.likes}</p>
  </div>
    <p className='view'>
    <div className='icon-view'>
    <FaEye /> 
      </div>
  
  {image.views}k
  </p>
           </div>
          </div>
        ))}         

      </div>      
      <div className='below-menu'>
      <div className='dribbbl'>
        <img src={dribbble} alt='dribbble' />
      </div>
        <div className='navigation'>
          <a href='#'>Discover</a>
        </div>
        <div className='navigation'>
        <Link to='/animation'>Animation</Link>
        </div>
        <div className='navigation'>
          <a href='#'>Branding</a>
        </div>
        <div className='navigation'>
          <a href='#'>Illustration</a>
        </div>
        <div className='navigation'>
          <a href='#'>Mobile</a>
        </div>
        <div className='navigation'>
          <a href='#'>Print</a>
        </div>
        <div className='navigation'>
          <a href='#'>Product Design</a>
        </div>
        <div className='navigation'>
          <a href='#'>Typography</a>
        </div>
        <div className='navigation'>
          <a href='#'>web Design</a>
        </div>
        <LiaInstagram />
        <FaFacebookSquare />
        <FaTwitter />
        <FaPinterest />
        
      </div>
      <div className='social-icons'>
        
        
        
        </div>
      
    </div>
  );
}

export default MainPageComponent;
