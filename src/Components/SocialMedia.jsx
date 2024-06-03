import React from 'react'

const SocialMedia = () => {
  return (
    <div style={{position: "absolute", zIndex: "998", scale: ".7", height: "25rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", right: "1rem", top: "3rem"}}>
        <a href="#"><img style={{height: "2rem", cursor: "pointer"}} src="facebook.png" alt="" /></a>
        <a href="#"><img style={{height: "2rem", cursor: "pointer"}} src="twitter.png" alt="" /></a>
        <a href="#"><img style={{height: "2rem", cursor: "pointer"}} src="video.png" alt="" /></a>
        <div style={{height: '15vh', backgroundColor: "black", width: "2px"}}></div>
        <p style={{color: "black", rotate: '-90deg', marginTop: "2rem"}}>FOLLOW US</p>
    </div>
  )
}

export default SocialMedia