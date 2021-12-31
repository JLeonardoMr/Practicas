export async function MainPage(url, post, comments, photos) {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts'),
            json = await res.json()
            console.log(json);
    } catch (error) {
        
    }
}