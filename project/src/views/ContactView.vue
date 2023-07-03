<template>
  <div class="mb-5 background rounded-8">
    <div class="container-fluid py-5">
      <div class="text-center">
        <h1 class="display-5 p-5 text-fw-bold text-animation">
          <p class="heading-text">Contact</p>
        </h1>
      </div>
      <div class="container contact">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6">
            <!--  -->
            <form action="https://formspree.io/f/mzblpqqg" method="POST">
              <input
                class="input"
                v-model="text"
                placeholder="Firstname"
                required
              />
              <input
                class="input"
                v-model="text"
                placeholder="Secondname"
                required
              />
              <input
                class="input"
                v-model="text"
                placeholder="email.gmail.com"
                required
              />

              <textarea
                class="msg"
                name="message"
                placeholder="Leave message"
              ></textarea>

              <button class="contact-btn" type="submit">Submit</button>
            </form>
            <!--  -->
          </div>
          <div class="col-6">
            <p class="text-start contact-text">Location: Cape Town</p>
            <p class="text-start contact-text">Tel: 021 455 6908 </p>
            <p class="text-start contact-text">Email: mufuniwawebdev@gmail.com</p>
            <p class="text-start contact-text">Whats App cell: 082 345 6787</p>
            <p class="text-start contact-text">Instagram: Bychance@_Mbedzi</p>
            <img class=" text-start contact-img" src="https://i.postimg.cc/fb7R5rkW/Screenshot-2023-07-03-162214.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  font-family: "Courier New", Courier, monospace;
}
.Home-text {
  color: white;
  font-size: 50px;
  font-family: "Courier New", Courier, monospace;
}
.contact {
  background: rgba(18, 31, 147, 1);
  height: 500px;
  width: 900px;
  box-shadow: 5px 5px;
  border-radius: 20px;
}
.contact-img {
  width: 200px;
  height: 200px;
  /* margin-left: 120px; */
}
.input {
  border: 4px solid rgba(18, 31, 147, 1);
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  margin: 5px;
  margin-top: 50px;
  display: grid;
  box-shadow: 5px 5px;
}
.msg {
  border: 4px solid rgba(18, 31, 147, 1);
  border-radius: 20px;
  box-shadow: 5px 5px;
  margin: 5px;
  height: 100px;
  width: 260px;
}
.contact-text {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: white;
  margin-top: 20px;
}
.contact-btn {
  border: 3px solid rgba(18, 31, 147, 1);
  border-radius: 20px;
  margin: 5px;
  box-shadow: 3px 3px;
  transition: 1s;
}
.contact-btn:hover {
  transition: 1s;
  color: white;
  background-color: rgba(18, 31, 147, 1);
}

.background {
  background-color: rgba(2, 48, 71, 1);
}
</style>
