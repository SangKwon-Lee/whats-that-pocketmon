const answerFilm = document.querySelector(".answerFilm")
const left = document.querySelector(".leftArrow")
const right = document.querySelector(".rightArrow")
const answerFilmLength = document.querySelectorAll(".answer").length
const allanswer = document.querySelectorAll(".answer")
let modal = document.getElementById("myModal");
let btn2 = document.getElementById("modal_btn");
let content1 = document.querySelector(".content1")
let modalimg = document.querySelector(".modalimg")
let audio1 = document.querySelector(".audio1")


let modal2 = document.getElementById("myModal2");
let content2 = document.querySelector(".content2")


let modal3 = document.getElementById("myModal3");
let content3 = document.querySelector(".content3")

function audio() {
audio1.play()
audio1.volume = 0.08;
}

let current = 1;

function answerSlideShow() {
    if(current > answerFilmLength) {
        current = 1
    } else if (current < 1) {
        current = answerFilmLength
    }
    answerFilm.style.transition = "500ms"
    answerFilm.style.transform = `translateX(-${(current -1) * 100}%)`

}

right.onclick = function () {
    current++;
    answerSlideShow()
}
left.onclick = function () {
    current--;
    answerSlideShow()
}

for(el of allanswer) {
    el.ondragend = function(){
        let dropimg = document.querySelector(".quest").src.split("/").slice(-1)[0]
        let dragimg = event.target.src.split("/").slice(-1)[0]


        if(dropimg === dragimg) {
            document.querySelector(".quest").remove()
            modal.style.display = "inline";
            content1.textContent = event.target.src.split("/").slice(-1)[0].slice(0,-4)
            modalimg; modalimg.src = event.target.src
        } else if (dropimg !== dragimg) {
            modal2.style.display = "inline";
           
        }

        if(event.target.src.split("/").slice(-1)[0].slice(0,-4) === 'ghost') {
            content1.textContent = "고우스트"
        }
        if(event.target.src.split("/").slice(-1)[0].slice(0,-4) === 'cat') {
            content1.textContent = "냐옹이"
        }
        if(event.target.src.split("/").slice(-1)[0].slice(0,-4) === 'pigeon') {
            content1.textContent = "피죤"
        }
        if(event.target.src.split("/").slice(-1)[0].slice(0,-4) === 'phantom') {
            content1.textContent = "팬텀"
        }
        if(event.target.src.split("/").slice(-1)[0].slice(0,-4) === 'mewtwo') {
            content1.textContent = "뮤츠"
        }




        if(document.querySelectorAll(".quest").length === 0) {
            alert ("당신은 미래의 포켓몬 박사")
        }


    }
}

// 닫기 버튼 //
let span = document.getElementsByClassName("close")[0];   
span.onclick = function() {
    modal.style.display = "none";
    audio1.play()
    audio1.volume = 0.1;
    if(document.querySelectorAll(".quest").length === 0) {
        audio1.play()
        audio1.volume = 0; 
    }

}

let span2 = document.getElementsByClassName("close2")[0];   
span2.onclick = function() {
modal2.style.display = "none";

}
let span3 = document.getElementsByClassName("close3")[0];   
span3.onclick = function() {
modal3.style.display = "none";
audio1.play()
audio1.volume = 0.1;
}



// function drag(event) {
//     // event.dataTransfer.setData("text", event.target.id);

// }
// function drop(event) {
  
//     // let data = event.dataTransfer.getData("text");
//     // event.target.appendChild(document.getElementById(data));
//     event.preventDefault();
// //  }
 
//  function dropgo(event) {
//      event.preventDefault();
//  }

