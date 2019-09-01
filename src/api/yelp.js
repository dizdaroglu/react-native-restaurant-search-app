import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer CHN9i9bf3BZCUoN6B-J9gNlKOVva6hhKCIC9zkZrcfrbKkR6XyHLMMeu82p40CZFB9yx7ZDkBGkab2U3T6DzK3LG9lD4vsjTMqKqtt-k4gaREsTIl-iKUDPb5uNqXXYx'
    }
});

