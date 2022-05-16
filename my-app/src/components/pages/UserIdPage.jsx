import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from '../icons/back-arrow.svg';
import '../../App.css';
import PostService from "../API/PostService";

const PostIdPage=()=> {
  const {id} = useParams();
  const[post, setPost]=useState([])
  const[comments, setComments]=useState([])

  const params = useParams();
  console.log(params)

  useEffect(()=>{
    fetchUserData();
    fetchUserCommentData();
    }, [])
    
    async function fetchUserData() {
      const post = await PostService.getUserById(params.id);
      setPost(post);
    }

    async function fetchUserCommentData() {
      const comments = await PostService.getCommentsById(params.id);
      setComments(comments);
      console.log(comments)
    }

    return (
      <div>
        <h2> Пользователь № {id}</h2>
        <div className="userpage">
          <div className="user">
            <div className="user_name">Имя: {post.name}</div>
            <div className="user_phone">Телефон: {post.phone}</div>
          </div>
					<div className="friendlist">
						<div>Список друзей:</div>
						<div>
						
						</div>
					</div>
          <div className="comments">
            <h4>Комментарии:</h4>
            <div>
              {comments.map(comment=>
                <div className="comments_item" key={comment.id}>
                  <h5>{comment.name}</h5>
                  <div>{comment.body}</div>
                </div>
                )}
            </div>
          </div>
        </div>
				<Link className="post_link post_back" to={`/users`}>
          <img src={arrow} alt="arrow"/>
          <p className="post_element">Назад</p>
      	</Link>     
      </div>
    );
}

export default PostIdPage;