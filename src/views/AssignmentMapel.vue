<template>
  <div class="body">
    <router-link to="/Assignment"
      ><img src="@/assets/img/back.png"
    /></router-link>
    <div class="header-text">Tugas Bahasa Indonesia :</div>
    <ul>
      <div class="body-text">
        <div class="text-menu">Paket Bab 1 Hal 20</div>
        <!-- <router-link to="/AssignmentCollect"><div class="text-submenu">Kumpulkan</div></router-link> -->
        <router-link to="/AssignmentNilai"
          ><div
            style="margin-left: 285px; padding-left: 28px;"
            class="text-submenu"
          >
            Detail
          </div></router-link
        >
      </div>
      <div class="body-text">
        <div class="text-menu">Paket Bab 2 Hal 30</div>
        <!-- <router-link to="/AssignmentCollect"><div class="text-submenu">Kumpulkan</div></router-link> -->
        <router-link to="/AssignmentNilai"
          ><div
            style="margin-left: 285px; padding-left: 28px;"
            class="text-submenu"
          >
            Detail
          </div></router-link
        >
      </div>
      <div class="body-text">
        <div class="text-menu">Paket Bab 3 Hal 40</div>
        <!-- <router-link to="/AssignmentCollect"><div class="text-submenu">Kumpulkan</div></router-link> -->
        <router-link to="/AssignmentNilai"
          ><div
            style="margin-left: 285px; padding-left: 28px;"
            class="text-submenu"
          >
            Detail
          </div></router-link
        >
      </div>
    </ul>
    <img class="body-img" src="@/assets/img/teacherq.png" />
  </div>
</template>
<style scoped lang="scss">
.body {
  width: 113.8%;
  max-width: 113.8%;
  margin-left: 2.9%;
  height: 621px;
  font-family: sans-serif;
  background-color: rgba(235, 235, 235, 0.781);
}
.header-text {
  color: #4f596b;
  font-weight: bold;
  font-size: 18px;
  padding: 40px;
  margin-bottom: -20px;
}
.body-text {
  background-color: #b2acfb;
  border-radius: 9px;
  width: 100%;
  max-width: 35%;
  height: 50px;
  margin-left: 0px;
  margin-bottom: 20px;
}
.text-menu {
  padding: 13px;
  color: #4f596b;
  font-weight: bold;
}
.text-submenu {
  background-color: white;
  width: 95px;
  height: 35px;
  margin-left: 180px;
  margin-top: -43px;
  margin-bottom: 8px;
  padding-top: 8px;
  padding-left: 12px;
  font-size: 13px;
  border-radius: 12px;
  font-weight: bold;
  color: #4f596b;
  box-shadow: 0px 0px 2px 0px grey;
}
.body-img {
  position: fixed;
  width: 100%;
  max-width: 42%;
  height: 700px;
  margin-left: 600px;
  margin-top: -330px;
}
a:hover {
  text-decoration: none;
}
</style>
