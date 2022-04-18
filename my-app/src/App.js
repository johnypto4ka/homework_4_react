import React , { useState, useMemo, useEffect } from "react";
import { Dots } from "loading-animations-react";
import axios from "axios";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm/PostForm";
import Select from "./components/Select/Select";
import Modal from "./components/Modal/Modal";
import SearchInput from "./components/Input/SearchInput";
import MyButton from "./components/Button/Button";
import PostService from "./components/API/PostService";

import './App.css';

function App() {
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
    console.log('cработал рендер хука Мемо');
    if(selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts;
      
    },[selectedSort,posts])
  
  const sortAndSearchedPosts = useMemo(()=>{    
    let newArray = sortedPost.filter(post=>post.name.toLowerCase().includes(searchQuery));
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

export default App;
