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
}
export default PostService;