import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export default class News extends Component {
  static defaultProps={
    
    pageSize:9,
    category:'general',
  }
  static propTypes={
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalise =(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props)
  {
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title=`${this.capitalise(this.props.category)}-News`;
    
  }
  async updateNews(){
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=670d8d02a9d94ad4b7cf8eed9514e781&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data=await fetch(url);
    this.props.setProgress(30);
    let parseddata=await data.json();
    // console.log(parseddata);
    this.setState({
      articles:parseddata.articles,
      totalResults:parseddata.totalResults,
      loading:false,
      // page:this.page+1
    });
    
    this.props.setProgress(100);
  }
  async componentDidMount()
  {
    // let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=670d8d02a9d94ad4b7cf8eed9514e781&page=1&pageSize=${this.props.pageSize}`
    // let data=await fetch(url);
    // let parseddata=await data.json();
    // // console.log(parseddata);
    // this.setState({
    //   articles:parseddata.articles,
    //   totalResults:parseddata.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }
  handlePrev=async()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=670d8d02a9d94ad4b7cf8eed9514e781&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    // this.setState({loading:true})
    // let data=await fetch(url);
    // let parseddata=await data.json();
    // // console.log(parseddata);
    // this.setState({
    //   articles:parseddata.articles,
    //   page:this.state.page-1,
    //   loading:false
    // })
   await  this.setState({
      page:this.state.page-1,
      // loading:false,
    })
    this.updateNews();

  }
  handleNext=async()=>
  {
      // if(!(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)))
      // {
      //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=670d8d02a9d94ad4b7cf8eed9514e781&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      //   this.setState({loading:true})
      //   let data=await fetch(url);
      //   let parseddata=await data.json();
      //   console.log(parseddata);
      //   this.setState({
      //     articles:parseddata.articles,
      //     page:this.state.page+1,
      //     loading:false
      //   })
      // }
      await this.setState({
        page:this.state.page+1,
        // loading:false,
      })
      this.updateNews();    
  }
  render() {
    return (
      <div className="container my-4">
        <div className="text-center">
          <h1 >NEWS-Top {this.capitalise(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner/>}

        </div>
        <div className="row my-3">
          { this.state.articles.map((element)=>{
           return <div className="col-md-4 my-3" key={element.url}>
          <NewsItem tittle={element.title? element.title.slice(0,40):""} descr={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} name={element.source.name}/>
          </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
              <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr;Previous </button>
              <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
              </div>
      </div>
    
    );
  }
}
