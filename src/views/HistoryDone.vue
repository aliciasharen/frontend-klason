<template>
    <div class="body">
        <router-link to="/History"><img src="@/assets/img/back.png"></router-link>
        <div style="padding-top: 50px;" class="body-header">
            <b>Riwayat Saya</b>
            <div>Tugas Selesai</div>
            <div class="subheader-body">14</div>
        </div>
        <ul>
            <div class="body-body">
                <img src="@/assets/img/user1.png">
                <div class="header-text">
                    <b style="color: rgb(100, 100, 100);">Ruslan Spd</b>
                    <br>Matematika Bab 1<br>
                    <img src="@/assets/img/calendar.png">
                    Feb 6,2020
                    <img style="margin-top: -2px; margin-left: 3px;" src="@/assets/img/time.png">
                    1:20 PM
                </div>
                <router-link to="/HistoryDetail"><div class="body-tugas">Tugas Matematika Bab 1.docx</div>
                <div class="task-blue">Selesai
                    <img style="width: 25px; margin-left: 15px; margin-top: -4px;" src="@/assets/img/acc.png">
                </div></router-link>
                <div style="color: white;">.</div>
            </div>
            <div class="body-body">
                <img src="@/assets/img/user1.png">
                <div class="header-text">
                    <b style="color: rgb(100, 100, 100);">Ruslan Spd</b>
                    <br>Matematika Bab 1<br>
                    <img src="@/assets/img/calendar.png">
                    Feb 6,2020
                    <img style="margin-top: -2px; margin-left: 3px;" src="@/assets/img/time.png">
                    1:20 PM
                </div>
                <router-link to="/HistoryDetail"><div class="body-tugas">Tugas Matematika Bab 1.docx</div>
                <div class="task-blue">Selesai
                    <img style="width: 25px; margin-left: 15px; margin-top: -4px;" src="@/assets/img/acc.png">
                </div></router-link>
                <div style="color: white;">.</div>
            </div>
            <div class="body-body">
                <img src="@/assets/img/user1.png">
                <div class="header-text">
                    <b style="color: rgb(100, 100, 100);">Ruslan Spd</b>
                    <br>Matematika Bab 1<br>
                    <img src="@/assets/img/calendar.png">
                    Feb 6,2020
                    <img style="margin-top: -2px; margin-left: 3px;" src="@/assets/img/time.png">
                    1:20 PM
                </div>
                <router-link to="/HistoryDetail"><div class="body-tugas">Tugas Matematika Bab 1.docx</div>
                <div class="task-blue">Selesai
                    <img style="width: 25px; margin-left: 15px; margin-top: -4px;" src="@/assets/img/acc.png">
                </div></router-link>
                <div style="color: white;">.</div>
            </div>
        </ul>
        <img class="body-img" src="@/assets/img/riwayatq.svg">
        <div style="color: rgba(235, 235, 235, 0.781)">.</div>
    </div>
</template>

<style scoped lang="scss">
    .body{
        width: 113.8%;
        max-width: 113.8%;
        margin-left: 2.9%;
        font-family: sans-serif;
        background-color: rgba(235, 235, 235, 0.781)
    }
    .body-body{
        width: 100%;
        max-width: 50%;
        background-color: white;
        border-radius: 12px;
        margin-left: 6.5%;
        padding-left: 10px;
        padding-top: 10px;
        margin-bottom: 20px;
    }
    .body-header{
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
        color: #979797c4;
        margin-bottom: 20px;
    }
    .body-subheader{
        background-color: white;
        width: 100%;
        max-width: 17%;
        height: 70px;
        border-radius: 12px;
        margin-top: -30px;
        margin-left: 170px;
        margin-bottom: -70px;
        box-shadow: 0px 2px 4px 0px rgb(185, 185, 185);
        margin-bottom: 55px
    }
    .subheader-header{
        padding: 10px;
        font-weight: bold;
        color: #535E6D;
    }
    .subheader-body{
        padding-left: 220px;
        margin-top: -50px;
        font-size: 40px;
        font-weight: bold;
        color: #08387A;
    }
    .header-text{
        width: 100%;
        height: auto;
        margin-left: 50px;
        margin-top: -45px;
        font-family: sans-serif;
        font-size: 11px;
        color: rgb(153, 153, 153);
        margin-bottom: 20px;
    }
    .body-tugas{
        width: 100%;
        max-width: 60%;
        height: 27px;
        padding-left: 15px;
        border-radius: 15px;
        background-color: #DED7F9;
        color: #1E1480;
        font-weight: bold;
        padding-top: 4px;
        font-size: 13px;
        margin-bottom: 5px;
    }
    .body-tugas2{
        width: 100%;
        max-width: 60%;
        height: 27px;
        padding-left: 15px;
        border-radius: 15px;
        background-color: #F38E8E;
        padding-top: 4px;
        font-size: 13px;
        margin-bottom: 5px;
    }
    .tugas-icon{
        width: 100%;
        max-width: 8.5%;
        height: 21px;
        border-radius: 15px;
        padding-left: 7px;
        padding-top: 0px;
        margin-left: 285px;
        margin-top: -20px;
        background-color: #3C2DD1;
        color: white;
        font-size: 14px;
        font-weight: bold;
    }
    .task-blue{
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
    .task-red{
        width: 100%;
        max-width: 25%;
        height: 27px;
        padding-left: 40px;
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
    .body-img{
        margin-left: 800px;
        margin-top: -1060px;
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