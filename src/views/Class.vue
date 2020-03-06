<template>
  <div class="middle">
    <div class="isi-background1"></div>
    <div class="isi1" v-for="(row, index) in kelas" :key="index">
      <div class="isi-box">
        <div class="isi-judul1">{{ row.kelas }}</div>
        <div class="isi-ketua">Wahyu Bagus</div>
        <div class="isi-mapel">matematika</div>
        <div class="isi-edit">
          <a class="nav-link"><router-link to="">•••</router-link></a>
        </div>
        <div class="isi-total">
          <ul>
            <li></li>
            <li></li>
          </ul>
          <div class="isi-subtotal1">Total Siswa: 36</div>
          <div class="isi-subtotal2">Total Tugas: 10</div>
        </div>
      </div>
    </div>
    <div class="isi-background2"></div>
    <div class="isi2">
      <router-link to="/CreateClass"
        ><div class="isi-judul2">
          <a class="nav-link">+ Tambah Kelas</a>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "kelasList",
  data() {
    return {
      kelas: []
    };
  },
  mounted() {
    const AuthStr =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9ndXJ1XC9sb2dpbiIsImlhdCI6MTU4MzIzMzM1NywiZXhwIjoxNTg5MjgxMzU4LCJuYmYiOjE1ODMyMzMzNTgsImp0aSI6IlpqVkxoQlpsUTN3RUY2QlgiLCJzdWIiOjEsInBydiI6ImY0YTc4ZTg0MjgzZGEzMWQwZGJlNWVhNTZkNDAwYzIxOTdkZjRhOTMifQ.U-4koJjeBE284OeaFBk0BX1fLE5izKbnmzK7lmMbg1A";

    axios
      .get("http://127.0.0.1:8000/api/guru/list-kelas", {
        headers: {
          Authorization: AuthStr,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        // var x = response.data.kelas.kelas;
        //   console.log(response);
        //   console.log(response.data);
        //   console.log(response.data.data);
        //   console.log(response.data.data.kelas.kelas);
        //   console.log(this)
        this.kelas = response.data.data.kelas.kelas;
      })
      .catch(error => {
        console.log("error 3 " + error);
      });
  }
};
</script>

<style scoped lang="scss">
.middle {
  margin-left: 20%;
  margin-top: -50px;
  font-size: 20px;
  font-weight: bold;
  width: 80%;
  height: 600px;
}
.judul2 {
  background-color: rgb(203, 229, 240);
  border-radius: 1px;
  margin-top: -60px;
  width: 100%;
  height: 50px;
}
.isi-background1 {
  background-color: #3144b1;
  border-radius: 1px;
  margin-top: 50px;
  width: 40%;
  height: 25%;
  margin-left: 70px;
}
.isi1 {
  box-shadow: 0px 1px 4px 0px grey;
  background-color: rgb(255, 255, 255);
  border-radius: 1px;
  margin-top: -150px;
  width: 40%;
  height: 25%;
  margin-left: 80px;
}
.isi-box {
  height: 50%;
  box-shadow: 0px 0.5px grey;
}
.isi-judul1 {
  font-size: 23px;
  color: #263494;
  margin-left: 9%;
  padding-top: 10px;
}
.isi-ketua {
  float: left;
  font-size: 15px;
  color: #9a9ca5;
  margin-left: 29px;
  padding-top: -20px;
}
.isi-mapel {
  background-color: rgba(45, 72, 190, 0.877);
  border-radius: 7px;
  float: right;
  width: 110px;
  height: 32px;
  padding-top: 4px;
  font-size: 17px;
  color: white;
  margin-right: 40px;
  margin-top: -25px;
  padding-left: 7px;
}
.isi-edit {
  font-size: 20px;
  color: #9a9ca5;
  margin-left: 390px;
  margin-top: -60px;
}
.isi-total {
  color: grey;
  font-size: 15px;
  float: left;
  margin-top: 45px;
  margin-left: -100px;
}
.isi-subtotal1 {
  color: grey;
  font-size: 15px;
  float: left;
  margin-top: -82px;
  margin-left: 30px;
}
.isi-subtotal2 {
  color: grey;
  font-size: 15px;
  float: left;
  margin-top: -52px;
  margin-left: 30px;
}
.isi-background2 {
  background-color: #3144b1;
  border-radius: 1px;
  margin-top: -150px;
  width: 40%;
  height: 25%;
  margin-left: 570px;
}
.isi2 {
  box-shadow: 0px 1px 4px 0px grey;
  background-color: rgb(255, 255, 255);
  border-radius: 1px;
  margin-top: -150px;
  width: 40%;
  height: 25%;
  margin-left: 580px;
}
.isi-judul2 {
  font-size: 23px;
  color: #999baa;
  float: center;
  padding-top: 50px;
}
ul {
  list-style: none; /* Remove default bullets */
  margin-left: 95%;
  margin-bottom: 20px;
}

ul li::before {
  content: "•";
  font-size: 25pt;
  color: rgba(45, 72, 190, 0.877); /* Change the color */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1.3em; /* Also needed for space (tweak if needed) */
  margin-left: -9em;
  margin-top: -20px;
}
a {
  text-decoration: none;
  color: rgb(73, 73, 73);
}
</style>
