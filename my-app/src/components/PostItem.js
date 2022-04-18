import React, {useEffect} from "react";
import { LikeCounter, DislikeCounter} from './Component/Component';
import '../App.css';

const PostItem = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
    
  };

  useEffect(() => {
    if(checked){
    props.checkedPost(props.post)
  } else {
    props.removeCheckedPost(props.post)
    }

  }, [checked])

    return (
    <div className="post">
      <div className="input_wrapper">
        <input onChange={handleChange} type="checkbox" checked={checked}></input>
      </div>
      <div className="post_element">{props.number}</div>
      <div className="post_element post_name">{props.post.name}</div>
      <div className="post_element post_username">{props.post.username}</div>
      <div className="post_element post_mail">{props.post.email.toLowerCase()}</div>
      <div className="post_element post_address">{props.post.address.city}, {props.post.address.street}</div>
      <div className="post-btns">
        <button onClick={()=> props.remove(props.post)} className="remove_btn">Удалить</button>
      </div>
    </div>
    );
};
export default PostItem;