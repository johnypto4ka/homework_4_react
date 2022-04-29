import React from "react";
import PostItem from "./PostItem";
 const PostList = ({posts, title, remove, checkedPost, removeCheckedPost}) => { 
    return (
        <div>
            <h1 className="head">{title}</h1>
            <div className="header">
                <div className="header_item header_name">name</div>
                <div className="header_item header_username">nik</div>
                <div className="header_item header_mail">e-mail</div>
                <div className="header_item header_address">phone</div>
            </div>
            {posts.map((post, index) => (
                <PostItem remove={remove} removeCheckedPost={removeCheckedPost} 
                checkedPost={checkedPost} key={post.id} post={post} number={index+1}/>
            ))}
        </div>
        )
 }

export default PostList;