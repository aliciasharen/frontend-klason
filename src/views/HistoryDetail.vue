<template>
    <div class="body">
        <router-link to="/History"><img src="@/assets/img/back.png"></router-link>
        <div class="body-body">
            <div class="body-header">Detail Riwayat</div>
            <div class="body-name">
                <div class="name-header">Mata Pelajaran</div>
                <div class="name-body"><input type="text" placeholder="Matematika" readonly="readonly"></div>
                <div class="name-header">Nama Guru</div>
                <div class="name-body"><input type="text" placeholder="Ruslan S.Pd" readonly="readonly"></div>
                <div class="name-header">Detail Tugas</div>
                <div class="name-body"><input type="text" placeholder="Paket Matematika Bab1 Halaman2 (nomor 1,2)" readonly="readonly"></div>
                <div class="name-header">Deadline Tugas</div>
                <div class="name-body"><input type="text" placeholder="7 February 2020" readonly="readonly"></div>
                <div class="name-header">Mengumpulkan Tugas</div>
                <div class="name-body"><input type="text" placeholder="5 February 2020" readonly="readonly"></div>
                <div class="name-header">Waktu Mengumpulkan Tugas</div>
                <div class="name-body"><input type="text" placeholder="09:00" readonly="readonly"></div>
                <div class="name-header">Nilai</div>
                <div class="name-body"><input type="text" placeholder="80" readonly="readonly"></div>
                <div class="media-header">
                    <div>Nama: Sharen Alicia Ayugi</div>
                    <div>Kelas: XI RPL2</div>
                    <div class="media-body">Matematika Bab1.docs</div>
                </div>
            </div>
        </div>
        <img class="body-img" src="@/assets/img/riwayate.png">
    </div>
</template>

<style scoped lang="scss">
    .body{
        width: 100%;
        max-width: 80%;
        margin-left: 4%;
        font-family: sans-serif;
    }
    .body-body{
        background-color: white;
        width: 100%;
        max-width: 50%;
        height: auto;
        margin: 30px;
    }
    .body-user{
        width: 100%;
        max-width: 20%;
    }
    .body-photo{
        width: 100%;
        max-width: 10%;
        margin-left: -40px;
        margin-top: 40px;
    }
    .body-header{
        font-size: 20px;
        font-weight: bold;
        color: #535E6D;
        margin-left: 100px;
        margin-bottom: 40px;
    }
    .header-name{
        font-weight: bold;
        font-size: 15px;
        margin-top: -60px;
        margin-left: 90px;
        color: #535E6D;
    }
    .header-class{
        font-size: 14px;
        margin-left: 92px;
        color: #535E6D;
    }
    .name-header{
        font-weight: bold;
        color: rgba(0, 0, 0, 0.219);
        margin-top: 12px;
        margin-left: 10px;
    }
    .name-body{
        margin-left: 10px;
    }
    .body-button{
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
        background-image: linear-gradient(rgb(176, 0, 230), rgb(153, 1, 199));
    }
    .body-img{
        position: fixed;
        width: 100%;
        max-width: 45%;
        height: 750px;
        margin-left: 550px;
        margin-top: -750px;
    }
    .media-header{
        background-color: #CFD1E5;
        color: #535E6D;
        font-weight: bold;
        padding-left: 20px;
        width: 100%;
        max-width: 350px;
        height: 100px;
        margin-left: 10px;
        margin-top: 40px;
        padding-top: 40px;
        font-size: 13px;
        border-radius: 12px;
    }
    .media-body{
        background-color: white;
        width: 100%;
        max-width: 330px;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;
        padding-top: 5px;
        color: blue;
        font-size: 14px;
        margin-left: -10px;
        margin-top: -70px;
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
        border-color: rgb(117, 117, 117)
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