import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneNumber= ()=>  {
 const [number, setNumber]= useState("");
    return(
        <PhoneInput
        country={'in'}
        value={number}
        onChange={number => setNumber(number)}
      />
    )

}

export default PhoneNumber;