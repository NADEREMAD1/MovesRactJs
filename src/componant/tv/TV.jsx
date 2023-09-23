import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../context/ContextProvider'
export default function Tv() {
  let {increaseCount,decreaseCount,inputvalue, setSerch} = useContext(context)

  const [ TV, setTV ] = useState( null )
  const [  ] = useState("")
  let showData = inputvalue ? "search" : "discover"
  
   async function getDataApi() {
     let { data } = await axios.get( `https://api.themoviedb.org/3/${ showData }/tv?api_key=50b65cc0f1ad15f7f1b5959f0e732ca7`,
       {
         params: {
           query: inputvalue
         }
       }
     )
     setTV( data.results );
  }
  
  useEffect( () => {
   getDataApi()
  }
    , [inputvalue])
  return (
    <>
      { TV ? <div className="container text-center pt-5 ">
          <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 m-auto"> 
            <h1>Trinding</h1>
            <h2>TV</h2>
            <h6>To wath Now</h6>
            </div>

            { TV.map( ( x, index ) =>
               <div className="col-lg-3 col-md-4 col-sm-6" key={index} >
                <div className=" p-1">
                  <div className="div-img-class ">
                  <div className="father">
            <div className="son">
            </div>
        </div>
        <div className="img-con w-100">
        <img className='w-100 rounded-5' src={ "https://image.tmdb.org/t/p/w500" + x.poster_path } alt="" />
            <div className="layer">
            <div className=' p-5 '>
            <button className='btn btn-danger m-auto mb-5 w-75  ' onClick={increaseCount}>Add To Wathc</button>      
              <button className='btn btn-danger m-auto w-50 d-flex' onClick={decreaseCount}>Remove</button>        
                  </div>
            </div>
        </div>
                  </div>
                  <h4 >{ x.name }</h4>
                  <h6>{ x.release_date }</h6>
                
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
