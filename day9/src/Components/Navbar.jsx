import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Assets/Navbar.css';
import Side from './Side2';

function Navbar() {

  
 
  return (
    <div className='container'>
    <Header/>
    <Side/>
    <div className='appliance'><h1>Choose Your Appliance</h1></div>
    <div>
        <img src="https://www.reliancedigital.in/medias/Samsung-RS74R5101SL-TL-Refrigerators-491539182-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzUwMDd8aW1hZ2UvanBlZ3xpbWFnZXMvaGVmL2g2Yy85MTUxNDc5MjgzNzQyLmpwZ3w3ZDljMzZlYWRiMWQ0MzVlMjM2ZDQwZGVkNjkzN2Y3ZmZjZjI1MWNlZWQ0NjYzNDMzZjUyNDdhODFhMzc3MDNm" alt="Image 1" />
        <img src="https://img.freepik.com/premium-photo/set-contemporary-house-appliances-standing-parquet-floor_613961-331.jpg"   alt="Image 3" />
        <img src="https://www.tanotis.com/cdn/shop/products/1635946551_1669407_800x.jpg?v=1650467402" alt="Image 2" />
        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/vacuum-2048px-1030-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024" alt="Image 3" />
        <img src="https://img.freepik.com/premium-photo/coffee-machine-with-cup-coffee-it_250469-21751.jpg" alt="Image 3" />
        <img src="https://www.lg.com/in/images/water-purifiers/md07557887/gallery/WW145NPW-Water-purifiers-Front-View-Open-D-02.jpg" alt="Image 3" />
        
        
      </div>
    <br/>
    <br/>
    <br/>
    <Footer/>
</div>
   
  );
}

export default Navbar;