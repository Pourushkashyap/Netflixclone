import { useDispatch } from "react-redux";
import { addtopratedmoive } from "../util/moiveslice";
import { API_OPTIONS } from '../util/constant'
import { useEffect } from "react";
const usetopratedmoive = () =>{
    const disptach = useDispatch();

  const gettopratedmoive =async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
     const json = await data.json();
    //  console.log(json.results)
     disptach(addtopratedmoive(json.results))
  }

  useEffect(() =>{
    gettopratedmoive();
  },[])
}

export default usetopratedmoive