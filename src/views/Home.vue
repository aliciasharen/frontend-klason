<template>
    <div class="body">
        <ul style="margin-top: 50px; margin-left: 70px;">
            <div class="header-body1">
                <div>Kelas</div>
                <div style="float: right; font-size: 30px;">3</div>
            </div>
            <div class="header-body2">
                <div>Siswa</div>
                <div style="float: right; font-size: 30px; margin-top: -42px;">300</div>
            </div>
            <div class="header-body3">
                <div>Tugas Selesai</div>
                <div style="float: right; font-size: 30px; margin-top: -42px;">30</div>
            </div>
            <div class="header-body4">
                <div>Tugas Belum</div>
                <div style="float: right; font-size: 30px; margin-top: -42px;">10</div>
            </div>
        </ul>
        <div style="margin-left: 110px;" class="body-body">
            <div class="body-header">Task Progress</div>
            <hr>
            <ul>
                <div class="body-bodys">
                    <div class="bodys-header">Matematika hal 1 bab 2 Rpl 2</div>
                    <div class="bodys-percent">2/20</div>
                    <div class="bodys-animation"></div>
                    <img class="bodys-img" src="@/assets/img/continue.png">
                    <div class="bodys-header">Matematika hal 1 bab 2 Rpl 2</div>
                    <div class="bodys-percent">3/4</div>
                    <div class="bodys-animation"></div>
                    <img class="bodys-img" src="@/assets/img/continue.png">
                    <div class="bodys-header">Matematika hal 1 bab 2 Rpl 2</div>
                    <div class="bodys-percent">10/20</div>
                    <div class="bodys-animation"></div>
                    <img class="bodys-img" src="@/assets/img/continue.png">
                    <div style="margin-bottom: -415px;">.</div>
                </div>
            </ul>
        </div>
        <div style="margin-top: -50px;" class="profile">
            <div class="profile-header">
                <div class="header-name">Hi, Umi Amiarso</div>
                <div class="header-body">119199191919191</div>
                <img class="header-img" src="@/assets/img/userc.png">
            </div>
            <div class="profile-body">
                <div class="body-header1">Kelas</div>
                <div class="body-header2" style="color: white;">.</div>
                <ul>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL1</div>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL2</div>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL3</div>
                </ul>
            </div>
            <div class="profile-body">
                <div class="body-header1">Tugas</div>
                <div class="body-header2">View All</div>
                <ul>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL1</div>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL2</div>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL3</div>
                </ul>
            </div>
            <div class="profile-body">
                <div class="body-header1">Input Nilai</div>
                <div class="body-header2">View All</div>
                <ul>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL1 Matematika bab 1</div>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL2 Matematika bab 1</div>
                    <div class="body-body1">.</div>
                    <div class="body-body2">X RPL3 Matematika bab 1</div>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.body{
    width: 100%;
    max-width: 80%;
    margin-left: 5%;
    padding-top: 20px;
    font-family: sans-serif;
}
.header-body1{
    width: 100%;
    max-width: 20%;
    height: 90px;
    border-radius: 10px;
    padding: 15px;
    background-image: linear-gradient(#202a86, #4c49f0);
    color: white;
    font-weight: bold;
}
.header-body2{
    width: 100%;
    max-width: 20%;
    height: 90px;
    border-radius: 10px;
    padding: 14px;
    margin-left: 180px;
    margin-top: -89px;
    background-image: linear-gradient(#202a86, #4c49f0);
    color: white;
    font-weight: bold;
}
.header-body3{
    width: 100%;
    max-width: 20%;
    height: 90px;
    border-radius: 10px;
    padding: 14px;
    margin-left: 360px;
    margin-top: -90px;
    background-image: linear-gradient(#202a86, #4c49f0);
    color: white;
    font-weight: bold;
}
.header-body4{
    width: 100%;
    max-width: 20%;
    height: 90px;
    border-radius: 10px;
    padding: 14px;
    margin-left: 540px;
    margin-top: -90px;
    margin-bottom: 40px;
    background-image: linear-gradient(#202a86, #4c49f0);
    color: white;
    font-weight: bold;
}
.body-body{
    width: 100%;
    max-width: 83%;
    margin-left: 40px;
    box-shadow: 0px 1px 4px 0px grey;
}
.body-header{
    font-weight: bold;
    color: #878787;
    padding: 10px;
}
.bodys-header{
    margin-left: -25px;
    margin-bottom: -24px;
    color: #878787;
    font-weight: bold;
}
.bodys-percent{
    margin-left: 240px;
    color: #636363;
    font-weight: bold;
}
.bodys-animation{
    width: 100%;
    max-width: 33%;
    height: 5px;
    border-radius: 10px;
    background-image: linear-gradient(to right, #4c49f0 , #202a86, #878787, #636363);
    margin-left: -25px;
    margin-bottom: -30px;
}
.bodys-img{
    margin-left: 537px;
    margin-bottom: 20px;
}
.profile{
    position: fixed;
    width: 214px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 4px 0px grey;
    margin-left: 930px;
}
.profile-header{
    background-image: linear-gradient(#202a86, #4c49f0);
    margin: 10px;
    border-radius: 10px;
}
.header-name{
    color: white;
    padding: 15px;
    font-size: 14px;
}
.header-body{
    color: white;
    margin-top: -10px;
    padding-left: 8px;
    font-size: 14px;
    margin-bottom: -62px;
}
.header-img{
    width: 80px;
    margin-left: 120px;
}
.body-header1{
    font-weight: bold;
    font-size: 14px;
    padding: 10px;
    margin-bottom: -40px;
}
.body-header2{
    color: grey;
    font-size: 12px;
    padding-top: 11px;
    padding-left: 160px;
}
.body-body1{
    width: 190px;
    margin-left: -30px;
    margin-top: 10px;
    margin-bottom: -24px;
    color: #ACC2E1;
    background-color: #ACC2E1;
}
.body-body2{
    width: 190px;
    height: 24px;
    padding: 4px;
    font-weight: bold;
    padding-left: 10px;
    font-size: 12px;
    margin-left: -24px;
    background-color: #DDE6F3;
    color: #154281;
    margin-bottom: 10px;
}
hr{
    width: 100%;
    max-width: 96%;
    border: solid 0.5px #707070;
    margin-top: 0px;
    margin-bottom: 10px;
}
</style>
