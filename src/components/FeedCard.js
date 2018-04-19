import React from "react";

const SampleContent = {
  category: "image",
  image: "https://placeimg.com/1024/768/nature",
  text:
    "Sed at blandit diam. Cras accumsan in ligula sit amet malesuada. Praesent nec odio dapibus, auctor erat ac,\n facilisis risus. In hac habitasse platea dictumst. Etiam sit amet tristique elit,\n sit amet maximus sem. Praesent pharetra safddsf nibh eu tincidunt. Sed dapibus tempus luctus.\n Proin sit amet diam cursus, eleifend sapien eu, viverra sem",
  time: "9:00",
  title: "Hello World"
};

export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
    // props should contain a property 'member'
    /* member has the structure
      {
        category: "image"
        image:
      }
    */
  }

  render() {
    return <div />;
  }
}
