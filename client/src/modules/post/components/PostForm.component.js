import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'antd';
import { withAddPost } from '../providers';

@withAddPost
export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    this.props.addPost({
      title: event.target.title.value,
      content: event.target.content.value
    });
  }

  render() {
    return (
      <div className="post-form">
        <h2>Create new post</h2>
        <Form onSubmit={(event) => this.submitForm(event)}>
          <Form.Item label="Post Title">
            <Input type="text" name="title" id="postTitle" placeholder="Title" />
          </Form.Item>
          <Form.Item label="Post Content">
            <Input type="textarea" name="content" id="postContent" placeholder="Content" />
          </Form.Item>
          <Button htmlType="submit" className="submit-button">Submit new post</Button>
        </Form>
      </div>
    )
  }
}