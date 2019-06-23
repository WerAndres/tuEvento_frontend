<template>
  <div>
    <header v-if="$route.meta.showNavigation" class="app-header">
      <menuPrin></menuPrin>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MenuPrin from './components/MenuPrin'

export default {
  components: {
    MenuPrin
  }
}
</script>

<style>
#app {

}
.navbar-brand:hover{
  cursor: pointer;
}
nav.bg-info {
    background: #21375f !important;
}
.centrar {
     margin-left: auto;
     margin-right: auto;
     display: block;
     text-align: center;
}
div h3 span{
     color : #FFF;
     font-size:14px;
}
div span {
     font-weight: 200;
}
h1{
     font-weight: 200;
}
.login_box{
    background: #21375f; /* Old browsers */
    /* IE9 SVG, needs conditional override of 'filter' to 'none' */
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZjMyZDI3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iOTklIiBzdG9wLWNvbG9yPSIjZmY2YjQ1IiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);
    background: -moz-linear-gradient(45deg,  #21375f 5%, #10264e 99%); /* FF3.6+ */
    background: -webkit-gradient(linear, left bottom, right top, color-stop(5%,#21375f), color-stop(99%,#10264e)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(45deg,  #21375f 5%,#10264e 99%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(45deg,  #21375f 5%,#10264e 99%); /* Opera 11.10+ */
    background: -ms-linear-gradient(45deg,  #21375f 5%,#10264e 99%); /* IE10+ */
    background: linear-gradient(45deg,  #21375f 5%,#10264e 99%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#21375f', endColorstr='#10264e',GradientType=1 ); /* IE6-8 fallback on horizontal gradient */

    width:35%;
   /* height:70%; */
    position:absolute;
    top:5%;
    left:32.5%;

    -webkit-box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54);
-moz-box-shadow:    0px 0px 8px 0px rgba(50, 50, 50, 0.54);
box-shadow:         0px 0px 8px 0px rgba(50, 50, 50, 0.54);
}
@media (max-width: 767px) {
    .login_box{
        background: #21375f; /* Old browsers */
        /* IE9 SVG, needs conditional override of 'filter' to 'none' */
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZjMyZDI3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iOTklIiBzdG9wLWNvbG9yPSIjZmY2YjQ1IiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);
        background: -moz-linear-gradient(45deg,  #21375f 5%, #10264e 99%); /* FF3.6+ */
        background: -webkit-gradient(linear, left bottom, right top, color-stop(5%,#21375f), color-stop(99%,#10264e)); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(45deg,  #21375f 5%,#10264e 99%); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(45deg,  #21375f 5%,#10264e 99%); /* Opera 11.10+ */
        background: -ms-linear-gradient(45deg,  #21375f 5%,#10264e 99%); /* IE10+ */
        background: linear-gradient(45deg,  #21375f 5%,#10264e 99%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#21375f', endColorstr='#10264e',GradientType=1 ); /* IE6-8 fallback on horizontal gradient */

        width:90%;
        height:80%;
        position:absolute;
        top:10%;
        left:10%;

        -webkit-box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54);
-moz-box-shadow:    0px 0px 8px 0px rgba(50, 50, 50, 0.54);
box-shadow:         0px 0px 8px 0px rgba(50, 50, 50, 0.54);
    }
}
.image-circle{
    border-radius: 50%;
    width: 175px;
    height: 175px;
    border: 4px solid #FFF;
    margin: 10px;
}
.login_control{
    background-color:#FFF;
    padding:15px;

}
.control {
    color:#000;
    margin:10px;
}
.label {
    color: #142b52;
    font-size: 15px;
    font-weight: 500;
}
.form-control{
    color: #000000 !important;
    font-size: 18px;
    border: none;
    padding: 15px;
    padding-left: 10px;
    border-bottom: 1px solid #CCC;
    outline: none;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
    width: calc(100% - 30px);
}
.form-control:focus{
    border-radius: 0px;
    border-bottom: 1px solid #1b4182;
    margin-bottom: 10px;
    outline: none;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
}
.btn{
    margin: 5px;
    padding: 5px;
    width: 150px;
    font-size: 15px;
    font-weight: inherit;
    color: #FFF;
}
.btn-blue{
  background-color: #1b4182 !important;
  color: #FAFAFA !important;
}
.btn-red{
  background-color: #a11b1b !important;
  color: #FAFAFA !important;
}
.btn:hover {
    margin: 5px;
    padding: 5px;
    width: 150px;
    font-size: 18px;
    font-weight: inherit;
    color:#FFF !important;
    cursor: pointer;
}
.btn-blue:hover {
  background-color: #10264e;
}
.btn-red:hover {
  background-color: #690c0c;
}
.line{
    border-bottom : 2px solid #21375f;
}
.outter{
    padding: 0px;
    border: 1px solid rgba(255, 255, 255, 0.29);
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background: #0f0838;
    margin: 10px;
}
.background{
    position: fixed;
    width: 102%;
    background: #010e25;
    height: 110vh;
}
.buttonDiv{
  display: inline-block;
}
.buttonDiv div{
  float: left;
}
.vdp-datepicker input {
    border: none;
    font-size: 18px;
}
.titlebox{
  color: rgb(250, 250, 250);
  padding: 10px 5px 5px 5px;
}
form .error {
  font-size: 12px;
  color: #f00;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  padding: 5px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
.modal-body div{
  float: left;
  max-width: 20%;
}
.modal-body p {
    float: left;
    max-width: 80%;
    margin: 0px !important;
    margin-left: 20px !important;
    margin-top: 10px !important;
}
.modal-body {
    display: inline-block;
}
.containerFontAwesome.errorFA{
  color: #F00;
}
.containerFontAwesome.okFA{
  color: #079a44;
}
.containerFontAwesome.btnFA{
  color: #21375e;
}
.containerFontAwesome.btnFA:hover{
  color: #4383f5;
  cursor: pointer;
}
.containerFontAwesome.largeFA{
  font-size: 50px;
}
.containerFontAwesome.smallFA {
  font-size: 17px;
}
.containerFontAwesome.smallFA:hover{
  font-size: 18px;
}
.titleBox{
    padding: 10px;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    background: #29a1d4;
    color: #FAFAFA;
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
}
.containerEventos {
    padding: 10px;
    background: #F0F0F0;
    margin: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
    overflow: auto;
}
</style>
