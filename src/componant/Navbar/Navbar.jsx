import React, { useContext } from 'react'
import imge from './discount.png'
import { context } from '../../context/ContextProvider';

export default function Navbar() {
  let { Count, inputvalue, setSerch } = useContext(context)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 position-fixed w-100 ">
        <div className="container">
          <a className="navbar-brand  " href="/">
            <img className='imge-Nave' src={imge} alt="" />
          </a>
          <div className='container w-25 m-auto'>
            <input className='form-control w-100 m-auto'
            aria-label="Search"
              placeholder='Serche '
               id='klaza'
              type="serch"
               onChange={(e) => setSerch(e.target.value)} />
          </div>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-bg-info"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="navbar-brand  text-white  fs-4 ms-1  fw-semibold lh-sm" href="move">Move</a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand  text-white  fs-4 ms-1  fw-semibold lh-sm" href="tv">Tv</a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand  text-white  fs-4 ms-1  fw-semibold lh-sm" href="eat">Eat</a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand  text-white  fs-4 ms-1  fw-semibold lh-sm m-lg-3" href=" ">
                  <i className="fa-regular fa-moon"></i></a>
              </li>
              <a href="#" className='text-white'>
                <li className="nav-item me-5">
                  <i className="fa-solid fa-heart-circle-check fs-4 ms-1  addCart"></i>
                  <span className='w-25 text-info p-1 fs-4'>{Count}</span>
                </li>
              </a>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
