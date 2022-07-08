// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution1(n) {
    let answer = 0;

    while (n > 0) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }
    return answer;
}

// 길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 합니다.
// 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 solution을 완성해주세요.

function solution2(arr) {
    let answer = true;
    let set = new Set(arr);
    if (set.size != arr.length) {
        answer = false;
    } else {
        for (i of arr.keys()) {
            if (!set.has(i + 1)) {
                answer = false;
                break;
            }
        }
    }

    return answer;
}

// 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다. 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.

function solution3(v) {
    let answer = [];
    let x = new Set();
    let y = new Set();
    v.forEach((e) => {
        func(e[0], x);
        func(e[1], y);
    });
    console.log(x, y);
    answer.push([...x][0]);
    answer.push([...y][0]);
    return answer;
}

const func = (e, set) => {
    if (!set.has(e)) {
        set.add(e);
    } else {
        set.delete(e);
    }
};
