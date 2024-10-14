import { useDispatch } from "react-redux";
import { addupcomingmoive } from "../util/moiveslice";
import { API_OPTIONS } from '../util/constant'
import { useEffect } from "react";
const useupcomingmoive = () =>{
    const disptach = useDispatch();

  const getupcomingmoive =async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
     const json = await data.json();
    //  console.log(json.results)
     disptach(addupcomingmoive(json.results))
  }

  useEffect(() =>{
    getupcomingmoive();
  },[])
}

export default useupcomingmoive