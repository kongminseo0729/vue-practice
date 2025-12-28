<template>

    <div id="wrap">
        <header id="header" >ms의 To-Do list</header>
        <article id="slider">
            <input class="input" v-model="newTodo" placeholder="할일 추가하기" @keyup.enter="addTodo"/>
            <button class="addbtn" @click="addTodo">추가하기</button><!--add 버튼 클릭시 추가되게-->
        </article>
        <main id="contents">
            <p class="contents-remain">남은 할 일은 {{ remainingCount }}개 입니다</p>
            <div
                class="todo-card"
                v-for="(todo, index) in todos"
                :key="index">
                <label class="todo-item">
                <input type="checkbox" v-model="todo.done" />
                    
                    
                    <!-- 보기 모드 -->
                    <span
                        v-if="!todo.editing"
                        class="todo-text"
                        :class="{ done: todo.done }">
                            {{ todo.text }}
                    </span>

                    <!-- 편집 모드 -->
                    <input
                        v-else
                        class="edit-input"
                        v-model="todo.text"
                        @keyup.enter="finishEdit(todo)"
                        
                    />
                </label>
                
                <div class="btn-group">
                    <button class="edit-btn" @click="startEdit(todo)">
                        <img class="edit-icon" src="@/assets/edit.png" alt="수정" />
                    </button>
                    <button class="delete-btn" @click="removeTodo(index)">
                        <img class="delete-icon" src="@/assets/delete.png" alt="삭제" />
                    </button>
                </div>
            </div>
        </main>
    

    </div> 

</template>


<style scoped>

#wrap{
    width: 500px;
    background-color: #ffffff;
    border: 2px solid #e0caf5;
    border-radius: 8px;
}
#header{
    width:500px;
    height: 100px;
    font-size: 50px;
    display: flex;
    justify-content: center; /* 가로 */
    align-items: center;     /* 세로 */

}
#slider{
    width:500px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* input이랑 버튼 사이 간격 */
}
#slider .input{
    width:250px;
    height: 50px; 
    
}
#slider .addbtn{
    padding: 8px 15px; /* 위아래 / 좌우 , 글씨 크기에 따라 달라짐,반응형*/
    font-size: 15px;
    background-color: #c5a7ff;
}
#contents{
    width:500px;
    height: 350px;
    overflow-y: auto;
}
#contents .contents-remain{
    display: flex;
    justify-content: center;
    align-items: center;
    margin :0 0 10px 0;
}
/* 집(카드) */
.todo-card {
    width:350px;
    border: 1px solid #ccc;
    margin: 0 auto ;
    border-radius: 8px;
    padding: 12px;

    
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
    background: #fff;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    
}
.todo-card:hover {
    background-color: #f6edf8;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
/* 체크박스 + 글자 */
.todo-item {
    display: flex;
    align-items: center; /* ✔ 세로 가운데 */
    gap:10px;
}

/* 글씨 영역 */
.todo-text {
    display: block;
    max-width: 700px;
    word-break: break-word;
    white-space: normal;
}


/* 완료 상태 */
.done {
    text-decoration: line-through;
    color: gray;
}
.edit-btn{
    margin:0 10px;
    
}
.edit-icon{
    width: 16px;
    height: 16px;
}
.delete-icon{
    width: 16px;
    height: 16px;
}
.edit-input {
    width: 200px;
    height: 30px;
    font-size: 14px;
}
</style>


<script setup>
import { ref , computed } from 'vue'

const newTodo = ref('')//입력중인 값 
const todos = ref([])//할 일 목록을 배열로

const addTodo = () => {
    if (newTodo.value.trim() === '') return//빈칸이면 리턴
    todos.value.push({
    text: newTodo.value,
    editing: false,
    done: false
    })
    newTodo.value = ''//값을 넘기면 다시 빈칸으로 돌아가기
}

const removeTodo = (index) => {
    todos.value.splice(index, 1)
}
//삭제
const startEdit = (todo) => {
    todo.editing = true
}
//수정중
const finishEdit = (todo) => {
    todo.editing = false
}
//수정완료
const remainingCount = computed(() => {
    return todos.value.filter(todo => !todo.done).length
})
// 남은개수
</script>