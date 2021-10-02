import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        This is NewsApi channel
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myNews api"
              descreption="This is the first news "
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="myNews api"
              descreption="This is the first news "
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="myNews api"
              descreption="This is the first news "
            />
          </div>
        </div>
      </div>
    );
  }
}
