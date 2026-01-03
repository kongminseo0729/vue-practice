<template>
    <div id="wrap">
        <header id="header"> 게시판 글쓰기</header>
        <main id="main"> 
            <div class="form-row"> 
                <label for="name">이름</label>
                <input class="inputname" v-model="namewrite" placeholder="이름을 써주세요"/>
            </div>
            <div class="form-row"> 
                <label for="title">제목</label>
                <input class="inputtitle" v-model="titlewrite" placeholder="제목을 써주세요"/>
            </div>
            <div class="form-row">
                <label for="content">내용</label>
                <textarea id="content" v-model="content" placeholder="내용을 입력하세요">
                </textarea>
            </div>
        </main>
        <footer id="footer">
            <button class="writebtn" @click="write">등록하기</button>
            <button class="canclebtn" @click="cancle">취소</button>
        </footer>
    </div>
</template>

<style>
*{
margin:0;
padding:0;
}
#wrap{
    width: 100%;
    height:800px;
    margin:0 auto;
}
#header{
    width: 80%;
    height: 200px;
    margin: 0 auto;
    font-family: 'GmarketSans', sans-serif;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #b9b8b8;
    margin-bottom: 30px;
}
#main{
    
    width: 80%;
    height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#main .inputname{
    width:500px;
    height: 40px; 
    border-radius: 8px;
}
#main .inputtitle{
    width:700px;
    height: 40px; 
    border-radius: 8px;
}
.form-row {
    display: flex;
    align-items: center;
    width: 80%; 
    gap: 10px;
    margin-bottom: 15px;
}
label {
    width: 60px;
    font-family: 'GmarketSans', sans-serif;
    font-size: 15px;
}
#content{
    width: 1100px;
    height: 350px;
    border-radius: 8px;
}
#footer{
    width: 80%;
    height: 100px;
    margin: 0 auto;
    display: flex;             
    justify-content: center;   
    align-items: center;  
    gap: 20px;
    margin-top: -30px;
    border-bottom: 2px solid #b9b8b8;
}
#footer .writebtn{
    width: 70px;
    height: 30px;
    font-family: 'GmarketSans', sans-serif;
    font-size: 12px;
    background-color: #98b0ff;
    border-radius: 8px;
    
}
#footer .canclebtn{
    width: 70px;
    height: 30px;
    font-family: 'GmarketSans', sans-serif;
    font-size: 12px;
    background-color: #ffad98;
    border-radius: 8px;
}
</style>

<script setup>
</script>