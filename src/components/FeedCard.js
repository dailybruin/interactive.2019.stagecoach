import React from "react";
import { Link } from "react-router-dom";
import "../sass/feedcard.scss";

export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { hash } = window.location;
    if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const slug = id.slice(id.lastIndexOf("#") + 1, id.length)
      console.log(slug);
      const element = document.getElementById(slug);
      if (element) element.scrollIntoView();
    }, 0);
  }
  }
  // props should contain a property 'content'
  /* content has the structure
      {
        category: "image"
        image:
      }
    */

  render() {
    return (
      <div className="FeedCard" id={this.props.content.slug}>
        <div className={"heading row no-gutters "}>
          <div className="category col text-left">
            <h2>{this.props.content.day}</h2>
          </div>
          <div className="time col text-right">
            <h2>{this.props.content.time}</h2>
          </div>
        </div>
        <div className={"content"}>
          <div className="title row">
            <h2>{this.props.content.title}</h2>
          </div>
          <div className="image row">
            <img
              src={this.props.content.image}
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
          <div className="text row">
            <h3
              dangerouslySetInnerHTML={{
                __html: this.props.content.text.replace(
                  /(?:\r\n|\r|\n)/g,
                  "</br>"
                )
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
