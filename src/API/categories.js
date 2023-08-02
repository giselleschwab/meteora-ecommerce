const API_URL = 'https://api-meteora-sepia.vercel.app/categories'

async function getCategories() {
    const connect = await fetch(API_URL);
    const transformConnect = await connect.json();
    console.log(transformConnect)
    return transformConnect
}


export default getCategories