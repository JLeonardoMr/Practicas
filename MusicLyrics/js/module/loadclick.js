import { LoadAlbum, LoadAlbums } from "./loadartist.js";

export function Click() {
    addEventListener('click',e=>{
        if (e.target.matches('[data-albums]')) {
            let albums = e.target.getAttribute('data-albums');
            LoadAlbums(albums)
        }
        if (e.target.matches('[data-album] *')) {
            e.preventDefault()
            let album = e.target.getAttribute('data-album');
            let albums = e.target.getAttribute('data-back');

            LoadAlbum(album,albums)
        }
        if (e.target.matches('[data-backalbums]')) {
            let albums = e.target.getAttribute('data-backalbums');
            // LoadAlbums(albums)
        }
    })
}