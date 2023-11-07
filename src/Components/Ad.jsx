import React from 'react'
import adimg from '../adimg.svg'

function Ad({adflag}){
    return(
        <div>
            {adflag && <img src={adimg} alt='adimg' style={{width: "100%"}} />}
        </div>
    )
}

export default Ad