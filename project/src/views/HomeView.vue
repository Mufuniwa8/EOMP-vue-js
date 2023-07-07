<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->


   

  

<div class=" background rounded-8 ">
      <div class="container-fluid  py-5">
        <div class="text-center">
          <h1 class="display-5 p-5 text-fw-bold text-animation">
            <p class="heading-text">Home</p>
          </h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
              <img
                src="https://i.postimg.cc/pdNMQHrN/C12-Mufuniwa-Mbedzi-1.jpg"
                alt=""
                class="home-image"
              />
            </div>
            <div class="col-6">
              <div class="container2">
                <h1 class="title">
                  <p class="Home-text">My name is Mufuniwa Mbedzi, im a young aspiring fullstack
                  developer</p>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.text-animation {
  overflow: hidden;
  animation: typing 3s backwards;
  white-space: nowrap;
  font-size: 90px;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.heading-text {
  color: white;
  font-size: 90px;
  font-family: 'Courier New', Courier, monospace;
}
.Home-text {
  color: white;
  font-size: 50px;
  font-family: 'Courier New', Courier, monospace;
}

.title {
  padding-top: 20%;
}
.home-image {
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 5px 5px rgba(18, 31, 147, 1);
}
.background {
  background-color: rgba(2, 48, 71, 1);
}
@media only screen and (max-width: 300px) {
  .home-image {
  width: 250px;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 5px 5px rgba(18, 31, 147, 1);
}
.heading-text {
  color: white;
  font-size: 40px;
  font-family: "Courier New", Courier, monospace;
}
}
@media only screen and (min-width: 700px) {
  .home-image {
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 5px 5px rgba(18, 31, 147, 1);
}
}
</style>
