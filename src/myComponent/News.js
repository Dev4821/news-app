import React ,{useEffect,useState}from 'react'
import NewsComponent from './NewsComponent'
 

const News= ()=> {
  const[articles,setArticles]=useState([])

  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
    
  const updateNews=async()=>
    {
       const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=0516ff4fe6e44803b32e7e321ccfd96f&page=1&pageSize=9";
       let data =await fetch(url);
       let parsedData= await data.json()
       setArticles(parsedData.articles)
       setTotalResults(parsedData.totalResults)
       

    }
    useEffect(()=>{updateNews();},[])
   const previousClick= async()=>{
       let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=0516ff4fe6e44803b32e7e321ccfd96f&page=${page+1}&pageSize=9`;
       let data =await fetch(url);
       let parsedData= await data.json()
       setArticles(parsedData.articles)
       setPage(page-1)
      

    }
   const nextClick= async()=>{
      if( page+1 > Math.ceil(totalResults/9))
      {

      }
      else{
       let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=0516ff4fe6e44803b32e7e321ccfd96f&page=${page+1}&pageSize=9`;
       let data =await fetch(url);
       let parsedData= await data.json()
       
       setArticles(parsedData.articles)
       setPage(page+1)
        
        
        }
    }
 
    return (
      <div className='container my-2'>
        <h2>Top Headlines</h2>
        
        <div className="row">
        {articles.map((element)=>{
            
          return <div className="col-md-4" key={element.url} >
           <NewsComponent  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div> 
        })}
            
        </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button disabled={page<=1} className="btn btn-sm btn-dark me-md-2" onClick={previousClick} type="button">&larr; previous</button>
            <button className="btn btn-sm btn-dark" onClick={nextClick} type="button">next &rarr;</button>
       </div>
      
      </div>
    )
  }


export default News
