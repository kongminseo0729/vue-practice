<script setup>
import { ref } from 'vue'
const count=ref(0)//count 값을 0으로 설정하지만 이 값이 바뀌면 화면도 같이 바뀌게(반응형)

function increase(){
    count.value ++
}//increase 버튼 클릭시 증가
function decrease(){
    count.value --
}//decrease 버튼 클릭시 감소
</script>

<template>
    <button @click="increase">증가</button><!--증가버튼-->
    <button @click="decrease">감소</button><!--감소버튼-->
    <p>{{ count }}</p><!--count 변수의 현재 값을 화면에 출력해라-->
</template>