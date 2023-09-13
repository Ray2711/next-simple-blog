require('dotenv').config()
import PocketBase from 'pocketbase'
const url = process.env.REACT_APP_PB_URL
const pb = new PocketBase(url);
console.log(url)
export default pb;