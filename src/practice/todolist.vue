<script setup>
import { ref } from 'vue'

const newTodo = ref('')//입력중인 값 
const todos = ref([])//할 일 목록을 배열로

const addTodo = () => {
    if (newTodo.value.trim() === '') return//빈칸이면 리턴
    todos.value.push(newTodo.value)//입력한 값을 todos로 넣기
    newTodo.value = ''//값을 넘기면 다시 빈칸으로 돌아가기
}
</script>

<template>
    <div>
        <h2>todo-list</h2><!--todolist 제목-->
        <input v-model="newTodo" placeholder="add a todo" @keyup.enter="addTodo"/><!--평상시에는 add a todo가 떠잇고 글을 쓰고 엔터를 누를경우 글이 추가됌-->
        <button @click="addTodo">add</button><!--add 버튼 클릭시 추가되게-->

    <ul>
        <li v-for="(todo, index) in todos" :key="index"><!--todos 배열을 처음부터 끝까지 돌면서 각 항목(todo)을 <li>로 하나씩 만들어라-->
        {{ todo }}
        </li>
    </ul>

    </div>
</template>