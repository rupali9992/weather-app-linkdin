import React, { useEffect, useState } from 'react';

export default function useFetchData(apipath) {
    console.log(apipath);
    var [data, setdata] = useState([]);
      console.log('custom hook called');
    useEffect(() => {
        fetch(apipath)
            .then(res => res.json())
            .then(ans => {
                console.log(ans);
                setdata(ans)
        })
       
    }, [])
    return data;
}
