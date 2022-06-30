<template>
<div id="app">
    <div id="contents">
        <div v-for="(item, i) in list">
            <td>
                {{ item }}
                <div v-if="i % 5 === 2">
                <!-- list의 index를 5로 나누어 나머지가 2인 경우 광고 출력 -->
                    {{ blurb }}
                </div>
            </td>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                '1번 컨텐츠',
                '2번 컨텐츠',
                '3번 컨텐츠',
                '4번 컨텐츠',
                '5번 컨텐츠',
                '6번 컨텐츠',
                '7번 컨텐츠',
                '8번 컨텐츠',
                '9번 컨텐츠',
                '10번 컨텐츠',
                '11번 컨텐츠',
                '12번 컨텐츠',
                '13번 컨텐츠',
                '14번 컨텐츠',
                '15번 컨텐츠',
                '16번 컨텐츠',
                '17번 컨텐츠',
                '18번 컨텐츠',
                '19번 컨텐츠',
            ],
            blurb: '광고'
        }
    }
}
</script>
