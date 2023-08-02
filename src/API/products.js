const API_URL = 'https://api-meteora-sepia.vercel.app/products';

async function getProducts() {
    const connect = await fetch(API_URL);
    const transformConnect = await connect.json();
    console.log(transformConnect)
    return transformConnect
}


export default getProducts