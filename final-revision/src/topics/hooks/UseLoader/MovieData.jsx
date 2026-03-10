export const getMovieData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1`)

    const data = await res.json()

    return data
}