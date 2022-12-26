const API_KEY = 'e9e9d8da18ae29fc430845952232787c'
const image_path = `https://image.tmdb.org/t/p/w1280`



let movie_id = localStorage.getItem('movie_id')

let info_film=document.querySelector('.info_film_main')
async function get_api_by_movie_id(){
    let res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos`)
    let data = res.json()
    return data
}

async function get_api_by_casts_id(){
    let res = await fetch(`http://api.themoviedb.org/3/movie/${movie_id}/casts?api_key=e9e9d8da18ae29fc430845952232787c`)
    let data = res.json()
    return data
}




render_info_movie_id()
async function render_info_movie_id(){
    let data = await get_api_by_movie_id()
    let cats = await get_api_by_casts_id()
    info_film.innerHTML = `
    <div class="info_film">
            <div class="info_film-image">
              <img
                src="${image_path + data.poster_path}"
                alt=""
              />
            </div>
            <div class="info_film-body">
              <div class="info_film-body-image">
                <img
                  src="${image_path + data.backdrop_path}"
                  alt=""
                />
              </div>
              <div class="info_film-body-content">
                <h2>${data.title}</h2>
                <h3>${data.original_title}</h3>
                <button class="btn btn_info_film" onclick="onclick_watch_film_travel('${data.videos.results[0].key}')">
                  <i class="fa-brands fa-youtube"></i>Trailer
                </button>
                <button class="btn btn_info_film1" onclick="onclick_watch_film('${data.imdb_id}')">
                  <i class="fa-regular fa-circle-play"></i>Xem phim
                </button>
              </div>
            </div>
            <div onclick="onclick_watch_film('${data.imdb_id}')" class="info_film-play">
              <i class="fa-regular fa-circle-play"></i>
            </div>
          </div>
          <div class="info_file-episode">
            <span>Tập phim:</span>
            <ul>
              <li>Tập 1</li>
            </ul>
          </div>
          <div class="info_file-text">
            <div class="info_file-text-heading">
              <div class="info_file-text-heading-danhgia">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <div class="info_file-text-heading-info">
                <ul>
                  <li>Đang phát: <span>${data.spoken_languages.map(spoken_language=>spoken_language.name)}</span></li>
                  <li>
                    Thể loại:
                    <span>${data.genres.map(genre=>genre.name)}</span
                    >
                  </li>
                </ul>
                <ul>
                  <li>Năm Phát Hành:<span>${data.release_date}</span></li>
                  <li>Thời lượng: <span>${data.runtime} phút</span></li>
                </ul>
                <ul>
                  <li>Quốc gia: <span>${data.production_countries.map(production_countrie=>production_countrie.name)}</span></li>
                  <li>Điểm IMDb: <span>8,2</span></li>
                  <li>
                    Diễn viên:
                    <span>${cats.cast.map(da=>da.name)}</span
                    >
                  </li>
                </ul>
              </div>
              <div class="info_film-revew">
                <h3>Nội dung phim và review</h3>
                <p>
                  ${data.overview}
                </p>
              </div>
            </div>
          </div>
    `


}



function onclick_watch_film(key_movel_id){
    localStorage.setItem('key_video',key_movel_id)
    window.location ='http://127.0.0.1:5500/watch_film.html'

}


function onclick_watch_film_travel(key){
    document.querySelector('.info_film_travel.hide').classList.remove('hide')
    document.querySelector('.video_travel').src = `https://www.youtube.com/embed/${key}`
}



document.querySelector('.close_travel').onclick =function(){
  document.querySelector('.info_film_travel').classList.add('hide')
  document.querySelector('.video_travel').src ='#'
}


// ==================================== cos thể bạn muốn xem =======================================
async function get_movie_highest() {
    const resp = await fetch('https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
    const respData = await resp.json()
    return respData.results
}
let filer_slider_wrapper =document.querySelector('.filer_slider-wrapper')

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
