import React ,{useState} from 'react';
import MyInput from '../Input/MyInput';
import MyButton from '../Button/Button';
import './PostForm.css';

const PostForm = ({create}) => {
  const [name,setName]=useState('');
  const [username,setUsername]=useState('');
  const [email ,setEmail]=useState('');
  const [phone, setPhone]=useState('');
  
  const onChangeName=(e)=>{
    setName(e.target.value);
  }

  const onChangeUsername=(e)=>{
    setUsername(e.target.value);
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value);
  }
  const onChangePhone=(e)=>{
    setPhone(e.target.value);
  }

  let onAddNewPost = (e) => { 
    const { target } = e
    e.preventDefault()
    console.log(target)
    if(!target.checkValidity()) {
        target.classList.add('enable-validation')
    } else {
        target.classList.remove('enable-validation')
    }
    const newPost={
      id: Date.now(), 
      name, 
      username,
      email,
      phone
    }    
   create(newPost);
   setName('');
   setUsername('');
   setEmail('');
   setPhone('');   
  }; 

    return (
      <form id="form" onSubmit={onAddNewPost} noValidate>
        <MyInput onChange={onChangeName} type="text" placeholder="Введите Имя" 
        value={name} minLength="2" maxLength="15" required  />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyInput onChange={onChangeUsername} type="text" placeholder="Введите ник" 
        value={username} minLength="2" maxLength="15" required />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyInput onChange={onChangeEmail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" type="email" 
        placeholder="Введите E-mail" value={email} minLength="2" maxLength="20" required />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyInput onChange={onChangePhone} type="number" placeholder="Введите телефон" 
        value={phone} minLength="2" maxLength="20" required />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyButton>Добавить пост</MyButton>       
      </form>
    );
};

export default PostForm;