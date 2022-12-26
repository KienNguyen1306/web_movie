


let textarea_value  = document.querySelector('#textarea')
const btn_comment = document.querySelector('.btn_comment')
const info_film_comment=document.querySelector('.info_film_comment-body')

btn_comment.addEventListener('click',()=>{

    let div = document.createElement('div')
    div.className = 'info_film_comment-body-user'
    div.innerHTML = `
            <div class="info_film_comment-body-avatar">
                <img
                  src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p48x48&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=5JffEiPApLYAX_ZVuBk&_nc_ht=scontent.fsgn2-2.fna&edm=AJqh0Q8EAAAA&oh=00_AfCtkJ8PpyOEUS-j3LZ5ZXPiGpHpO0t305l4d38U29h7Vg&oe=6391C2B8"
                  alt=""
                  />
              </div>
              <div class="info_film_comment-body-right">
                <h3>name</h3>
                <p>
                  ${textarea_value.value}
                </p>
                <span>like</span>
                <span>phản hồi</span>
              </div>
    `
    info_film_comment.prepend(div)
})