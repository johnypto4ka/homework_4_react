import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../App.css';

function UserComment (props) {
    const [ comment, setComment ] = useState({})
    const { id } = useParams()
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(res=>res.json())
          .then(data=>setComment(data))
        }, [])
        console.log(comment);
    return (
        <div className='user-comment'>
                <div className="comment">
                    <div className="comment_content">
                        <div className="comment__id"><span>Номер комментария</span>: { comment.id }</div>
                        <div className="comment_name"><span>Название</span>: { comment.name }</div>
                        <div className="comment_email"><span>Email</span>: { comment.email }</div>
                        <div className="comment_body"><span>Описание</span>: { comment.body }</div>

                        <Link className="arrow user-byId__link" to={`/users/${id}`}>
                            Назад
                        </Link>
                    </div>
                </div>
        </div>
    )
}
export default UserComment;