<template>
  <div class="body">
    <router-link to="/AssignmentMapel"
      ><img src="@/assets/img/back.png"
    /></router-link>
    <div class="body-bodys">
      <div class="bodys-header1">Bahasa Indonesia</div>
      <div class="bodys-header3">RPL 1</div>
      <div class="bodys-header2">Bab 1 Halaman 2</div>
      <hr />
      <ul>
        <div class="bodys-subbody1">Nama</div>
        <div class="bodys-subbody2">Status</div>
        <div class="bodys-subbody3">Nilai</div>
        <div class="bodys-subbody4">Mengumpulkan</div>
        <div class="bodys-subbody5">Detail</div>
      </ul>
      <ul class="ulul">
        <li><div class="bodys-body1">Wahyu Bagus Sulaksono</div></li>
        <div class="bodys-body2">Done</div>
        <div class="bodys-body3">80</div>
        <div class="bodys-body4">22 January 2020</div>
        <div class="bodys-body5">
          <router-link to="AssignmentDetail"
            ><a><img src="@/assets/img/open.png"/></a
          ></router-link>
        </div>
        <li><div class="bodys-body1">Wahyu Bagus Sulaksono</div></li>
        <div class="bodys-body2">Done</div>
        <div class="bodys-body3">80</div>
        <div class="bodys-body4">22 January 2020</div>
        <div class="bodys-body5">
          <router-link to="AssignmentDetail"
            ><a><img src="@/assets/img/open.png"/></a
          ></router-link>
        </div>
        <li><div class="bodys-body1">Wahyu Bagus Sulaksono</div></li>
        <div class="bodys-body2">Done</div>
        <div class="bodys-body3">80</div>
        <div class="bodys-body4">22 January 2020</div>
        <div class="bodys-body5">
          <router-link to="AssignmentDetail"
            ><a><img src="@/assets/img/open.png"/></a
          ></router-link>
        </div>
      </ul>
      <div style="color: white;">.</div>
    </div>
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
.body-bodys {
  width: 100%;
  max-width: 90%;
  background-color: white;
  margin-left: 5%;
  margin-top: 2%;
  box-shadow: 0px 1px 3px 0px grey;
  padding: 15px;
  border-radius: 10px;
}
.bodys-header1 {
  color: #182e61;
  font-weight: bold;
}
.bodys-header2 {
  color: rgba(24, 46, 97, 0.473);
  font-weight: bold;
  margin-bottom: -10px;
}
.bodys-header3 {
  color: #182e61;
  font-weight: bold;
  float: right;
  margin-top: -22px;
}
.bodys-subbody1 {
  color: rgba(24, 46, 97, 0.473);
  font-weight: bold;
  margin-bottom: -24px;
  margin-left: -10px;
}
.bodys-subbody2 {
  color: rgba(24, 46, 97, 0.473);
  font-weight: bold;
  margin-bottom: -24px;
  margin-left: 310px;
}
.bodys-subbody3 {
  color: rgba(24, 46, 97, 0.473);
  font-weight: bold;
  margin-bottom: -24px;
  margin-left: 460px;
}
.bodys-subbody4 {
  color: rgba(24, 46, 97, 0.473);
  font-weight: bold;
  margin-bottom: -24px;
  margin-left: 610px;
}
.bodys-subbody5 {
  color: rgba(24, 46, 97, 0.473);
  font-weight: bold;
  margin-bottom: -10px;
  margin-left: 910px;
}
.bodys-body1 {
  color: #182e61;
  font-weight: bold;
  margin-top: -23px;
  margin-left: 20px;
  margin-bottom: -24px;
}
.bodys-body2 {
  color: #235ee9;
  font-weight: bold;
  margin-top: -23px;
  margin-left: 345px;
  margin-bottom: -24px;
}
.bodys-body3 {
  color: #235ee9;
  font-weight: bold;
  margin-top: -23px;
  margin-left: 500px;
  margin-bottom: -24px;
}
.bodys-body4 {
  color: #182e61;
  font-weight: bold;
  margin-top: -23px;
  margin-left: 638px;
  margin-bottom: -30px;
}
.bodys-body5 {
  margin-top: -23px;
  margin-left: 910px;
  margin-bottom: 40px;
}
.ulul {
  margin-left: -30px;
  margin-top: 30px;
}

a:hover {
  text-decoration: none;
}
</style>
