<template>
  <div class="body">
    <router-link to="/">
      <img src="@/assets/img/back.png" />
    </router-link>
    <div style="padding-top: 50px;" class="body-header">Riwayat Tugas</div>
    <ul>
      <router-link to="/HistoryDone">
        <div class="body-subheader">
          <div class="subheader-header">Tugas Selesai</div>
          <div class="subheader-body">14</div>
        </div>
      </router-link>
      <router-link to="/HistoryUndone">
        <div
          style="margin-left:370px; margin-top: -125px;"
          class="body-subheader"
        >
          <div class="subheader-header">Tugas Belum Dinilai</div>
          <div style="color: #941E4D;" class="subheader-body">2</div>
        </div>
      </router-link>
    </ul>
    <ul>
      <div class="body-body" v-for="(row, index) in riwayat" :key="index">
        <img src="@/assets/img/user1.png" />
        <div class="header-text">
          <b style="color: rgb(100, 100, 100);"></b>
          <br />
          {{ row.nama }}
          <br />
          <img src="@/assets/img/calendar.png" />
          Feb 6,2020
          <img
            style="margin-top: -2px; margin-left: 3px;"
            src="@/assets/img/time.png"
          />
          1:20 PM />
        </div>
        <router-link to="/HistoryDetail">
          <div class="body-tugas">Tugas Matematika Bab 1.docx</div>
          <div class="task-blue">
            Selesai
            <img
              style="width: 25px; margin-left: 15px; margin-top: -4px;"
              src="@/assets/img/acc.png"
            />
          </div>
        </router-link>
        <div style="color: white;">.</div>
      </div>
    </ul>
    <ul>
      <div class="body-body">
        <img src="@/assets/img/user1.png" />
        <div class="header-text">
          <b style="color: rgb(100, 100, 100);">Sharen Alicia</b>
          <br />
          <br />
          <img src="@/assets/img/calendar.png" />
          Feb 6,2020
          <img
            style="margin-top: -2px; margin-left: 3px;"
            src="@/assets/img/time.png"
          />
          1:20 PM
        </div>
        <router-link to="/HistoryDetail">
          <div class="body-tugas2">Tugas Matematika Bab 1.docx</div>
          <div class="task-red">Check</div>
        </router-link>
        <div style="color: white;">.</div>
      </div>
    </ul>
    <img class="body-img" src="@/assets/img/riwayatq.svg" />
    <div style="color: rgba(235, 235, 235, 0.781)">.</div>
  </div>
</template>

<script>
import axios from "axios";
let AuthStr = `Bearer ${localStorage.getItem("token")}`;

export default {
  name: "History",
  data() {
    return {
      riwayat: []
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/guru/riwayat", {
        headers: {
          Authorization: AuthStr,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(data => (this.riwayat = data.data.data.riwayat))
      .catch(error => {
        console.log("error 3 " + error);
      });
  }
};
</script>

<style scoped lang="scss">
.body {
  width: 113.8%;
  max-width: 113.8%;
  margin-left: 2.9%;
  font-family: sans-serif;
  background-color: rgba(235, 235, 235, 0.781);
}
.body-body {
  width: 100%;
  max-width: 50%;
  background-color: white;
  border-radius: 12px;
  margin-left: 6.5%;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 20px;
}
.body-header {
  width: 100%;
  max-width: 80%;
  height: 150px;
  background-color: white;
  border-radius: 13px;
  margin-left: 10%;
  margin-top: 3%;
  padding: 70px;
  font-family: sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: #979797c4;
}
.body-subheader {
  background-color: white;
  width: 100%;
  max-width: 17%;
  height: 70px;
  border-radius: 12px;
  margin-top: -30px;
  margin-left: 170px;
  margin-bottom: -70px;
  box-shadow: 0px 2px 4px 0px rgb(185, 185, 185);
  margin-bottom: 55px;
}
.subheader-header {
  padding: 10px;
  font-weight: bold;
  color: #535e6d;
}
.subheader-body {
  padding-left: 150px;
  margin-top: -15px;
  font-size: 25px;
  font-weight: bold;
  color: #08387a;
}
.header-text {
  width: 100%;
  height: auto;
  margin-left: 50px;
  margin-top: -45px;
  font-family: sans-serif;
  font-size: 11px;
  color: rgb(153, 153, 153);
  margin-bottom: 20px;
}
.body-tugas {
  width: 100%;
  max-width: 60%;
  height: 27px;
  padding-left: 15px;
  border-radius: 15px;
  background-color: #ded7f9;
  color: #1e1480;
  font-weight: bold;
  padding-top: 4px;
  font-size: 13px;
  margin-bottom: 5px;
}
.body-tugas2 {
  width: 100%;
  max-width: 60%;
  height: 27px;
  padding-left: 15px;
  border-radius: 15px;
  background-color: #f38e8e;
  padding-top: 4px;
  font-size: 13px;
  margin-bottom: 5px;
}
.tugas-icon {
  width: 100%;
  max-width: 8.5%;
  height: 21px;
  border-radius: 15px;
  padding-left: 7px;
  padding-top: 0px;
  margin-left: 285px;
  margin-top: -20px;
  background-color: #3c2dd1;
  color: white;
  font-size: 14px;
  font-weight: bold;
}
.task-blue {
  width: 100%;
  max-width: 25%;
  height: 27px;
  padding-left: 40px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  border: solid 1px blue;
  color: blue;
  font-weight: bold;
  padding-top: 4px;
  font-size: 13px;
  margin-left: 370px;
  margin-top: -32px;
}
.task-red {
  width: 100%;
  max-width: 25%;
  height: 27px;
  padding-left: 50px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  border: solid 1px red;
  color: red;
  font-weight: bold;
  padding-top: 4px;
  font-size: 13px;
  margin-left: 370px;
  margin-top: -32px;
}
.body-img {
  margin-left: 800px;
  margin-top: -902px;
  width: 250px;
}

a {
  color: rgba(255, 255, 255, 0.568);
}
a:hover {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
input {
  width: 350px;
  outline: 0;
  border-width: 0 0 1.5px;
  border-color: #707070;
}
input:focus {
  border-color: rgb(117, 117, 117);
}
input::placeholder {
  color: rgba(0, 0, 0, 0.623);
}
input[type="text"] {
  color: rgb(90, 90, 90);
  font-family: sans-serif;
  font-weight: bold;
}
input[type="password"] {
  color: rgb(90, 90, 90);
  font-family: sans-serif;
  font-weight: bold;
}
</style>
