import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { tittle, descr, imageurl, newsurl, author, publishedAt,name } = this.props;
    return (
      <div>
        <div className="container">
          <div className="card" style={{ width: "18rem" }}>
            <img
              style={{ height: "180px" }}
              src={
                !imageurl
                  ? "https://image.cnbcfm.com/api/v1/image/106809553-16076284502020-11-24t225936z_933846595_rc2y9k98261o_rtrmadp_0_usa-stocks.jpeg?v=1663761088&w=1920&h=1080"
                  : imageurl
              }
              className="card-img-top"
              alt="ERROR"
            />
            <div className="card-body ">
              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'87%'}}>
                {name}
                <span className="visually-hidden">unread messages</span>
              </span>
              <h5 className="card-title">{tittle}</h5>
              <p className="card-text">{descr}</p>
              <p className="card-text ">
                <small className=" text-danger">
                  by {!author ? "unknown" : author} on{" "}
                  {new Date(publishedAt).toGMTString()}{" "}
                </small>
              </p>
              <a
                href={newsurl}
                rel="noreferrer"
                target="_blank"
                className="btn btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
