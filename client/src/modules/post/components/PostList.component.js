import React, { Component } from 'react';
import { Card } from 'antd';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.showPosts = this.showPosts.bind(this);
  }

  showPosts() {
    const { posts, postsLoading } = this.props;

    if (!postsLoading && posts.length > 0) {
      return posts.map(post => {
        return (
          <Card key={post._id} body outline className="post-card" title={post.title}>
           {post.content}
          </Card>
        );
      });
    } else {
      return (
        <div>
          <h3>No posts available</h3>
          <p>Use the form on the right to create a new post.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="posts-container">
        {this.showPosts()}
      </div>
    );
  }
}