import React from 'react'
import imgOne from './1.jpg'
import imgTow from './2.jpg'
import imgthre from './4.jpg'
import contOne from './img/c-1.png'
import contTow from './img/c-2.png'
import contFourr from './img/c-4.png'
import contfive from './img/c-3.png'
export default function Home() {
return (
<>
  <div className='contanier w-100  col-lg-3 col-md-4 col-sm-6'>
<div id="carouselExampleDark" className="carousel carousel-dark slide">
<div className="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button"className='bg-info f-5' data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button className='bg-info f-5' type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
<div className="carousel-item active" data-bs-interval="10000">
  <img src={imgOne} className="d-block w-100 vh-100  object-fit-fill " alt="..."/>
  
</div>
<div className="carousel-item" data-bs-interval="2000">
  <img src={imgTow} className="d-block w-100 vh-100 object-fit-fill  " alt="..."/>
  
</div>
<div className="carousel-item">
  <img src={imgthre} className="d-block w-100 vh-100 object-fit-fill " alt="..."/>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
  </div>
  <div className='container-fitt vh-100 col-lg-3 col-md-4 col-sm-6 said_bar p-1'>
    <div className="d-flex w-100  w-100  p-3 mt-1"> 
      <a href="home" className='d-flex text-decoration-none '>
        <i className="fa-solid fa-house fs-5 me-2 text-white"></i>
        <h4 className=' fw-bold ms-2 text-white '>Home Page</h4>
      </a>
    </div>
          <div className="d-flex w-100  p-3 mt-1"> 
      <a href="move" className='d-flex text-decoration-none'>
        <i className="fa-solid fa-video fs-5 text-warning me-2" ></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>Move</h4>
      </a>
    </div>
          <div className="d-flex w-100  p-3 mt-1"> 
      <a href="tv" className='d-flex text-decoration-none'>
    <i className="fa-solid fa-play fs-5 text-warning me-2"></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>series</h4>
      </a>
    </div>
          <div className="d-flex w-100  p-3 mt-1"> 
      <a href="movi" className='d-flex text-decoration-none'>
        <i className="fa-brands fa-youtube fs-5 text-warning me-2" ></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>Anime</h4>
      </a>
    </div>
          <div className="d-flex w-100  p-3 mt-1"> 
      <a href="tv" className='d-flex text-decoration-none'>
        <i className="fa-solid fa-film fs-5  text-warning me-2" ></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>cartoon</h4>
      </a>
    </div>
        <div className="d-flex w-100  bp-3 mt-1"> 
      <a href="tv" className='d-flex text-decoration-none'>
        <i className="fa-solid fa-tv text-warning me-2 ms-3  fs-5 " ></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>Freestyle wrestling</h4>
      </a>
    </div>
    <div className="d-flex w-100  p-3 mt-1"> 
      <a href="tv" className='d-flex text-decoration-none'>
        <i className="fa-solid fa-tower-broadcast fs-5  text-warning me-2" ></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>TV Shows</h4>
      </a>
      </div>
          <div className="d-flex w-100  p-3 mt-1"> 
      <a href="tv" className='d-flex text-decoration-none'>
        <i className="fa-brands fa-facebook fa-beat fs-5  text-warning me-2" ></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>FaceBook</h4>
      </a>
      </div>
          <div className="d-flex w-100  p-3 mt-1"> 
      <a href="tv" className='d-flex text-decoration-none'>
        <i className="fa-brands fa-linkedin fa-beat  fs-5  text-warning me-2" ></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>FaceBook</h4>
      </a>
      </div>
          <div className="d-flex w-100  p-3 mt-1"> 
      <a href="tv" className='d-flex text-decoration-none'>
        <i className="fa-brands fa-twitter fa-beat fs-5  text-warning me-2" ></i>
        <h4 className='fs-5 fw-bold ms-2 text-white '>FaceBook</h4>
      </a>
    </div>
    </div>
  </div>
  <div className="container-fluid w-100 d-flex col-lg-3 col-md-4 col-sm-6 contntt">
    <div className="d-flex w-100 p-3 ">
      <div className='col content'>
        <div className='con-text'>
        <h2>
        Watch everywhere
        </h2>
        <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus animi ut mollitia debitis consequatur enim officiis nam, itaque vitae quisquam quam. Provident harum excepturi officia magni, porro facere iure aspernatur?              </p>
          </div>
      </div>
      <div className='col content'>
        <img src={contOne} className="img_contne" alt='' />

      </div>
</div>
  </div>
  <hr className='span-content' />
  <div className="container-fluid w-100 col-lg-3 col-md-4 col-sm-6 d-flex contntt-tow">
    <div className="d-flex w-100 p-3 ">
      <div className='col content'>
        <img src={contTow} className="img_contne" alt='' />
      </div>
        <div className='col content'>
        <div className='con-text'>
        <h2>
        Watch everywhere
        </h2>
        <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum eaque culpa autem perferendis sint tempora, dicta veritatis architecto aperiam consequatur saepe quo minus tenetur eveniet accusamus mollitia, earum ipsum nam.              </p>
          </div>
      </div>
</div>
  </div>
  <div className="container-fluid w-100 col-lg-3 col-md-4 col-sm-6 d-flex contntt-t">
    <div className="d-flex w-100 p-3 ">
      <div className='col content'>
        <div className='con-text'>
        <h2>
        Watch everywhere
        </h2>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis reprehenderit voluptate officiis laboriosam, ullam tenetur dolorem nihil porro ut ratione deserunt? Est, tempora animi non explicabo eos nihil saepe.              </p>
          </div>
      </div>
      <div className='col content'>
        <img src={contFourr} className="img_contne" alt='' />

      </div>
</div>
  </div>
  <div className="container-fluid w-100 col-lg-3 col-md-4 col-sm-6 d-flex contntt-foor">
    <div className="d-flex w-100 p-3 ">
      <div className='col content'>
        <img src={contfive} className="img_contne" alt='' />
      </div>
        <div className='col content'>
        <div className='con-text'>
        <h2>
        Watch everywhere
        </h2>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem tenetur amet molestiae temporibus vero expedita rem cum, voluptatum eligendi, sed ducimus enim rerum, veniam asperiores adipisci vel nobis autem!              </p>
          </div>
      </div>
</div>
    </div>
</>
)
}