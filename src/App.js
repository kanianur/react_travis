import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Trending from './Trending_stories/Trending.js';
import Headline from './Headline_news/Headline.js'

import axios from "axios";

const apiKey = "85629c70889243ffbf675183d1b5c99a";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "everything?&apiKey=" +apiKey+"&q=science&pageSize=10&page=1"
const urlTrending = baseUrl + "top-headlines?country=us&apiKey=" +apiKey+"&category=science&pageSize=10&page=1"

class App extends Component {
  state = {
    listTopNews :[],
    listTrendings :[]
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response){
        console.log(response.data.articles);
        self.setState({listTopNews:response.data.articles})
      })
      axios
      .get(urlTrending)
      .then(function(response){
        console.log(response.data.articles);
        self.setState({listTrendings: response.data.articles})
      })
  };
  render() {
    const listTopNews = this.state.listTopNews;
    const listTrendings = this.state.listTrendings;
    return (
      <div className="App">
        <Header/>
        <div className="wrapper">
          <div className="container">
            <div className = "section-row">
              <div className="row">
                <div className="col-md-4">
                <p className="judul-trending"><strong>TRENDING STORIES</strong></p>
                {listTrendings.map((item,number)=>{
                  return <Trending key={number} number={(number+1).toString()} title={item.title} url ={item.url}/>
                })}
                </div>
                <div className="col-md-8">
                {listTopNews.map((item, number) => {
                  const src_img = item.urlToImage === null ? "" : item.urlToImage;
                  const content = item.urlToImage !== null ? item.content : "";
                  return <Headline key={number} title={item.title} img={src_img} content={content} url ={item.url}/>;
                })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
