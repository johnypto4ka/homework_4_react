import React ,{useState} from 'react';
import MyInput from '../Input/MyInput';
import MyButton from '../Button/Button';
import './PostForm.css';

const PostForm = ({create}) => {
  const [name,setName]=useState('');
  const [username,setUsername]=useState('');
  const [email ,setEmail]=useState('');
  const [city, setCity]=useState('');
  const [street, setStreet]=useState('');
  
  const onChangeName=(e)=>{
    setName(e.target.value);
  }

  const onChangeUsername=(e)=>{
    setUsername(e.target.value);
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value);
  }
  const onChangeCity=(e)=>{
    setCity(e.target.value);
  }
  const onChangeStreet=(e)=>{
    setStreet(e.target.value);
  }

  let onAddNewPost = (e) => { 
    const { target } = e
    e.preventDefault()

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
      address: {
        city,
        street
      }
    }    
   create(newPost);
   setName('');
   setUsername('');   
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
        <MyInput onChange={onChangeEmail} type="text" placeholder="Введите E-mail" 
        value={email} minLength="2" maxLength="20" required />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyInput onChange={onChangeCity} type="text" placeholder="Введите город" 
        value={city} minLength="2" maxLength="20" required />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyInput onChange={onChangeStreet} type="text" placeholder="Введите улицу" 
        value={street} minLength="2" maxLength="20" required />
        <span className="message__error">Заполните поле, количество символов от 2 до 20.</span>
        <span className="message__success">Успешно</span>
        <MyButton>Добавить пост</MyButton>       
      </form>
    );
};

export default PostForm;