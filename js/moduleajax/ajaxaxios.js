export default async function DOMAjax(tag) {
    try {
        let res = await axios.get('http://localhost:3000/content/'),
            json = await res.data;
        json.forEach(element => {
            if (element.alt === tag) {
                document.querySelector('[data-title]').textContent = element.title;
                document.querySelector('[data-par]').textContent = element.lorem;
                document.querySelector('[data-img]').setAttribute('src',element.img)
                document.querySelector('[data-img]').setAttribute('alt',element.alt)
            }
        });        
    } catch (error) {
        let message = error.response.statusText||'Ocurrio un error';
        alert(`Error: ${error.response.status}: ${message}`);
    }
}