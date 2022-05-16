import axios from "axios";

class PostService{ 
  static async getAllPosts(){         
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");          
    	return response.data;
    }
    catch(e){
      console.log(e);
    }      
  }

	static async getUserById(id){         
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);          
    	return response.data;
    }
    catch(e){
      console.log(e);
    }      
  }

	static async getCommentsById(id){         
    try{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);          
    	return response.data;
    }
    catch(e){
      console.log(e);
    }      
  }
}

export default PostService;