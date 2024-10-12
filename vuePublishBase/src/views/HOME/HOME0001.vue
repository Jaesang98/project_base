<template>
  <div class="home-container">
    <table class="home-table">
      <thead>
        <tr>
          <th>화면명</th>
          <th>화면아이디</th>
          <th>화면설명</th>
          <th>화면으로 이동</th>
          <th>만든 날짜</th>
          <th>업데이트 날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>헤더</td>
          <td>headers</td>
          <td>헤더의 대한 퍼블리싱 화면입니다</td>
          <td><button @click="$router.push('headers')">페이지로 이동</button></td>
          <td>2024-10-12</td>
          <td>2024-10-12</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup >
import "../../assets/css/global.scss";
</script>

<style>
</style>>