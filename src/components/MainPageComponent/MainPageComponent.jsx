import React, { useState, useCallback } from 'react';
import './MainPageComponent.css';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaEye, FaHeart, FaRegHeart, FaPinterest, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import { LiaInstagram } from 'react-icons/lia';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imgsri from '../img/imgsri.jpg';
import dribbble from '../img/dribbble.png';
import initialImages from '../initialImages/initialImages';
import debounce from 'lodash.debounce';

const MainPageComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Discover');
  const [images, setImages] = useState(initialImages);
  const [likedImages, setLikedImages] = useState({});

  const filteredImages = images.filter((image) => {
    const matchesCategory = selectedCategory === 'Discover' || (selectedCategory === 'Popular' && image.likes > 600) ||image.category === selectedCategory;
    const matchesSearchQuery = image.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               image.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearchQuery ;
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

  const debouncedSearch = useCallback(debounce((query) => {
    if (query) {
      toast.success('Search successful');
    }
  }, 500), []);  // 500ms debounce delay

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <div>
      <ToastContainer />
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
          <a href='#'>Courses <RiArrowDropDownLine /></a>
          <div className='navigation-content'>
            <a href='#'>UX Diploma</a>
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
          onChange={handleSearch}
        />
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
            <option value='Discover'>Popular</option>
            <option value='Mobile'>Following</option>
            <option value='Print'>New & Noteworthy</option>
          </select>
        </div>
        <div className='below-menu'>
          {['Discover', 'Animation', 'Branding', 'Illustration', 'Mobile', 'Print', 'product Design', 'Typography', 'Web Design'].map((category) => (
            <div className='navigation' key={category}>
              <a href='#' onClick={() => handleCategoryChange(category)}>
                {category}
              </a>
            </div>
          ))}
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
                {likedImages[image.id] ? <FaHeart color='red' /> : <FaRegHeart />}
              </p>
              <div className='count'>
                <p>{image.likes}</p>
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
          <a href='#'>Web Design</a>
        </div>
        <LiaInstagram />
        <FaFacebookSquare />
        <FaTwitter />
        <FaPinterest />
      </div>
    </div>
  );
}

export default MainPageComponent;
