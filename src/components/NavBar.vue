<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="margin-left: -35px; margin-top: 20px;margin-bottom: 20px;background-color: #white;">
    <div class="bar">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <a class="nav-link" href="#">Klason</a>
          </li>
          <li class="nav-item active">
              <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
              <a class="nav-link"><router-link to="/Class">Kelas</router-link></a>
          </li>
          <li class="nav-item">
              <a class="nav-link"><router-link to="/Assigment">Tugas</router-link></a>
          </li>
          <li class="nav-item">
              <a class="nav-link"><router-link to="/Riwayat">Riwayat</router-link></a>
          </li>
          </ul>
    <div class="search">
          <form class="form-inline my-2 my-lg-0">
          <input style="background-color: #a2bacaad; border-radius: 15px; color: blue;" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <img style="width:60px; height:50px; margin-left: -10px;" src="@/assets/img/bell.png">
          </form>
      </div>
      </div>
    </div>
  </nav> 
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
    .bar{
        box-shadow: 1px 1px 1px 0.5px rgb(226, 226, 226); 
        margin-left: 18.5px;
        font-size: 20px;
        font-weight: bold;
        position: fixed;
        width: 100%;
        background-color: white;
    }
    .search{
        margin: 5px 0px 0px 626.8px;
    }
    li a{  
        text-decoration: none;
        color: rgb(73, 73, 73);
    }
</style>

