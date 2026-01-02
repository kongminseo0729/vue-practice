<template>
    <div id="wrap">
        <header id="header">ms의 게시판 목록</header>
        <main id="main">
            <div class="write-wrap">
                <button class="writebtn">글쓰기</button>
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
                    <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
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
    height: 600px;
}
#footer{
    width: 100%;
    height: 100px;
    background-color: #c3e2a9;
}
.write-wrap {
    width: 80%;
    margin: 0 auto 10px;
    display: flex;
    justify-content: flex-end;
}

.writebtn {
    padding: 8px 16px;
    cursor: pointer;
}
.table-wrap {
    display: flex;
    justify-content: center;
}
.boardtable {
    width: 80%;
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
const users=[
    { id: 1, title :'나의 첫게시물' , name: '민수', date: '2026-05-06', click: 5 },
    { id: 2, title :'나는배고파' , name: '영희', date: '2026-05-07', click: 7 },
    { id: 3, title :'나를 소개할게요' , name: '철수', date: '2026-05-08', click: 2 },
    { id: 4, title :'최애음식' , name: '미주', date: '2026-03-08', click: 55 },
    { id: 5, title :'좋아하는 색깔은?' , name: '지수', date: '2026-02-13', click: 3 }
]
</script>