import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios';
import {imageUrl} from '../../constants/constants'

export const RowPost = ({title, isSmall, url}) => {


const [movies, setMovies] = useState([]);



  useEffect(() =>{
    axios.get(url)
      .then( response =>{
        // console.log(response.data);
        setMovies(response.data.results)
      })
  })




  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='posters'>
          {
            movies.map((obj) =>
              <img className={ isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='Post'/>,
            )
          }
        </div>
    </div>
  )
}

