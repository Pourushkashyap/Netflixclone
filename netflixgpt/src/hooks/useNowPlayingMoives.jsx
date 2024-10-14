import { useDispatch } from "react-redux";
import { addnowplayingmoives } from "../util/moiveslice";
import { API_OPTIONS } from '../util/constant'
import { useEffect } from "react";
const useNowPlayingMoives = () =>{
    const disptach = useDispatch();

  const getnowplayingmoive =async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
     const json = await data.json();
    //  console.log(json.results)
     disptach(addnowplayingmoives(json.results))
  }

  useEffect(() =>{
    getnowplayingmoive();
  },[])
}

export default useNowPlayingMoives