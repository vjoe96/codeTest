function solution(progresses, speeds) {
    let answer = [];

    while (speeds.length > 0) {
        let count = 0;
        speeds.forEach((e, i) => {
            progresses[i] += e;
        });

        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }
        if (count > 0) {
            answer.push(count);
        }
    }

    return answer;
}
