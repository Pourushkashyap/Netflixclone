import { useDispatch } from "react-redux";
import { addpopularmoive } from "../util/moiveslice";
import { API_OPTIONS } from '../util/constant'
import { useEffect } from "react";
const usepopularmoive = () =>{
    const disptach = useDispatch();

  const getpopularmoive =async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
     const json = await data.json();
    //  console.log(json.results)
     disptach(addpopularmoive(json.results))
  }

  useEffect(() =>{
    getpopularmoive();
  },[])
}

export default usepopularmoive