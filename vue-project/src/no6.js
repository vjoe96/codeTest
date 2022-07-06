// 문제 설명
// 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
// 예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

// - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// 제한 사항
// name은 알파벳 대문자로만 이루어져 있습니다.
// name의 길이는 1 이상 20 이하입니다.
// 입출력 예
// name	return
// "JEROEN"	56
// "JAN"	23
//TODO: 통과 하지 못한 케이스 존재함
function solution(name) {
    let answer = 0;

    let nameTo = name.split("");
    nameTo.forEach((e, i) => (nameTo[i] = e.charCodeAt(0)));

    let c = new Array(nameTo.length);
    c.fill("A".charCodeAt(0));

    console.log(nameTo, c);

    let count = 0;

    c.forEach((e, i) => {
        let cTemp = nameTo[i] - e;
        if (cTemp > 12) {
            cTemp = 26 - cTemp;
        }
        count += cTemp;
        count++;
    });

    let temp1 = 0;
    let temp2 = 0;

    let name1 = nameTo;
    let name2 = nameTo;
    name1.shift();
    while (name1.shift() == 65) {
        temp1++;
    }
    while (name2.pop() == 65) {
        temp2++;
    }
    count += -1 * Math.max(temp1, temp2);
    count += -1;
    return count;
}
