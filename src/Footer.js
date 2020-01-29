import React from 'react'

function Footer(props) {
    console.log(props)
return(
<div className="footer">
    <button onClick = {props.prev}> &lt; Previous </button>
    <button className='left'  onClick = {props.next}>Next &gt;</button>
</div>
)
}

export default Footer

