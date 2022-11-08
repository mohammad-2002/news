import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,desc,image,newsUrl,author,date,source} = this.props;

    return (
        <div className="card my-4">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0',

          }}>
    <span className="badge rounded-pill bg-danger">{source} </span>

          </div>
        <img src={image} style={{height:'200px'}} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className='card-text text-muted'>By {author} - {new Date(date).toGMTString()}</p>
          <p className="card-text">{desc}...</p>
          <a target="_blank" rel="noreferrer" href={newsUrl}  className="btn btn-primary" >Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem