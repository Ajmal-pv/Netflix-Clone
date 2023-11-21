import React,{useEffect,useState} from 'react'
import './rowPost.css'
import { imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [movies,setMovie]= useState([])
  const[urlId,seturlId]=useState('')
  
useEffect(() => {
  
  axios.get(props.url).then((response)=>{

      console.log(response.data);
      setMovie(response.data.results)

  }
  )

  
}, [])
const opts = {
  height: '390',
  width: '100%',
  playerVars: {

    autoplay: 0,
  },
};
const handleMovie= (id)=>{

axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
  console.log(response.data);
  if(response.data.results.length !==0){
    seturlId(response.data.results[0])
  }else{
    console.log('no trailer');
  }
  
})


}

  return (

    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
          <div className={props.isSmall ? 'smallPosterContainer' : 'posterContainer'}>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            <h4 className='posterTitle'>{obj.title}</h4>
          </div>
            )}


      
            
        </div>
      { urlId && <Youtube videoId={urlId.key} opts={opts} /> }
      
    </div>
  )
}

export default RowPost
