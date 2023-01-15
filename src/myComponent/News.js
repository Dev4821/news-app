import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
 

export class News extends Component {
  articles = []
    constructor()
    {
        super();
        this.state={
            articles : this.articles,
            loading: false
        }
    }
    async componentDidMount()
    {
       let url="https://newsapi.org/v2/top-headlines?country=In&apiKey=0516ff4fe6e44803b32e7e321ccfd96f";
       let data =await fetch(url);
       let parsedData= await data.json()
       this.setState({articles:parsedData.articles})

    }
  render() {
    return (
      <div className='container my-2'>
        <h2>Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            
          return <div className="col-md-4" key={element.url} >
           <NewsComponent  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div> 
        })}
            
        </div>
      
      </div>
    )
  }
}

export default News
