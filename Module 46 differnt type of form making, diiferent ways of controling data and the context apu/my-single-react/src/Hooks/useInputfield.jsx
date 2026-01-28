import { useState } from "react";


const useInputfield = (defaultValue) => {
   
    const [field,setField] = useState(defaultValue);

    const onchagehandaler = (e)=>{

        setField(e.target.value);

    }

    return [field,onchagehandaler];

};

export default useInputfield;