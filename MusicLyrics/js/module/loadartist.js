const IMG = document.getElementById('img'),
    ARTITS = document.getElementById('artits'),
    FORMED = document.getElementById('formed'),
    COUNTRY = document.getElementById('country'),
    GENRE = document.getElementById('genre'),
    BIOGRAPHY = document.getElementById('biography'),
    TITLE = document.getElementById('title'),
    LYRICS = document.getElementById('lyrics'),
    SELECTION_2 = document.querySelector('.section_2');
export async function LoadArtits(artits) {
    IMG.src = 'asset/puff.svg';
    IMG.alt = 'Loading...';
    SELECTION_2.innerHTML = "";
    // let artits, albums, album, tracks, track;
    try {
        let res = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artits}`),
        json = await res.json();
        let array = json.artists;
        array.forEach(element => {
            console.log(element);
            IMG.src = element.strArtistClearart;
            IMG.alt = element.strArtist;
            ARTITS.innerHTML = element.strArtist;
            FORMED.innerHTML = element.intFormedYear;
            COUNTRY.innerHTML = element.strCountry;
            GENRE.innerHTML = element.strGenre;
            BIOGRAPHY.innerHTML = element.strBiographyES;
            // console.log(element.idArtist);
            SELECTION_2.innerHTML = `
            <button data-albums="${element.idArtist}">Buscar Albums</button>
            `;
        });
    } catch (error) {
        let message = error.statusText||'Ocurrio un error';
        console.error(error.status, message);
    }
}
export async function LoadAlbums(albums) {
    SELECTION_2.innerHTML = `<img class="load" src="asset/puff.svg" alt="Loading..." style="max-width: 100%;width:100%;">`;
    try {
        let res = await fetch(`https://theaudiodb.com/api/v1/json/2/album.php?i=${albums}`),
        json = await res.json();
        console.log(json);
        let array = json.album;
        SELECTION_2.innerHTML = ``;
        // console.log(array);
        array.forEach(element => {
            // console.log(element);
            SELECTION_2.innerHTML += `
            <figure data-album='${element.idAlbum}'>
                <img src="${element.strAlbum3DCase || element.strAlbumCDart || element.strAlbumThumb || 'asset/puff.svg'}" alt="${element.strAlbum}">
                <figcaption class="album">${element.strAlbum}</figcaption>
                <span class="genre">${element.strGenre}</span>
                <a href="#" data-back="${albums}" data-album='${element.idAlbum}' class="track-list">Lista de Canciones</a>
            </figure>
            `
        });
    } catch (error) {
        console.log(error);
        SELECTION_2.innerHTML = `
            <span>${error.status}: ${error.statusText}</span>
            <button data-albums="${albums}">Buscar Albums</button>
            `;
    }
}
export async function LoadAlbum(album,albums) {
    SELECTION_2.innerHTML = `<img class="load" src="asset/puff.svg" alt="Loading..." style="max-width: 100%;width:100%;">`;
    console.log(album);
    try {
        let res = await fetch(`https://theaudiodb.com/api/v1/json/2/track.php?m=${album}`),
        json = await res.json();
        console.log(json);
        let array = json.track;
        SELECTION_2.innerHTML = `<button data-albums="${albums}">Volver a Albums</button>`;
        array.forEach(element => {
            console.log(element);
            SELECTION_2.innerHTML += `
            <ul class="album-track">
                <li class="track">Pista:${element.intTrackNumber}</li>
                <li class="track">Album:${element.strAlbum}</li>
                <li class="track">titulo:${element.strTrack}</li>
                <li class="track"><a href="${element.strMusicVid || null}">Info</a></li>
            </ul>
                `;
        });
    } catch (error) {
        console.log(error);
    }
}
