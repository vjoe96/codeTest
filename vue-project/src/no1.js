// 랜덤 닉네임 소스
const source1 = ["감자", "양파", "대파", "피망", "대추"];
const source2 = ["고래", "기린", "비버", "참새", "비둘기"]; // 기존 유저 닉네임
const nick = ["감자비버", "양파비둘기", "피망고래", "대추기린"];

function autoMake(source1, source2, nick) {
    let i = Math.floor(Math.random() * source1.length);
    let j = Math.floor(Math.random() * source2.length);
    console.log(i, j);
    if (nick.length == source1.length * source2.length) {
        //nick에 모든 경우의 수가 존재할 경우
        return "종료";
    } else {
        let newName = source1[i] + source2[j];
        if (nick.indexOf(newName) == -1) {
            //nick에 newName이 없을경우
            nick.push(newName);
            return newName;
        } else {
            //다시 함수 실행
            autoMake(source1, source2, nick);
        }
    }
}
console.log(solution(source1, source2, nick));
