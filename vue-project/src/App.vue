<template>
<div id="app">
    <input type="text" @input="auto($event)">
    <!-- input 변경시 auto(를 실행합니다) -->
    <ul id="result">
        <p>{{textData}}</p>
        <div v-for="arr in autoList">
        <!-- autoList의 값들 사이에 textData(input값)을 strong으로 출력 -->
            <td>
                <div>
                    <span>{{arr[0]}}</span>
                    <strong>{{textData}}</strong>
                    <span>{{arr[1]}}</span>
                </div>
            </td>
        </div>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                '서버 개발자', '프론트엔드 개발자', 'iOS 개발자', '안드로이드 개발자', 'QA 테스트 엔지니어',
                '머신러닝 엔지니어', '데이터 엔지니어', '보안 엔지니어', 'CTO', '임베디드 개발자', '시스템・네트워크 관리자',
                '시스템 설계', 'DevOps', 'DBA', '영상・음성 엔지니어', '그래픽스 엔지니어', 'CIO'
            ],
            autoList: [],
            textData: ''
        }
    },
    methods: {
        auto(event) {
            const arr = []
            this.textData = event.target.value
            for (let i = 0; i < this.list.length; i++) {
              if (event.target.value != '' && event.target.value != ' ' && this.list[i].indexOf(event.target.value) > -1) {
                    // 입력값이 '',' '이 아니고 입력값이 list안의 문자열에 포합될 경우
                    arr.push(this.list[i].split(event.target.value))
                    //arr에 list안의 문자열을 쪼개어 push

                }
            }
            console.log(arr)
            this.autoList = arr
        }
    }
}
</script>
