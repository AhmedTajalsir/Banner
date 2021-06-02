import React from 'react'
import './Banner.css'
function Banner() {
    return (
        
            <div className="banner"
                    style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80")`,  //  https://image.tmdb.org/t/p/original/
            backgroundPosition: "center center",
        }}>
          <div className="space"/>
            <div className="banner__fadeBottom"/>
            
        </div>
        
    )
}

export default Banner
