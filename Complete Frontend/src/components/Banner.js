import React from 'react'
import Cards from './Cards'
import '../pages/Homepage.css';
import './Cards.css'
import Background2 from '../Images/bebu.jpeg'

const Banner = () => {
  const dummy = [
    {
      id: '1',
      image: "https://i.pinimg.com/564x/65/b7/43/65b743cb3fcf0e32690826bfefc6a63c.jpg",
      image1: "https://i.pinimg.com/564x/d7/3c/dd/d73cddaa9de481a7e4bb5aac90157ca7.jpg",
      title: "AI Enhancer!",
      des: "Fix blurry, poor and low-quality old pictures and bring it to clarity."
    },
    {
      id: '2',
      image: "https://i.pinimg.com/564x/76/96/2b/76962b87020b666498b9406af5ee2315.jpg",
      image1: "https://i.pinimg.com/564x/aa/88/af/aa88afa4ab58b6804622c2b9669b55f8.jpg",
      title: "AI Colorize!",
      des: "Colorize black and white pictures automatically and for free."
    },
    {
      id: '3',
      image: "https://i.pinimg.com/564x/f5/17/6c/f5176c4db7c5a94e78f8405d3de9099b.jpg",
      image1: "",
      title: "AI Retouch!",
      des: "Retouch old and blurry portrait photos and make face look better."
    },
    {
      id: '4',
      image: "https://i.pinimg.com/564x/26/76/c4/2676c4e0930aa54bf6f7a74d41f8b538.jpg",
      image1: "",
      title: "AI Repair!",
      des: "Repair the damaged and scratched old pictures in one click!"
    }
  ];
  return (
    <div>
      <div className='sub-container1' >
        <div className='image-back' style={{ backgroundImage: `url(${Background2})` }}>
          <div className='inner-image-back'> <h3>Image Colorizer</h3>
            <div className='title'>
              <h1>We use AI technology to restore old photos automatically</h1></div>
            <div className='cards'>
              {dummy.map((user,i) => (
                <Cards
                key={i}
                  id={user.id}
                  image={user.image}
                  title={user.title}
                  des={user.des}
                >
                </Cards>

              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
