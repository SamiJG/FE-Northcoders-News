import React, { Component } from 'react';

class Article extends Component {
  state = {};
  render() {
    const { votes, title, _id } = this.props.article;
    console.log(this.props);
    return (
      <div className="article text-left border border-warning" key={_id}>
        {/* <Link to={'somewhere'}> */}
        {votes}
        {title}
        {/* </Link> */}
      </div>
    );
  }
}

export default Article;
