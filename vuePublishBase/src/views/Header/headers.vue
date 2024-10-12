<template>
  <div class="subWrap">
    <div class="header-title">헤더 유형 컬렉션</div>

    <div class="contentsWrap">
      <header class="header-one">
        <div class="header-one-title">
          <!-- 이미지랑 타이틀 둘중 하나 선택 or 둘다선택 -->
          <img src="" class="header-one-logo" alt="로고이미지" />
          <div class="header-one-home">Home</div>
        </div>
        <nav>
          <ul class="header-one-menu">
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
            <li>Menu4</li>
            <li>Menu5</li>
          </ul>
        </nav>
      </header>

      <div class="header-two"></div>

      <div class="header-three"></div>
    </div>
  </div>
</template>

<script setup >
import "../../assets/css/global.scss";
import "./CSS/header.scss";
</script>

<style>
</style>>