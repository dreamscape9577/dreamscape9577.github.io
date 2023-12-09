const clock = document.getElementById("clock");
const date = document.getElementById("date");

function clockUpdate() {
    const currentTime = new Date();

    const year = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    date.innerText = year + "년 " + month + "월 " + day + "일";

    if (hours < 12) {
        clock.innerText =
            "오전" + hours + "시 " + minutes + "분 " + seconds + "초";
    } else if (hours == 12) {
        clock.innerText =
            "오후" + hours + "시 " + minutes + "분 " + seconds + "초";
    } else {
        hours = hours - 12;
        clock.innerText =
            "오후 " + hours + "시 " + minutes + "분 " + seconds + "초";
    }
}

clockUpdate();
setInterval(clockUpdate, 1000);
