import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Posts from './Posts'
import PostForm from './PostForm'
import Post from './Post'

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={props =>
            <Posts
              posts={this.props.posts}
              fetchPosts={this.props.fetchPosts}
              {...props}
            />}
          />
          <Route path='/posts/new' render={props =>
            <PostForm
              fetchPosts={this.props.fetchPosts}
              {...props}
            />}
          />
          <Route path='/posts/edit/:id' render={props =>
            <PostForm
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find(post =>
                post.id === Number(props.match.params.id))
              }
              {...props}
            />}
          />
          <Route path='/posts/:id' render={props =>
            <Post
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find(post =>
                post.id === Number(props.match.params.id)
              )}
              {...props}
            />}
          />
          <Route path='/posts/:postId/comments/:commentId' render={props =>
            <Post
              post={this.props.posts.find(post =>
                post.id === Number(props.match.params.id)
              )}
              {...props}
            />}
          />
        </Switch>
      </div>
    )
  }
}

export default Routes