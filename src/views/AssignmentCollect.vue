<template>
    <div class="body">
        <router-link to="/AssignmentMapel"><img src="@/assets/img/back.png"></router-link>
        <div class="body-body">
            <div class="body-header">Pengumpulan Tugas :</div>
            <div class="nickname">
                <img class="body-user" src="@/assets/img/userc.png">
                <div class="header-name"><input style="margin-left:10px; width: 260px;" type="text" placeholder="Sharen Alicia Ayugi" readonly="readonly"></div>
            </div>
            <div class="body-name">
                <div class="name-header">Judul</div>
                <div class="name-body"><input type="text" placeholder="Bahasa Indonesia bab 1 halaman 20" readonly="readonly"></div>
                <div class="name-header">Deadline</div>
                <div class="name-body"><input type="text" placeholder="7 Februari 2020" readonly="readonly"></div>
                <div style="margin-top:20px;" class="name-body"></div>
                <div class="new-box">
                    <router-link to=""><img style="margin-left: 5px;" src="@/assets/img/ata.png"></router-link>
                    <div class="body-tugas">Tugas Matematika Bab 1.docx</div>
                    <div style="padding-left: 21px; padding-top: 10px; font-weight: bold; color: #323237; font-size: 13px;">Description</div>
                    <textarea name="" id="" cols="46" rows="5"></textarea>
                    <div style="color: #B7D1E8">.</div>
                </div>
                <button class="body-button">Send</button>
            </div>
        </div>
        <img class="body-img" src="@/assets/img/tugasq.png">
    </div>
</template>

<style scoped lang="scss">
    .body{
        width: 100%;
        max-width: 100%;
        margin-left: 3%;
        height: 700px;
        font-family: sans-serif;
        background-color: rgba(235, 235, 235, 0.781);
    }
    .body-body{
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
        color: #4F596B;
        margin-left: 10px;
    }
    .header-name{
        font-weight: bold;
        font-size: 15px;
        margin-top: -60px;
        margin-left: 90px;
        margin-bottom: 30px;
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
        background-color: #6681A5;
    }
    .body-img{
        position: fixed;
        width: 100%;
        max-width: 45%;
        height: 700px;
        margin-left: 550px;
        margin-top: -660px;
    }
    .new-box{
        background-color: #C4BEF9;
        width: 350px;
        margin-left: 10px;
        border-radius: 10px;
    }
    .body-tugas{
        width: 100%;
        max-width: 90%;
        height: 27px;
        padding-left: 15px;
        border-radius: 15px;
        background-color: #B7D1E8;
        color: #1E1480;
        font-weight: bold;
        padding-top: 4px;
        font-size: 13px;
        margin-bottom: 5px;
        margin-left: 20px;
        margin-top: 10px;
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
    textarea {
        background-color: white;
        border: solid white;
        font-family: sans-serif;
        font-size: 12px;
        width: 320px;
        margin-left: 15px;
        margin-top: 10px;
        border-radius: 12px;
    }
</style>