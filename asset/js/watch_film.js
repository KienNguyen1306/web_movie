



const API_KEY = 'e9e9d8da18ae29fc430845952232787c'
const image_path = `https://image.tmdb.org/t/p/w1280`

let movie_id = localStorage.getItem('movie_id')
let key_id = localStorage.getItem('key_video')
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


let watch_film_main = document.querySelector('.watch_film_main')

render_watch_movie_id()
async function render_watch_movie_id(){
    let data = await get_api_by_movie_id()
    let cats = await get_api_by_casts_id()

    watch_film_main.innerHTML = `
    <div class="info_film watch_video">
    <div class="info_film-body-video">
      <iframe class="video" width="560" height="315"
        src="https://2embed.org/embed/movie?imdb=${key_id}" title="YouTube
        video player" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  </div>
  <div class="info_file-episode">
    <span>Tập phim:</span>
    <ul>
      <li>Tập full</li>
      
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
          <li>Đang phát: <span>HD Vietsub</span></li>
          <li>
            Đang phát:
            <span>HD VietsubNăm Phát Hành: 2021Quốc gia: Phim Âu MỹThể
              loại:
              Phim Hành Động, Phim Viễn Tưởng, Phim Ma - Kinh Dị</span>
          </li>
        </ul>
        <ul>
          <li>Đang phát: <span>HD VietsubNăm Phát Hành: 2021</span></li>
          <li>Đạo diễn: <span>Frank Darabont, Angela Kang,</span></li>
          <li>Thời lượng: <span>24 tập</span></li>
        </ul>
        <ul>
          <li>Quốc gia: <span>${data.production_countries.map(production_countrie=>production_countrie.name)}</span></li>
          <li>Điểm IMDb: <span>8,2</span></li>
          <li>
            Diễn viên:
            <span>${cats.cast.map(da=>da.name)}</span>
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
