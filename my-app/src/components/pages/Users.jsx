import React , { useState, useMemo, useEffect } from "react";

import { Dots } from "loading-animations-react";
import axios from "axios";

import PostList from "../PostList";
import PostForm from "../PostForm/PostForm";
import Select from "../Select/Select";
import Modal from "../Modal/Modal";
import SearchInput from "../Input/SearchInput";
import MyButton from "../Button/Button";
import PostService from "../API/PostService";

import '../../App.css';

function Users() {
  const [posts,setPosts]=useState ([])
  const [selectedSort,setSelectedSort]=useState('');
  const [isModalActive, setIsModalActive ]=useState(false);
  const [selectedTitle, setSelectedTitle]=useState([]);
  const [searchQuery, setSearchQuery]=useState('');
  const [isPostLoading, setIsPostLoading]=useState(false)

  useEffect(()=>{
    fetchData()
  }, [])

  const createPost=(newPost)=>{
    console.log(newPost);
    setPosts([newPost,...posts]);
    setIsModalActive(false);
   }
  
  const sortedPost=useMemo(()=>{
    if(selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts;
      
    },[selectedSort,posts])
  
  const sortAndSearchedPosts = useMemo(()=>{    
    let newArray = sortedPost.filter(post=>post.name.toLowerCase().includes(searchQuery)|| post.username.toLowerCase().includes(searchQuery)||
    post.email.toLowerCase().includes(searchQuery)|| post.phone.toLowerCase().includes(searchQuery));
    return newArray;
  },[searchQuery, sortedPost]);  

  const removePost = (post) => {
    let newArray = posts.filter((p) => p.id !== post.id);
    setPosts(newArray);
  }

  const sortPost=(sortValue)=>{
    setSelectedSort(sortValue);
    let newPosts=[...posts].sort((a,b)=>a[sortValue].localeCompare(b[sortValue]));
    setPosts(newPosts);
  }

  async function fetchData() {
    setIsPostLoading(true);
      setTimeout( async () => {
      const posts= await PostService.getAllPosts();
      console.log(posts);
      setPosts(posts);  
      setIsPostLoading(false); 
    }, 1000);   
  }

  const checkedPost = (post) => {
    setSelectedTitle([...selectedTitle, post])
  }

  const removeCheckedPost = (post) => {
    let newArray = selectedTitle.filter((p) => p.id !== post.id);
    setSelectedTitle(newArray);
  }

  return (
    <div className="App">
      <MyButton  onClick={()=>setIsModalActive(true)}>Добавить</MyButton>
      <Modal visible={isModalActive}
        setVisible={setIsModalActive} >
        <PostForm create={createPost} />
      </Modal>
      <div className="instruments">
      <Select defaultValue="Сортировка по "
             options={[
             {value:"name", name:"По имени"},
             {value:"username", name:"По нику"},
             {value:"email", name:"По e-mail"},
             {value:"phone", name:"По телефону"},
        ]}
        value={selectedSort}
        sortPost={sortPost}
      />
      <SearchInput onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} placeholder="Поиск.."></SearchInput>
      </div>
      <div className="selectedItems">
        <div className="selectedPostInfo">Выбран пользователь:</div>
        {selectedTitle ? (selectedTitle.map((post)=>(
        <div className="selectedPost" key={post.id}>{post.name}</div>
      ))): ''} </div>
      {isPostLoading ? <div className="loading"><Dots/></div> :
       <div>
        { sortAndSearchedPosts.length !== 0 ?
        <PostList posts={sortAndSearchedPosts}  checkedPost={checkedPost} removeCheckedPost={removeCheckedPost} 
        remove={removePost} title="Список пользователей"/>
        : <div><h1 className="noposts">Посты не найдены</h1></div>
        } </div>
      }    
    </div>
  );
}

export default Users;