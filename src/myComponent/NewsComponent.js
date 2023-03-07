import React from 'react'

const NewsComponent=(props)=> {
  
    let {title,description,imageUrl,newsUrl}=props;
    return (
      <div className='my-3 mx-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://images.puella-magi.net/thumb/2/27/No_Image_Wide.svg/800px-No_Image_Wide.svg.png?20110202071158":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsComponent
