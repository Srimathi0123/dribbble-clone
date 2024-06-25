
import im2 from '../img/im2.jpg';
import im3 from '../img/im3.png';
import im4 from '../img/im4.jpg';
import im5 from '../img/im5.png';
import im6 from '../img/im6.jpg';
import im7 from '../img/im7.png';
import im8 from '../img/im8.png';
import im9 from '../img/im9.png';
import im19 from '../img/im19.jpg';
import im20 from '../img/im20.png';
import im21 from '../img/im21.jpg';
import im15 from '../img/im15.png';
import im16 from '../img/im16.jpg';
import im22 from '../img/im22.png';
import im23 from '../img/im23.jpg';
import im24 from '../img/im24.png';
import im25 from '../img/im25.jpg';
import im26 from '../img/im26.jpg';
import im27 from '../img/im27.jpg';
import im28 from '../img/im28.png';
import im29 from '../img/im29.png';
import im30 from '../img/im30.png';
import im31 from '../img/im31.jpg';
import im32 from '../img/im32.png';
import im33 from '../img/im33.png';
import im34 from '../img/im34.png';
import im35 from '../img/im35.png';
import im36 from '../img/im36.png';
import im37 from '../img/im37.png';

import im39 from '../img/im39.jpg';
import im40 from '../img/im40.png';
import im41 from '../img/im41.png';
import im42 from '../img/im42.png';
import im43 from '../img/im43.jpg';
import im44 from '../img/im44.png';
import im45 from '../img/im45.png';
import im46 from '../img/im46.png';
import im47 from '../img/im47.jpg';

const initialImages = [
    { id: 1, src: im2, alt: 'Coffee', name: 'Coffee World', author: 'Abinaya', tags: ['cat', 'milk', 'tea', 'coffee kitty','lets go','animation'], likes: 989, liked: false, views: 9.1, category: 'Animation' },
    { id: 2, src: im3, alt: 'illustration branding', name: 'illustration branding', author: 'rishi', tags: ['illustration branding', 'fancy', 'pink', 'pillow','branding'], likes: 965, liked: false, views: 5.1, category: 'Branding' },
    // { id: 3, src: im4, alt: 'Riverside cabin', name: 'Riverside cabin', author: 'varsha', tags: ['home', 'Riverside cabin', 'black', 'lights','Illustration',], likes: 777, liked: false, views: 8.1, category: 'Illustration' },
    { id: 4, src: im5, alt: 'Mobile UI', name: 'mobile UI', author: 'Pradeepasri', tags: [ 'phone', 'cell', 'mobile ui'], likes: 997, liked: false, views: 9.1, category: 'Mobile' },
    { id: 5, src: im6, alt: 'Travelers Campionship Merch Illustration', name: 'Travelers Campionship Merch Illustration', author: 'John rose', tags: ['Travelers Campionship Merch Illustration', 'nature', 'travel', 'ooty'], likes: 100, liked: false, views: 2.1, category: 'Illustration' },
    { id: 6, src: im7, alt: 'flower', name: 'Flower', author: 'pradee', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'Web Design' },
    { id: 7, src: im8, alt: 'Hatch Branding', name: 'Hatch Branding', author: 'Rose marry', tags: ['hatch', 'Hatch Branding'], likes: 880, liked: false, views: 2.1, category: 'Typography' },
    { id: 8, src: im9, alt: 'solar house', name: 'Solar House', author: 'Harry', tags: ['solar', 'solar house', 'house', 'home', 'yellow','product Design'], likes: 87, liked: false, views: 6.0, category: 'product Design' },
    { id: 11, src: im15, alt: 'phone', name: 'Trading App', author: 'Dumble dore', tags: ['phone',  'cell', 'black'], likes: 980, liked: false, views: 2.1, category: 'Mobile' },
    { id: 50, src: im24, alt: 'phone', name: 'Trading App', author: 'Louis clara', tags: ['phone',  'cell', 'white'], likes: 980, liked: false, views: 2.1, category: 'Mobile' },
    
    { id: 13, src: im16, alt: 'psycholo', name: 'Trading App', author: 'Benedict', tags: [  'cell','web design'], likes: 780, liked: false, views: 2.1, category: 'Print' },
    { id: 19, src: im19, alt: 'psycholo', name: 'Print image', author: 'Daphne', tags: [  'cell','web design'], likes: 780, liked: false, views: 2.1, category: 'Print' },
    { id: 20, src: im20, alt: 'psycholo', name: 'Trading App', author: 'Antony', tags: [  'cell','web design'], likes: 780, liked: false, views: 2.1, category: 'Print' },
    { id: 21, src: im21, alt: 'psycholo', name: 'Trading App', author: 'aloisd', tags: [  'cell','web design'], likes: 780, liked: false, views: 2.1, category: 'Print' },
    { id: 22, src: im22, alt: 'illustration branding', name: 'illustration ', author: 'Varsha', tags: ['illustration branding', 'fancy', 'pink', 'pillow','branding'], likes: 965, liked: false, views: 5.1, category: 'illustration' },
    { id: 23, src: im23, alt: 'illustration branding', name: 'illustration branding', author: 'Varsha', tags: ['illustration branding', 'fancy', 'white', 'pillow','branding'], likes: 965, liked: false, views: 5.1, category: 'Illustration' },
    { id: 24, src: im24, alt: 'illustration branding', name: 'illustration branding', author: 'Varsha', tags: ['illustration branding', 'fancy', 'white', 'pillow','branding'], likes: 965, liked: false, views: 5.1, category: 'Branding' },
    { id: 14, src: im8, alt: 'Hatch Branding', name: 'Hatch Branding', author: 'Rose marry', tags: ['hatch', 'Hatch Branding'], likes: 880, liked: false, views: 2.1, category: 'Typography' },
    { id: 15, src: im6, alt: 'Travelers Campionship Merch Illustration', name: 'Travelers Campionship Merch Illustration', author: 'John rose', tags: ['Travelers Campionship Merch Illustration', 'nature', 'travel', 'ooty','illustration'], likes: 100, liked: false, views: 2.1, category: 'Illustration' },
    // { id: 16, src: im3, alt: 'illustration branding', name: 'illustration branding', author: 'Varsha', tags: ['illustration branding', 'fancy', 'pink', 'pillow','branding'], likes: 965, liked: false, views: 5.1, category: 'Branding' },
    { id: 17, src: im15, alt: 'phone', name: 'Trading App', author: 'Dumble dore', tags: ['phone',  'cell', 'black'], likes: 980, liked: false, views: 2.1, category: 'Mobile' },
    { id: 18, src: im15, alt: 'phone', name: 'Trading ', author: 'Dumble dore', tags: ['phone',  'cell', 'black'], likes: 980, liked: false, views: 2.1, category: 'Mobile' },
    { id: 25, src: im25, alt: 'Hatch Branding', name: 'Hatch Branding', author: 'Rose marry', tags: ['hatch', 'Hatch Branding'], likes: 880, liked: false, views: 2.1, category: 'Typography' }, 
     { id: 27, src: im26, alt: 'Hatch Branding', name: 'Hatch Branding', author: 'Rose marry', tags: ['hatch', 'Hatch Branding'], likes: 880, liked: false, views: 2.1, category: 'Typography' },
    { id: 26, src: im27, alt: 'Hatch Branding', name: 'Hatch Branding', author: 'Rose marry', tags: ['hatch', 'Hatch Branding'], likes: 880, liked: false, views: 2.1, category: 'Typography' },
    { id: 28, src: im28, alt: 'flower', name: 'Flower shop Web App', author: 'Jack ron', tags: ['web', 'flower shop web design', 'html', 'css','blue'], likes: 688, liked: false, views: 7.7, category: 'Web Design' },
    { id: 29, src: im29, alt: 'flower', name: 'Flower shop Web App', author: 'Deeps', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'Web Design' },
    { id: 30, src: im30, alt: 'flower', name: 'Flower shop Web App', author: 'thiru', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'Web Design' },
    { id: 31, src: im31, alt: 'Riverside cabin', name: 'Riverside cabin', author: 'Abi', tags: ['home', 'Riverside cabin', 'lights','Illustration',], likes: 777, liked: false, views: 8.1, category: 'Illustration' },
    { id: 32, src: im32, alt: 'Riverside cabin', name: 'Riverside cabin', author: 'Mary Jos', tags: ['home', 'Riverside cabin', 'black', 'lights','Illustration',], likes: 777, liked: false, views: 8.1, category: 'Illustration' },
    { id: 33, src: im33, alt: 'Riverside cabin', name: 'Riverside cabin', author: 'Namitha', tags: ['home', 'Riverside cabin', 'black', 'lights','Illustration',], likes: 777, liked: false, views: 8.1, category: 'Illustration' },
    { id: 34, src: im34, alt: 'Coffee', name: 'Coffee Kitty', author: 'Abinaya', tags: ['cat', 'milk', 'tea', 'coffee kitty','lets go','animation'], likes: 989, liked: false, views: 9.1, category: 'Animation' },
    { id: 35, src: im35, alt: 'Coffee', name: 'Coffee Kitty', author: 'Abinaya', tags: ['cat', 'milk', 'tea', 'coffee kitty','lets go','animation'], likes: 989, liked: false, views: 9.1, category: 'Animation' },
    { id: 36, src: im36, alt: 'Coffee', name: 'Coffee Kitty', author: 'Abinaya', tags: ['cat', 'milk', 'tea', 'coffee kitty','lets go','animation'], likes: 989, liked: false, views: 9.1, category: 'Animation' },
    { id: 37, src: im37, alt: 'Coffee', name: 'Coffee Kitty', author: 'Abinaya', tags: ['cat', 'milk', 'tea', 'coffee kitty','lets go','animation'], likes: 989, liked: false, views: 9.1, category: 'Animation' },
    
    { id: 39, src: im39, alt: 'psycholo', name: 'Print image', author: 'Dumble dore', tags: ['phone',  'cell', 'black','web design'], likes: 780, liked: false, views: 2.1, category: 'Print' },
    { id: 40, src: im40, alt: 'flower', name: 'Flower shop Web App', author: 'Meaw', tags: ['web', 'flower shop web design', 'html', 'css','blue'], likes: 688, liked: false, views: 7.7, category: 'Web Design' },
    { id: 41, src: im41, alt: 'flower', name: 'Flower shop Web App', author: 'Agalya', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'Branding' },
    { id: 42, src: im42, alt: 'flower', name: 'Flower shop Web App', author: 'Mahi', tags: ['web', 'flower shop web design', 'html', 'css','white'], likes: 688, liked: false, views: 7.7, category: '' },
    { id: 43, src: im43, alt: 'flower', name: 'Flower', author: 'Desi', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'product Design' },
    { id: 44, src: im44, alt: 'flower', name: 'Flower shop Web App', author: 'sri', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'product Design' },
    { id: 45, src: im45, alt: 'flower', name: 'Flower shop Web App', author: 'Vithya', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'product Design' },
    // { id: 46, src: im39, alt: 'flower', name: 'Flower shop Web App', author: 'Sendhu', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'product Design' },
    { id: 51, src: im39, alt: 'flower', name: 'Flower shop Web App', author: 'Matlin', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'product Design' },
    
    { id: 46, src: im46, alt: 'flower', name: 'Flower shop Web App', author: 'Dhivya', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'Illustration' },
    { id: 47, src: im47, alt: 'flower', name: 'Flower shop Web App', author: 'Thxmizh', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'Branding' },
    { id: 49, src: im47, alt: 'flower', name: 'Flower shop Web App', author: 'Thxmizh', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'Branding' },
    { id: 48, src: im16, alt: 'psycholo', name: 'Trading App', author: 'Dumble dore', tags: [  'cell', 'white','web design'], likes: 780, liked: false, views: 2.1, category: 'Mobile' },
    { id: 52, src: im39, alt: 'flower', name: 'Flower shop Web App', author: 'Matlin', tags: ['web', 'flower shop web design', 'html', 'css'], likes: 688, liked: false, views: 7.7, category: 'product Design' },
  ];


  export default initialImages;