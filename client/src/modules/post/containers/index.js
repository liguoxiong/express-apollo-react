import React, { Component } from 'react'

import { withPosts } from '../providers';
import { PostList, PostForm } from '../components';

import { Layout, Row, Col } from 'antd';
import '../styles/styles.css';

/**
 * Wrap a component using the withPosts provider
 * to get data retrieved with GraphQL.
 */
@withPosts
export default class PostRoot extends Component {
  render() {
    const { posts, postsLoading } = this.props;

    return (
      <Layout>
        <h2 className="posts-title">Posts Module</h2>
            <hr />
        <Row>
          <Col xs={24} md={12}>
            <PostList postsLoading={postsLoading} posts={posts} />
          </Col>
          <Col xs={24} md={12}>
            <PostForm />
          </Col>
        </Row>
      </Layout>
    )
  }
}