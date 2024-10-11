import { useDispatch } from "react-redux";
import { useEffect} from 'react'
import { API_OPTIONS } from '../util/constant'
import { addtrailervideo } from '../util/moiveslice';




const usemoivetrailer = (moiveid) => {
    const dispatch = useDispatch();
    const getmoivevideo = async () =>{
        const data = await fetch
        ("https://api.themoviedb.org/3/movie/"+moiveid +"/videos?language=en-US", API_OPTIONS)
         const json =await data.json();
         
    
         const filterdata = json.results.filter((video) => video.type == "Trailer");
         const trailer = filterdata.length ? filterdata[0] : json.results[0];
         
        
         dispatch(addtrailervideo(trailer))
       }
    
       useEffect(() =>{
        getmoivevideo();
       },[])
    
}
export default usemoivetrailer