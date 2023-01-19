import axios from "axios";
import "../axios";

export const uploadFeed = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }
    const response  = await axios.post('/api/feed', data, config);
    return response
}
export const getFeed = async(id)=>{
    const config = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        },    
    };
    const response = await axios.get(`/api/feed/${id}`, config);
    return response
}