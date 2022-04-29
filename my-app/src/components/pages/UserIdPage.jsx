import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import '../../App.css';

const PostIdPage=()=> {
  const {id} = useParams();
  const[post, setPost]=useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    	.then(res=>res.json())
      .then(data=>setPost(data))
    }, [])
    console.log(post);
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
        </div>
				<Link className="post_link post_back" to={`/users`}>
        	Назад
      	</Link>     
      </div>
    );
}

export default PostIdPage;