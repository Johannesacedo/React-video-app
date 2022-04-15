import axios from 'axios';

const KEY = 'AIzaSyAtFoxGC-A65b0i4JDCGh02gss0cq9vDLo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 10,
        key: KEY
    }
})