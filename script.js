// document.getElementById('recommand-header').addEventListener('click', function(e){
//   e.preventDefault();
//   document.querySelector('.recommand').classList.add('slide-view')
//   document.querySelector('.newbook').classList.remove('slide-view')

// });

// document.getElementById('newbook-header').addEventListener('click', function(e){
//   e.preventDefault();
//   document.querySelector('.newbook').classList.add('slide-view')
//   document.querySelector('.recommand').classList.remove('slide-view')

// });


// slide Nav
function openNav() {
  document.getElementById("mySidenav").style.transform = `translateX(0%)`;
}

function closeNav() {
  
  document.getElementById("mySidenav").style.transform = `translateX(100%)`;
}



var slideItem = document.querySelectorAll('.slide-item');
// var dots = document.querySelectorAll('.dot');


// # Carousel
let num = -1

setInterval(slide, 3000)

// 처음 페이지가 load되었을 때
slide()

function slide() {
  num++
  console.log(num)

  // 마지막 이미지에서 다시 처음 이미지로 index 이동
  if (num === slideItem.length) {
      num = 0;
  }

  // index에 해당하는 이미지만 보이게 한다.
  for (img of slideItem) { // 초기화
      img.style.display = 'none'
  }
  slideItem[num].style.display = 'block';

  // Indicator
//   dots.forEach(dot => {
//       dot.style.backgroundColor = '#ddd'
//   })
//   dots[index].style.backgroundColor = '#555';
}






// upBtn
document.getElementById("upBtn").addEventListener('click', function(){

    window.scroll({
        behavior: 'smooth',
        left: 0,
        top:0
    });
});

// //book-slide
// makeSubSlide('top-slide', 3,2,1);
// makeSubSlide('bottom-slide', 3,2,1);



// // setInterval(() => {
// //     setContentColor();
// // }, 1000);

// // function setContentColor(){

    
// //     const contents = document.getElementsByClassName('content');
// //     for(const element of contents) {
// //         const color = new Array;
// //         for(let i = 0 ; i <3 ; i ++){
// //             color.push(Math.round(Math.random()*256))
// //         }
// //         element.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`

// //     }
    
// // }





// function makeSubSlide(slideId,pcSlideCount,tabletSlideCount,mobileSlideCount){
//     // 대상이 될 슬라이드 ID
//     const slide = document.getElementById(slideId);
//     // 슬라이드의 자식요소인 ul태그
//     const slideWrapper = slide.children[0];
//     const pageWrapper = document.querySelector(`.${slideId}-pages`)
//     const slideCount = slideWrapper.childElementCount;

//     let index = 0;
//     let count;
//     let containerWidth;
//     let slideWidht;
//     let gap = 16
//     let maxDragRange;
    
//     checkWidth();
//     적용();

//     pageWrapper.lastElementChild.innerText = slideCount;



//     window.addEventListener('resize' , ()=>{
//         checkWidth();
//         적용();
//     })

//     function checkWidth() {
//         if(window.innerWidth > 1400){
//             count = pcSlideCount ;
//         }else if(window.innerWidth > 800) {
//             count = tabletSlideCount;
//         }else { 
//             count = mobileSlideCount;
//         }
//         containerWidth = slide.clientWidth;
//         slideWidht = (containerWidth - (16 * (count - 1))) / count;
//         for(let i = 0 ; i < slideWrapper.childElementCount ; i ++ ){
//             slideWrapper.children[i].style.width = `${slideWidht}px`;
//         }
//         maxDragRange = slideCount * (slideWidht + 16) - (slideWidht + 16) * count;
//     }
    
//     function next(){
//         if(index < slideWrapper.childElementCount-count){
//             index++;
//         }
//         적용();
//     }
    
//     function prev() {
//         if(index > 0) {
//             index--;
//         }
//         적용();
//     }

//     function 적용(){
//         slideWrapper.style.transform = `translateX(-${index * (slideWidht + gap)}px)`
//         pageWrapper.firstElementChild.innerText = index + 1;
//     }


//     //슬라이드 버튼만들기
//     makeButtons()
//     function makeButtons() {
//         const buttonContainer = document.createElement('div');
//         buttonContainer.classList.add('button-container');
//         for(let i = 0 ; i < 2 ; i ++) {
//             const button = document.createElement('a');
//             buttonContainer.appendChild(button);
//             button.setAttribute('href','#');
//         }
//         buttonContainer.firstElementChild.addEventListener('click', prev);
//         buttonContainer.lastElementChild.addEventListener('click',next);
//         slide.appendChild(buttonContainer);
//     }
    
//     // 드래그 가능하게 만들기
//     dragAble()
//     function dragAble() {
//         let start = 0 ;
//         let end = 0 ;
//         let now = 0 ;
//         let clicked = false;
//         slide.addEventListener('mousedown', (e)=>{
//             start = e.clientX;
//             clicked = true ;
//             slideWrapper.style.transition = `0s`;
//         })
        
//         slide.addEventListener('mouseup', (e)=>{
//             end = e.clientX;
//             드래그종료()
//         })

//         slide.addEventListener('mouseleave', ()=>{
//             if(clicked){
//                 드래그종료();
//             }
//         })

//         slide.addEventListener('mousemove', (e)=>{
//             if(clicked) {
//                 now = e.clientX;
//                 const moved = now - start;
//                 console.log(index * (slideWidht + 16) - moved, maxDragRange)

//                 if(index * (slideWidht + 16) - moved < maxDragRange ) {
//                     slideWrapper.style.transform = `translateX(-${index * (slideWidht + 16) - moved}px)`;
//                 } else {
//                     slideWrapper.style.transform = `translateX(-${maxDragRange}px)`;

//                 }
//             }
//         })

//         function 드래그종료(){
//             clicked = false;
//             slideWrapper.style.transition = `0.5s`;
//             const nowPos = (index * (slideWidht + gap) - (end - start))  / slideWidht;
//             index = Math.round(nowPos);
//             if(index > slideWrapper.childElementCount-count){
//                 index=slideWrapper.childElementCount-count;
//             }
//             if(index < 0 ){
//                 index = 0;
//             }
//             적용();
//         }

//     }


// }

createSlider('.first-slide')
createSlider('.second-slide')



        function createSlider(slideClassName) {

            const slideName = document.querySelector(slideClassName);
            const slideWrapper = slideName.children[0].children[0];
            const buttonWrapper = slideName.children[1];
            const pageButtonWrapper = buttonWrapper.children[1];
            console.log(slideWrapper);
            console.log(buttonWrapper);
            console.log(pageButtonWrapper);
            const slideWidth = 300;
            const slideCount = slideWrapper.childElementCount;

            const copyFirst = slideWrapper.firstElementChild.cloneNode(true);
            const copyLast = slideWrapper.lastElementChild.cloneNode(true);

            slideWrapper.appendChild(copyFirst);
            slideWrapper.insertBefore(copyLast,slideWrapper.firstElementChild);

            makeButtons();

            let moveCheck = true;
            let index = 1;
            // 인터벌 넣어줄 변수 선언
            let nextInterval;
            moveSlide(0);
            // 이전버튼
            buttonWrapper.firstElementChild.addEventListener('click', slideToLeft)
            // 다음버튼
            buttonWrapper.lastElementChild.addEventListener('click', sliderToRight)



            function makeButtons(){
                for(let i = 0; i <slideCount; i++){
                    const pageButton = document.createElement(`div`);
                    pageButton.classList.add('page-button');
                    pageButtonWrapper.appendChild(pageButton);
                    
                    
                    
                    //버튼 만들때 이벤트리스너 추가 
                    pageButton.addEventListener('click',()=>{
                        index = i + 1;
                        moveSlide(1);
                    })
                }
            }



            function moveSlide(time){
                slideWrapper.style.transform = `translateX(-${slideWidth * index}px)`;
                slideWrapper.style.transition = `${time}s`;
                // 인터벌 삭제. (타이머 초기화)
                clearInterval(nextInterval);
                // 5초마다 반복하는 인터벌 재설정
                nextInterval  = setInterval(() => {
                    sliderToRight();
                }, 5000);
                for(let i = 0 ; i < slideCount ; i ++ ){
                    pageButtonWrapper.children[i].classList.remove('active');
                }
                if(index===0) {
                    pageButtonWrapper.children[slideCount-1].classList.add('active')
                }else if(index===slideCount+1){
                    pageButtonWrapper.children[0].classList.add('active')
                }else {
                    pageButtonWrapper.children[index-1].classList.add('active')
                }
            }

            function slideToLeft() {
                if(moveCheck){
                    moveCheck = false;

                    index--;
                    moveSlide(1);

                    setTimeout(() => {
                        if(index === 0){
                            // 5번슬라이드로 이동
                            index = slideWrapper.childElementCount - 2;
                            moveSlide(0);
                        }
                        moveCheck = true;
                    }, 1000);
                }
                
            }

            function sliderToRight() {
                if(moveCheck){
                    moveCheck = false;

                    index++
                    moveSlide(1);

                    setTimeout(() => {
                        if(index === slideWrapper.childElementCount - 1){
                            index = 1;
                            moveSlide(0)
                        }
                        moveCheck = true;
                    }, 1000);
                }
            }
                
        }











    

