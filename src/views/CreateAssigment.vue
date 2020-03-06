<template>
  <div class="body">
    <router-link to="/AssignmentMapel"
      ><img src="@/assets/img/back.png"
    /></router-link>
    <div class="body-body">
      <div class="body-header">Buat Tugas</div>
      <div class="nickname">
        <img class="body-user" src="@/assets/img/userc.png" />
        <div class="header-name">
          <input
            style="margin-left:10px; width: 260px;"
            type="text"
            name="guru_id"
            v-model="input.guru_id"
          />
        </div>
      </div>
      <div class="body-name">
        <div class="name-header">Judul</div>
        <div class="name-body">
          <input type="text" name="nama" v-model="input.nama" />
        </div>
        <div class="name-header">Deadline</div>
        <div class="kotaker3">
          <input
            style="width: 150px; margin-left: 11px;"
            class="kotaker3-input"
            type="text"
            name="tgl_mulai"
            v-model="input.tgl_mulai"
          />
          <img src="@/assets/img/calendar.svg" style="margin-left: -150px;" />
        </div>
        <div class="kotaker4">
          <input
            style="width: 150px; margin-left: -71px; margin-top: 3px;"
            class="kotaker4-input"
            type="text"
            name="deadline"
            v-model="input.deadline"
          />
          <img src="@/assets/img/calendar.svg" style="margin-left: -150px;" />
        </div>
        <div class="name-header">Untuk Kelas</div>
        <div class="kotaker5">
          <ul>
            <div class="kotaker5-lingkaran">RPL1</div>
            <router-link to=""
              ><div
                class="kotaker5-lingkaran"
                style="font-size: 40px; padding-top: 0px; padding-left: 17px;"
              >
                +
              </div></router-link
            >
          </ul>
        </div>
        <br />
        <router-link to=""
          ><img
            src="@/assets/img/ata.png"
            style="margin-left: -120px; margin-top: 60px;"
        /></router-link>
        <div class="body-tugas" style="margin-left: 2px; margin-bottom: -10px;">
          Tugas Matematika Bab 1.docx
        </div>
        <div style="margin-top:20px;" class="name-body">
          <textarea
            placeholder="Deskripsi"
            name=""
            id=""
            cols="46"
            rows="5"
          ></textarea>
        </div>
        <el-button
          class="bodu-button"
          type="primary"
          icon="el-icon-edit"
          @click="handleCreate"
        >
          Add
        </el-button>
      </div>
    </div>
    <img class="body-img" src="@/assets/img/teacherq.png" />
  </div>
</template>

<script>
import axios from "axios";
let AuthStr = `Bearer ${localStorage.getItem("token")}`;
export default {
  name: "Login",
  data() {
    return {
      input: {
        guru_id: "",
        nama: "",
        tgl_mulai: "",
        deadline: ""
      }
    };
  },
  mounted() {
    axios.post("http://127.0.0.1:8000/api/guru/tambah-tugas", {
      headers: {
        Authorization: AuthStr,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }
};
</script>

<style scoped lang="scss">
.body {
  width: 100%;
  max-width: 100%;
  margin-left: 3%;
  height: 730px;
  font-family: sans-serif;
  background-color: rgba(235, 235, 235, 0.781);
}
.body-body {
  width: 100%;
  max-width: 50%;
  height: auto;
  margin: 30px;
}
.body-user {
  width: 100%;
  max-width: 20%;
}
.body-photo {
  width: 100%;
  max-width: 10%;
  margin-left: -40px;
  margin-top: 40px;
}
.body-header {
  font-size: 20px;
  font-weight: bold;
  color: #4f596b;
  margin-left: 10px;
}
.body-tugas {
  width: 70%;
  max-width: 95%;
  height: 27px;
  padding-left: 15px;
  border-radius: 15px;
  background-color: #e1e9fe;
  color: #1e1480;
  font-weight: bold;
  padding-top: 4px;
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 5px;
}
.header {
  font-size: 16px;
  font-weight: bold;
  color: #4f596b;
  margin-left: 10px;
}
.header-name {
  font-weight: bold;
  font-size: 15px;
  margin-top: -60px;
  margin-left: 90px;
  margin-bottom: 30px;
  color: #535e6d;
}
.header-class {
  font-size: 14px;
  margin-left: 92px;
  color: #535e6d;
}
.name-header {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.219);
  margin-top: 12px;
  margin-left: 10px;
}
.name-body {
  margin-left: 10px;
}
.body-button {
  margin-top: 20px;
  width: 100%;
  max-width: 68.5%;
  height: 40px;
  max-height: 100px;
  margin-left: 10px;
  border-radius: 2px;
  border: 0px;
  font-size: 18px;
  padding-bottom: 2px;
  font-weight: bold;
  color: white;
  box-shadow: 0px 1px 4px 0px grey;
  background-color: rgb(129, 143, 180);
}
.body-img {
  position: fixed;
  width: 100%;
  max-width: 42%;
  height: 700px;
  margin-left: 600px;
  margin-top: -750px;
}
.kotaker3 {
  width: 45%;
}
.kotaker3-subjudul {
  font-family: monospace;
  font-size: 17.5px;
  color: rgba(155, 155, 155, 0.733);
  margin-top: -5px;
  padding-left: 5px;
  float: left;
}
.kotaker3-input {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 30px;
}
.kotaker4 {
  width: 45%;
  float: right;
  margin-top: -43px;
}
.kotaker4-subjudul {
  font-family: monospace;
  font-size: 20px;
  color: rgba(155, 155, 155, 0.733);
  margin-top: -5px;
  padding-left: 5px;
  float: left;
}
.kotaker4-input {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  padding-left: 30px;
}
.kotaker5-subjudul {
  font-weight: bold;
  font-family: monospace;
  font-size: 17.5px;
  color: rgba(155, 155, 155, 0.733);
  padding-top: 0px;
  margin-left: 10px;
}
.kotaker5-lingkaran {
  background-color: #2b4d9d;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: white;
  font-weight: bold;
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  margin-left: -27px;
  margin-right: 12px;
  margin-top: 10px;
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 5px;
  box-shadow: 0px 1px 4px 0px grey;
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
  background-color: rgba(235, 235, 235, 0.781);
}
input:focus {
  border-color: rgb(117, 117, 117);
}
input::placeholder {
  color: rgba(0, 0, 0, 0.623);
  font-size: 14px;
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
textarea {
  background-color: #e1e9fe;
  border: solid #e1e9fe;
  font-family: sans-serif;
  color: rgba(0, 0, 0, 0.466);
  font-size: 14px;
}
</style>
