import React, { useState } from "react";

function Posts() {
  const [post, setPost] = useState([]);
  const [postText, setPostText] = useState("");
  const [countLikes, setCountLikes] = useState([]);

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const addPost = (event) => {
    event.preventDefault();
    const newPost = [...post];
    newPost.push(postText);
    setPost(newPost);
    setCountLikes([...countLikes, 0]);
    setPostText("");
  };

  const addLike = (likeIndex) => {
    const newLikes = [...countLikes];
    newLikes[likeIndex] += 1;
    setCountLikes(newLikes);
  };

  const addDisLike = (likeIndex) => {
    const newLikes = [...countLikes];
    newLikes[likeIndex] = Math.max(0, newLikes[likeIndex] - 1);
    setCountLikes(newLikes);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            value={postText}
            onChange={handlePostTextChange}
            placeholder="Enter Post here"
          />
        </label>
        <button onClick={addPost} className="submit-message-button">
          Submit
        </button>
      </div>
      <div className="post-list">
        {post.map((item, index) => {
          return (
            <div className="post-item" key={index}>
              <div className="post-header">
                <h2>Post Title #{index + 1}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{countLikes[index]}</span>
                </div>
              </div>
              <p className="post-content">{item}</p>
              <div className="post-actions">
                <button className="like-button" onClick={() => addLike(index)}>
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => addDisLike(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
