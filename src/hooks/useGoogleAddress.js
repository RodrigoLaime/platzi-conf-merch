/* import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = address => {
  const [map, setMap] = useState({});

  // const API = `http://api.positionstack.com/v1/forward?access_key=face9479005f2b0dc03a14e90b544121&query=${address}`
  const API = `http://api.positionstack.com/v1/forward? access_key=face9479005f2b0dc03a14e90b544121&query=1600PennsylvaniaAveNW,WashingtonDC`

  useEffect(async () => {
    const response = await axios(API);

    setMap(response.data[0])
  }, []);
  return map;
}

export default useGoogleAddress; */