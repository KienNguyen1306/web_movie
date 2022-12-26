const API_KEY = 'e9e9d8da18ae29fc430845952232787c'
const image_path = `https://image.tmdb.org/t/p/w1280`

let filer_slider_wrapper =document.querySelector('.filer_slider-wrapper')


// ==================================== phim danh thu cao =======================================
async function get_movie_highest () {
    const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc0&api_key=${API_KEY}&language=en-US`)
    const respData = await resp.json()
    return respData.results.reverse()
}


render_movies_to_dom()
async function render_movies_to_dom() {
    const data = await get_movie_highest ()
    filer_slider_wrapper.innerHTML = data.slice(3, 12).map(e => {
        return `
                <div onclick="router(${e.id})" class="film-item">
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
}


// ================================================== phim phổ biến ===========================
let film_popular =document.querySelector('.film_caterogy-body.popular')

async function get_movie_popular() {
    const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`)
    const respData = await resp.json()
    return respData.results.reverse()
}


render_movies_popular()
async function render_movies_popular() {
    const data = await get_movie_popular ()
    film_popular.innerHTML = data.slice(0, 12).map(e => {
        return `
            <div onclick="router(${e.id})" class="film-item">
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

}

// ========================================== phim chiếu rạp ===================================

let film_theatres =document.querySelector('.film_caterogy-body.theatres')

async function get_movie_theatres() {
    const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2020-10-22&api_key=${API_KEY}&language=en-US`)
    const respData = await resp.json()
    return respData.results.reverse()
}


render_movies_theatres()
async function render_movies_theatres() {
    const data = await get_movie_theatres ()
    film_theatres.innerHTML = data.slice(0, 12).map(e => {
        return `
            <div onclick="router(${e.id})" class="film-item">
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

}



// ======================================================== phim truyền hình ==================================

let film_dramas  =document.querySelector('.film_caterogy-body.dramas')

async function get_movie_dramas() {
    const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=${API_KEY}&language=en-US`)
    const respData = await resp.json()
    return respData.results.reverse()
}

render_movies_dramas()
async function render_movies_dramas() {
    const data = await get_movie_dramas ()
    film_dramas.innerHTML = data.slice(0, 12).map(e => {
        return `
            <div onclick="router(${e.id})" class="film-item">
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

}

// ================================================================ phim viễn tưỡng ========================

let film_fiction  =document.querySelector('.film_caterogy-body.fiction')

async function get_movie_fiction() {
    const resp = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${API_KEY}&language=en-US`)
    const respData = await resp.json()
    return respData.results.reverse()
}

render_movies_fiction()
async function render_movies_fiction() {
    const data = await get_movie_fiction ()
    film_fiction.innerHTML = data.slice(0, 12).map(e => {
        return `
            <div onclick="router(${e.id})" class="film-item">
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
}


// ================================================================ phim sắp chiếu ========================

let film_upcoming =document.querySelector('.film_caterogy-bottom.upcoming')

async function get_movie_upcoming() {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`)
    const respData = await resp.json()
    return respData.results.reverse()
}

render_movies_upcoming()
async function render_movies_upcoming() {
    const data = await get_movie_upcoming()
    film_upcoming.innerHTML = data.slice(0, 10).map(e => {
        return `
            <div onclick="router(${e.id})" class="film-item">
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

}


