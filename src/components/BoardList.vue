<template>
    <div id="wrap">
        <header id="header">ms의 게시판 목록</header>
        <main id="main"></main>
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
    border-bottom:  5px solid #95c044;
    font-family: 'GmarketSans', sans-serif;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#main{
    width: 100%;
    height: 600px;
    background-color: #e2a9a9;
}
#footer{
    width: 100%;
    height: 100px;
    background-color: #c3e2a9;
}
</style>

<script setup>
</script>