import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);


    useEffect(()=>{
        fetch(url)
        .then(res => {
            if (!res.ok){
                throw Error('could not fetch the data');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setError(null);
            setIsPending(false);
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        })  
    },[url]);

    return {data, isPending, error}
}

export default useFetch