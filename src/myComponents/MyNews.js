import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class MyNews extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 10,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3d0ee53683ba4c3b9b6bc8b42d1bf0a6&page=1&pageSize=10`;
    let url = `https://gnews.io/api/v4/top-headlines?token=794b3f88c8dd2fb29fb0e3ad7c7d5348&lang=en&apiKey=794b3f88c8dd2fb29fb0e3ad7c7d5348

    `
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=3d0ee53683ba4c3b9b6bc8b42d1bf0a6&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(data);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log(this.state.page);
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=3d0ee53683ba4c3b9b6bc8b42d1bf0a6&page=${
      this.state.page + 1
    }&pageSize=10`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(data);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=3d0ee53683ba4c3b9b6bc8b42d1bf0a6&page=${
      this.state.page + 1
    }&pageSize=10`;
    let data = await fetch(url);
    console.log(data);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center pt-5 mt-5 my-3">
          Top {this.props.category} Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-4">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-lg-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      desc={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      image={element.image}
                      newsUrl={element.sourceurl}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /10 ) } className='btn btn-dark'onClick={this.handleNextClick}> Next &rarr;</button>
            </div> */}
      </>
    );
  }
}

export default MyNews;
