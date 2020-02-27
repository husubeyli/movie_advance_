//istifadecinin daxil elediyi inputlarin deyisenle tutulmasi
function addMovie(){
    
    let title = document.querySelector("#movie-title").value.trim();
    let thumbnail = document.querySelector('#thumbnail').value.trim();
    let category = document.querySelector('#category').value.trim();
    let rating = document.querySelector('#rating').value.trim();
    let typeMovie = document.querySelector('.inpCheked:checked').value.trim();
    let actors = document.querySelector('#actors').value.trim();
    let about = document.querySelector('#about').value.trim();

    let json = {
        title,
        thumbnail,
        category,
        rating,
        typeMovie,
        actors,
        about
    }

    if(title.length < 4 || thumbnail.length === 0 || rating > 5 || rating < 0){
        alert("Error");
        return;
    }

    setStorage('movies',json);

}

function setStorage(key, value){
    let data = JSON.parse(getStorage(key))
    data.push(value);
    let newData = JSON.stringify(data)
    localStorage.setItem(key, newData);
}

function getStorage(key){
    if(localStorage.getItem(key) === null){
        localStorage.setItem(key, JSON.stringify([]))
    }
    return localStorage.getItem(key);
}

function toggleModel(){
    document.querySelector('#new-movie-modal').classList.toggle('active')
}

function renderDOM(val){
    let arr = JSON.parse(getStorage(val))
    arr.forEach(item =>{
        document.querySelector('#movie-list').innerHTML += `
        <div class="col-xs-4 col-sm-2">
          <div class="movie-card m-t-15">
            <div class="image" style="background-image: url(${item.thumbnail});"></div>
            <div class="content">
              <strong class="dblock text-500 text-normal m-b-5">${item.title}</strong>
              <ul class="ratings">
                <li class="fill"><i class="fas fa-star"></i></li>
                <li class="fill"><i class="fas fa-star"></i></li>
                <li class="fill"><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
            </div>
          </div>
        </div>`
    })
}
renderDOM('movies')
