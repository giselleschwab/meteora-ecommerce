const API_URL = 'http://localhost:3000/products'

async function getProducts() {
    const connect = await fetch(API_URL);
    const transformConnect = await connect.json();
    console.log(transformConnect)
    return transformConnect
}


export default getProducts