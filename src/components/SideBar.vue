<template>
<div class="sidebar">
  <div class="body">
    <a>
      <ul><router-link to=""><img src="" alt=""></router-link></ul>
      <ul><router-link to="/"><img class="body-img" src="@/assets/img/dashboard.png">Dashboard</router-link></ul>
      <ul><router-link to="/Class"><img class="body-img" src="@/assets/img/dashboard.png">Kelas Saya</router-link></ul>
      <ul><router-link to="/Assignment"><img class="body-img" src="@/assets/img/brain.png">Tugas Saya</router-link></ul>
      <ul><router-link to="/CreateAssigment"><img style="margin-right: 7px;" class="body-img" src="@/assets/img/create.png">Buat Tugas</router-link></ul>
      <ul><router-link to="/History"><img style="margin-right: 7px;" class="body-img" src="@/assets/img/history.png">Riwayat</router-link></ul>
      <ul><router-link to="/Profile"><img style="margin-right: 7px;" class="body-img" src="@/assets/img/user.png">Akun Saya</router-link></ul>
      <ul><router-link to=""><img style="margin-right: 7px;" class="body-img" src="@/assets/img/logout.png">Logout</router-link></ul>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
    .sidebar{
       width: 100%;
       max-width: 200px;
       height: 100%;
       font-size: 18px;
       font-family: sans-serif;
       font-weight: bold;
       position: fixed;
       background-color: #2B4D9D;
       margin-left: -171px;
    }
    .body-img{
       width: 100%;
       max-width: 23px;
       height: 100%;
       margin-right: 5px;
       margin-top: 5px;
       margin-bottom: 10px;
       color: #fff;
    }    
    a {
      color: rgba(255, 255, 255, 0.568);
    }
    a:hover {
      color: rgb(255, 255, 255);
      text-decoration: none;
    }
</style>

