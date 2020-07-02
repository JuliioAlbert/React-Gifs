
export const getGifs = async (categoria) => {
    const api_key = '3D2krRdLMx5YttGcdcVwMcDPzcsOAyKl';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=${api_key}`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(dat => {
        return {
            id: dat.id,
            title: dat.title,
            url: dat.images?.downsized_medium.url,
        }
    })

    return(gifs);
}