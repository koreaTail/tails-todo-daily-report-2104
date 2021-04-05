const startDiv = document.querySelector(".start")
const timeLine = document.querySelector(".timeLine")
const clockText = clockTime.innerText;



startDiv.querySelector(".dayStart").addEventListener("click", startHandler)


function startHandler() {
    startDiv.querySelector(".dayStart").style.display = "none";
    const span = document.createElement("span")
    span.className = "startSpan"
    timeLine.appendChild(span)
    span.innerText = `${clockTime.innerText}`
}

const submit = document.querySelector(".js-daily-form")
const didInput = document.querySelector(".didInput")


submit.addEventListener("submit", submitHandler)

function submitHandler(e) {

    e.preventDefault();

    if (startDiv.querySelector(".dayStart").style.display !== "none") {
        alert("Start 버튼을 먼저 눌러주시면 감사하겠습니다~ ㅎㅎ;;;");
    } else {

        const makeDiv = document.createElement("div")
        makeDiv.innerHTML = `
        <span class="이전시간">9:00</span>
        <span> - </span>
        <span class="현재시간">10:00</span>
        <span class="컨텐츠">한 일 쓰고</span>
        <span class="경과시간"></span>
        <br>`
        timeLine.appendChild(makeDiv)


        const 이전시간 = document.querySelectorAll(".이전시간")
        const 현재시간 = document.querySelectorAll(".현재시간")
        const 컨텐츠 = document.querySelectorAll(".컨텐츠")
        const 경과시간 = document.querySelectorAll(".경과시간")
        const startSpan = document.querySelector(".startSpan")

        if (timeLine.querySelectorAll("div").length === 1) {
            이전시간[이전시간.length - 1].innerText = timeLine.querySelector("span").innerText
            컨텐츠[컨텐츠.length - 1].innerText = didInput.value
            현재시간[현재시간.length - 1].innerText = clockTime.innerText
            경과시간[이전시간.length - 1].innerText = `(${parseFloat(현재시간[이전시간.length - 1].innerText.slice(0, 2) * 60) + parseFloat(현재시간[이전시간.length - 1].innerText.slice(3, 5)) - parseFloat(이전시간[이전시간.length - 1].innerText.slice(0, 2) * 60) - parseFloat(이전시간[이전시간.length - 1].innerText.slice(3, 5))}분)`
            didInput.value = ""
            startSpan.remove();
        } else {

            이전시간[이전시간.length - 1].innerText = 현재시간[현재시간.length - 2].textContent
            컨텐츠[컨텐츠.length - 1].innerText = didInput.value
            현재시간[현재시간.length - 1].innerText = clockTime.innerText
            경과시간[이전시간.length - 1].innerText = `(${parseFloat(현재시간[이전시간.length - 1].innerText.slice(0, 2) * 60) + parseFloat(현재시간[이전시간.length - 1].innerText.slice(3, 5)) - parseFloat(이전시간[이전시간.length - 1].innerText.slice(0, 2) * 60) - parseFloat(이전시간[이전시간.length - 1].innerText.slice(3, 5))}분)`
            didInput.value = ""

        }
    }
}


