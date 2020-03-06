<template>
  <div class="body" id="profil">
    <router-link to="/"><img src="@/assets/img/back.png"/></router-link>
    <div class="body-body">
      <div class="body-header">Klason</div>
      <div class="nickname">
        <router-link to=""
          ><img class="body-user" src="@/assets/img/userc.png"/>
          <img class="body-photo" src="@/assets/img/Photo.png"
        /></router-link>

        <div class="header-name">{{ nama }}</div>
        <div class="header-class">{{ nip }}</div>
      </div>
      <div class="body-name">
        <div class="name-header">Nama</div>
        <div class="name-body">
          <input type="text" v-model="nama" readonly="readonly" />
        </div>
        <div class="name-header">Nip</div>
        <div class="name-body">
          <input type="text" v-model="nip" readonly="readonly" />
        </div>
        <div class="name-header">Nomor Hp</div>
        <div class="name-body">
          <input type="text" v-model="hp" />
        </div>
        <div class="name-header">Email</div>
        <div class="name-body">
          <input type="text" v-model="email" />
        </div>
        <div class="name-header">Jabatan</div>
        <div class="name-body">
          <input type="text" v-model="jabatan" readonly="readonly" />
        </div>
        <button class="body-button" @click="updateProfile">Update</button>
      </div>
    </div>
    <img class="body-img" src="@/assets/img/profile.svg" />
  </div>
</template>

<script>
import axios from "axios";
let AuthStr = `Bearer ${localStorage.getItem("token")}`;

export default {
  name: "profil",
  data() {
    return {
      nama: "",
      nip: "",
      hp: "",
      email: "",
      jabatan: ""
    };
  },
  methods: {
    updateProfile() {
      axios
        .post(
          "http://127.0.0.1:8000/api/guru/update-profile",
          { no_hp: this.hp },
          {
            headers: {
              Authorization: AuthStr
            }
          }
        )
        .then(res => {
          console.log(res);
          console.log(AuthStr);
          console.log(res.data);
        })
        .catch(error => {
          console.log("error 3 " + error);
        });
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/guru/profil-guru", {
        headers: {
          Authorization: AuthStr,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        var x = response.data.data;

        this.nama = x.nama_depan + " " + x.nama_belakang;
        this.nip = x.nip;
        this.hp = x.no_hp;
        this.email = x.email;
        this.jabatan = x.jabatan;
      })
      .catch(error => {
        console.log("error 3 " + error);
      });
  }
};
</script>

<style scoped lang="scss">
.body {
  width: 100%;
  max-width: 80%;
  margin-left: 4%;
  font-family: sans-serif;
}
.body-body {
  background-color: white;
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
  font-size: 17px;
  font-weight: bold;
  color: #2b4d9d;
  margin-left: 10px;
}
.header-name {
  font-weight: bold;
  font-size: 15px;
  margin-top: -60px;
  margin-left: 90px;
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
  margin-top: 30px;
  width: 100%;
  max-width: 90px;
  height: 100%;
  max-height: 100px;
  margin-left: 270px;
  border-radius: 12px;
  border: 0px;
  font-size: 18px;
  padding-bottom: 2px;
  font-weight: bold;
  color: white;
  box-shadow: 0px 1px 4px 0px grey;
  background-color: #2b4d9d;
}
.body-img {
  position: fixed;
  width: 100%;
  max-width: 52%;
  height: 700px;
  margin-left: 450px;
  margin-top: -580px;
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
