import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PokeBall from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <img src={PokeBall} alt='pokeball' />
            <div className='card-content'>
              <Link to={'/' + post.id}>
                <span className='card-title red-text'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className='center'>No posts to show</div>
      )
    return (
      <div className="container center home">
        <h4>Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)