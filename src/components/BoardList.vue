<template>
    <div id="wrap">
        <header id="header">ms의 게시판 목록</header>
        <main id="main">
            <div class="write-wrap">
                <button class="writebtn" @click="goWrite">글쓰기</button>
            </div>
            <div class="table-wrap">
            
            <table class="boardtable">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(user, index) in users" :key="user.id">
                    <td>{{  users.length - index }}</td>
                    <td>{{ user.title }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.date }}</td>
                    <td>{{ user.click }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </main>
        <footer id="footer"></footer>
    </div>
</template>

<style scoped>
*{
    margin:0;
    padding:0;
}
#wrap{
    width: 100%;
    
}
#header{
    width: 100%;
    height: 200px;
    font-family: 'GmarketSans', sans-serif;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#main{
    width: 100%;
    height: 500px;
    padding: 0 10%;
}
#footer{
    width: 100%;
    height: 100px;
    background-color: #c3e2a9;
}
.write-wrap {
    width: 100%;
    margin: 0 auto 10px;
    display: flex;
    justify-content: flex-end;
}

.writebtn {
    padding: 8px 16px;
    cursor: pointer;
}
.table-wrap {
    width: 100%;
}
.boardtable {
    width: 100%;
    border-collapse: collapse;
}

.boardtable th,
.boardtable td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'  //ref 화면이 반응하는 변수 onmounted 화면이 열리자마자 실행
import { useRouter } from 'vue-router' 

const router = useRouter()
const users = ref([])

onMounted(() => {
    users.value = JSON.parse(localStorage.getItem('posts')) || []
})

const goWrite = () => {
    router.push('/write')
}
</script>