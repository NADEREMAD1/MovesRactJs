import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../context/ContextProvider'

export default function Eat() {
  let {increaseCount,decreaseCount,inputvalue, setSerch} = useContext(context)

  const [ Eat, setEat ] = useState( [] )
  const [  ] = useState("")
  

  
  let showData = inputvalue ? "search" : ""
   async function getDataApi() {
     let { data } = await axios.get( `https://forkify-api.herokuapp.com/api/search?q=chili`,
       {
         params: {
         query:inputvalue
       }
     }
     )

     setEat( data.recipes);
  }
  
  useEffect( () => {
   getDataApi()
  }
    , [inputvalue])
  return (
    <>
      { Eat ?
        <div className="container text-center pt-5 ">
          <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 m-auto"> 
            <h1>Trinding</h1>
            <h2>Eat</h2>
              <h6>To wath Now</h6>
            <h6>{inputvalue}</h6>
              
            </div>
            { Eat.filter((ele)=>ele.image_url !==null).map( ( x, index ) =>
              <div className="col-lg-3 col-md-4 col-sm-6" key={ index } >
                <div className=" p-2">
                <div className="div-img-class ">
                  <div className="father">
            <div className="son">
            </div>
        </div>
        <div className="img-con w-100">
  <img className='w-100 rounded-5 bg-center' src={ x.image_url } alt="" />
  <div className="layer">
            <div className=' p-5 '>
            <button className='btn btn-danger m-auto mb-5 w-75  ' onClick={increaseCount}>Add To Wathc</button>      
              <button className='btn btn-danger m-auto w-50 d-flex' onClick={decreaseCount}>Remove</button>     
                  </div>
            </div>
        </div>
                  </div>
                  <h4>{ x.publisher }</h4>
                  <h5>{ x.title }</h5>
                  <div className='d-flex p-4'>
                  </div>
              </div>
            </div>
           )}
          </div>
      </div> :<div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="lds-hourglass"></div>
      </div>}
      </>
  )
}

