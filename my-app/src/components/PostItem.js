import React, {useEffect} from "react";
import { Link } from "react-router-dom";
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
      <Link className="post_link" to={`/users/${props.post.id}`}>
        <div className="post_element post_number">{props.number}</div>
        <div className="post_element post_name">{props.post.name}</div>
      </Link>
      <div className="post_element post_username">{props.post.username}</div>
      <div className="post_element post_mail">{props.post.email.toLowerCase()}</div>
      <div className="post_element post_phone">{props.post.phone}</div>
      <div className="post-btns">
        <button onClick={()=> props.remove(props.post)} className="remove_btn">Удалить</button>
      </div>
    </div>
    );
};
export default PostItem;