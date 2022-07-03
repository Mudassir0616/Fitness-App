export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ae9d22ccdmsh03996fc727ba96cp184c94jsn3da0451858fb',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '15e3d7af7fmshdd384b7a68faf25p1655aejsn3e1e5b8e6485',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async(url, options)=>{
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}