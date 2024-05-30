function rps(com, ply) {
    if (com === ply) {
        alert("비겼습니다.");
        console.log("비겼습니다.");
    }
    else if ((com == "가위" && ply == "바위") || (com == "바위" && ply == "보") || (com == "보" && ply == "가위")) {
        alert("이겼습니다.");
        console.log("이겼습니다.");
    }
    else {
        alert("졌습니다.");
        console.log("졌습니다.");
    }
    console.log(com, ply);
}
rps(prompt("가위바위보를 입력해주세요"), prompt("가위바위보를 입력해주세요."));
