
let nav = document.getElementById('header');
document.addEventListener('scroll', (event) => {
    if(window.scrollY > 50){
        nav.classList.add('tofixed');
    }else{
        nav.classList.remove('tofixed');
    }
})

if (document.querySelector('.next')){
    document.querySelector('.next').onclick = function(){
        let lists = document.querySelectorAll('.filer_slider-wrapper .film-item');
        document.querySelector('.filer_slider-wrapper').appendChild(lists[0]);
    }
}

if (document.querySelector('.prev')){

    document.querySelector('.prev').onclick = function(){
        let lists = document.querySelectorAll('.filer_slider-wrapper .film-item');
        document.querySelector('.filer_slider-wrapper').prepend(lists[lists.length - 1]);
    }
}




let nav_lis = document.querySelectorAll('.header_center ul li')
nav_lis.forEach((nav,index)=>{
    nav.addEventListener('click',()=>{
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.header_center').classList.toggle('open')
        nav.classList.add('active')
    })
})



document.querySelector('.open_nav').onclick =function(){
    document.querySelector('.header_center').classList.toggle('open')
}
document.querySelector('.close').onclick =function(){
    document.querySelector('.header_center').classList.toggle('open')
}



if (document.querySelector('.info_film-play.play')){
    document.querySelector('.info_film-play.play').onclick = function(){
        document.querySelector('.video').play()
        document.querySelector('.info_film-play.play').classList.add('hide')
    }
}




function onclick_all_film(url){
    localStorage.setItem('url',url)
    window.location = 'https://kiennguyen1306.github.io/web_movie/film.html'
}

function router(ob){
    localStorage.setItem('movie_id',ob)
    window.location ='https://kiennguyen1306.github.io/web_movie/info_film.html'
}
