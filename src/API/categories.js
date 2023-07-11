const API_URL = 'http://localhost:3000/categories'

async function getCategories() {
    const connect = await fetch(API_URL);
    const transformConnect = await connect.json();
    console.log(transformConnect)
    return transformConnect
}


export default getCategories