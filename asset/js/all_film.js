const API_KEY = 'e9e9d8da18ae29fc430845952232787c'
const image_path = `https://image.tmdb.org/t/p/w1280`

let filer_all=document.querySelector('.film_caterogy-bottom.all_films')

let url = localStorage.getItem('url')
console.log(url)
// ==================================== phim danh thu cao =======================================
async function get_movie_highest_all () {
    const resp = await fetch(url)
    let data = await resp.json()
    return data.results.reverse()
}

let thisPage = 1;
let limit = 15;

render_movies_all_film()
async function render_movies_all_film() {
    let start = 0 
    let end = thisPage * limit
    const data = await get_movie_highest_all ()
    filer_all.innerHTML = data.slice(start,end).map(e => {
        return `
                <div id ='item' onclick="router(${e.id})" class="film-item">
                    <div class="film-item-episode"> hd | việt sub</div>
                    <div class="film_item-play">
                        <i class="fa-regular fa-circle-play"></i>
                    </div>
                    <div class="film-item-img">
                        <img src="${image_path + e.backdrop_path}" alt="">
                    </div>
                    <div class="film-item-name">
                        <p>${e.title}</p>
                    </div>
                </div>
        `
    }).join('')


    let item =document.querySelectorAll('#item').length
    if (item<15 || item == data.length){
        document.querySelector('.pagination').style.display ='none'
    }
}


let page_item=document.querySelector('.page-item')
page_item.addEventListener('click',(event)=>{
    event.preventDefault()
    page_item.classList.add('hide')
    document.querySelector('.spinner.hide').classList.remove('hide')
    setTimeout(()=>{
        thisPage+=1
        render_movies_all_film()
        document.querySelector('.spinner').classList.add('hide')
        page_item.classList.remove('hide')
    },500)
})


