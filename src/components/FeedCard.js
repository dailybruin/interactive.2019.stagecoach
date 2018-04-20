import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/feedcard.scss';

export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
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
      <div className="FeedCard">
        <div className={'heading row no-gutters '}>
          <div className="category col text-left">
            <h2>{this.props.content.category}</h2>
          </div>
          <div className="time col text-right">
            <h2>{this.props.content.time}</h2>
          </div>
        </div>
        <div className={'content'}>
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
                  '</br>'
                ),
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
