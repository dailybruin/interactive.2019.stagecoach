import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/feedcard.scss';

const SampleContent = {
  category: 'Music',
  image: 'https://placeimg.com/1024/768/nature',
  text:
    'Sed at blandit diam. Cras accumsan in ligula sit amet malesuada. Praesent nec odio dapibus, auctor erat ac,\n facilisis risus. In hac habitasse platea dictumst. Etiam sit amet tristique elit,\n sit amet maximus sem. Praesent pharetra safddsf nibh eu tincidunt. Sed dapibus tempus luctus.\n Proin sit amet diam cursus, eleifend sapien eu, viverra sem',
  time: '9:00',
  title: 'Hello World',
};

export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
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
      <div className="FeedCard container">
        <div className={'heading row no-gutters ' + this.props.dayClass}>
          <div className="category col text-left">
            <h2>{this.props.content.category}</h2>
          </div>
          <div className="time col text-right">
            <h2>{this.props.content.time}</h2>
          </div>
        </div>
        <div className={'content ' + this.props.dayClass}>
          <div className="title row">
            <h2>{this.props.content.title}</h2>
          </div>
          <div className="image row">
            <img
              src={this.props.content.image}
              class="img-fluid"
              alt="Responsive image"
            />
          </div>
          <div className="text row">
            <h3>{this.props.content.text}</h3>
          </div>
        </div>
      </div>
    );
  }
}
