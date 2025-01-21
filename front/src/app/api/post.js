import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getPosts(page,size) {
    try{
        const response = await axios.get(baseURL+'/post', {
            params: {
            page,
            size
            }
        });
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}

export async function getPostById(id) {
    try{
        const response = await axios.get(baseURL+'/post/'+id);
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}

export async function getPostByText(text) {
    try{
        
        const response = await axios.get(baseURL+'/post/search',{
            params: {
                q: text
            }
        });
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}

