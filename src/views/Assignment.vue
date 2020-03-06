<template>
  <div class="body">
    <router-link to="/"><img src="@/assets/img/back.png"/></router-link>
    <div class="header-text">Mata Pelajaran :</div>
    <div class="header-text-new">
      <div class="dropdown">
        <button class="but">Rpl 1</button>
        <div class="dropdown-content">
          <ul>
            <button class="butbut">Rpl 2</button>
            <button class="butbut">Rpl 3</button>
            <button class="butbut">Rpl 4</button>
          </ul>
        </div>
      </div>
    </div>
    <ul>
      <router-link to="/AssignmentMapel"
        ><a
          ><div class="body-text">
            <div class="text-menu">Bahasa Indonesia</div>
            <div class="text-submenu">1/10 Tugas Selesai</div>
          </div></a
        ></router-link
      >
      <router-link to="/AssignmentMapel"
        ><a
          ><div class="body-text">
            <div class="text-menu">Bahasa Inggris</div>
            <div class="text-submenu">1/10 Tugas Selesai</div>
          </div></a
        ></router-link
      >
      <router-link to="/AssignmentMapel"
        ><a
          ><div class="body-text">
            <div class="text-menu">Matematika</div>
            <div class="text-submenu">1/10 Tugas Selesai</div>
          </div></a
        ></router-link
      >
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
  margin-bottom: -106px;
}
.header-text-new {
  color: #4f596b;
  font-weight: bold;
  font-size: 18px;
  padding: 40px;
  margin-bottom: -20px;
  margin-left: 345px;
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
  margin-left: 230px;
  margin-top: -49px;
  padding: 13px;
  color: #4f596b;
}
.body-img {
  position: fixed;
  width: 100%;
  max-width: 42%;
  height: 700px;
  margin-left: 600px;
  margin-top: -330px;
}
.but {
  border: 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 1px grey;
  margin-left: -5px;
  font-weight: bold;
  color: #4f596b;
}
.butbut {
  border: 0px;
  color: #4f596b;
  font-weight: bold;
  background-color: #f9f9f9;
  margin-left: -10px;
  margin-bottom: 10px;
}
a:hover {
  text-decoration: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
