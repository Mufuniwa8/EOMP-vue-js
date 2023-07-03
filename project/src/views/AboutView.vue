<template>
  <div class="mb-5 background rounded-8">
    <div class="container-fluid py-5">
      <div class="text-center">
        <h1 class="display-5 p-5 text-fw-bold text-animation">
          <p class="heading-text">About</p>
        </h1>
      </div>
      <div class="container">
        <div class="row row-cols-2">
          <div class="col-12 col-md-6 col-lg-6">
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://i.postimg.cc/5yBNyRLQ/IMG-0560.jpg"
                    alt="..."
                    class="about-img"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Welcome to my slide show</h5>
                    <p class="about-text">
                      Welcome to my slide show where you get<br />
                      to learn about Mufuniwa's Life outside coding.
                    </p>
                  </div>
                </div>
                <div class="carousel-item active">
                  <img
                    src="https://i.postimg.cc/qMhyp8ms/IMG-0561.jpg"
                    alt="..."
                    class="about-img"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <p class="about-text">
                      I sometimes take photos when i <br />have nothing to do
                      and im starting to like it.
                    </p>
                  </div>
                </div>
                <div class="carousel-item active">
                  <img
                    src="https://i.postimg.cc/rmqyPLHn/IMG-1603.jpg"
                    alt="..."
                    class="about-img"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <p class="about-text">
                      I play Football as a hobby. Tuesday<br />
                      and Thursdays are days of training then on <br />Saturdays
                      is mostly match days.
                    </p>
                  </div>
                </div>
                <div class="carousel-item active">
                  <img
                    src="https://i.postimg.cc/QMfpYZkX/HQSY1794.jpg"
                    alt="..."
                    class="about-img"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <p class="about-text">
                      Outside everything i like taking<br />
                      trips with my family which i enjoy a lot.
                    </p>
                  </div>
                </div>
                <div class="carousel-item active">
                  <img
                    src="https://i.postimg.cc/zD64290S/IMG-0197.jpg"
                    alt="..."
                    class="about-img"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h3 class="about-text">End of my Slideshow</h3>
                    <p class="about-text">
                      Thank you for coming this.<br />
                      Hope you enjoyed my Slideshow😊<br />
                      and stay blessed.
                    </p>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="text-center">
              <h3 class="display-5 text-fw-bold about text-animation">
                My Bio
              </h3>
            </div>
            <p class="about-text">
              Im Mufuniwa Mbedzi Born in Limpopo (Venda)Then raised in Pretoria
              where i spent the rest of my childhood. Through out my primary and
              high school years i was involved in most of the school sports
              activities which i enjoyed doing in primary school i was also
              involve in the school Scholar Patrol
            </p>
            <div>
              <p class="about-text">Place of Birth: Elima Venda</p>
              <p class="about-text">Date of Birth: 2003 February 08</p>
              <p class="about-text">Raised: Pretoria (Mamelodi)</p>
              <p class="about-text">Current address: Cape Town</p>
              <p class="about-text">Contact: 082 345 6787</p>
              <p class="about-text">email: mufuniwambedzi@gmail.com</p>
            </div>
          </div>
       <!---end of container--->
        </div>
      </div>
                <div class="container skills ">
            <div class="row justify-content-evenly g-4">
              <h2 class="heading-text">My skills</h2>
              <div class="col-12 col--md-6 col-lg-3">
                <img
                  class="container-project2"
                  src="https://i.postimg.cc/kgrgHzL3/bootstrap-plain-wordmark-logo-icon-146620.png"
                  alt=""
                />
                <div class="text-overlay3">
                  <h5 class="about-text">Bootstrap</h5>
                  <p class="about-text">Skilled</p>
                  <div class="h3 text-center about-text">90%</div>
                  <div
                    class="progress w-100"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="90%"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      style="width: 90%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col--md-6 col-lg-3">
                <img
                  class="container-project2"
                  src="https://i.postimg.cc/vTf83mPg/Java-Script-Symbol.png"
                  alt=""
                />
                <div class="text-overlay3">
                  <h5 class="about-text">Java Script</h5>
                  <p class="about-text">Skilled</p>
                  <div class="h3 text-center about-text">60%</div>
                  <div
                    class="progress w-100"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="60%"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      style="width: 60%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col--md-6 col-lg-3">
                <img
                  class="container-project2"
                  src="https://i.postimg.cc/sDDsBySJ/HTML5-1-Color-Black.png"
                  alt=""
                />
                <div class="text-overlay3">
                  <h5 class="about-text">HTML</h5>
                  <p class="about-text">Skilled</p>
                  <div class="h3 text-center about-text">78%</div>
                  <div
                    class="progress w-100"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="78%"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      style="width: 78%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col--md-6 col-lg-3">
                <img
                  class="container-project2"
                  src="https://i.postimg.cc/2y39x24c/css3-logo-png-transparent.png"
                  alt=""
                />
                <div class="text-overlay3">
                  <h5 class="about-text">CSS</h5>
                  <p class="about-text">Skilled</p>
                  <div class="h3 text-center about-text">86%</div>
                  <div
                    class="progress w-100"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="86%"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      style="width: 86%"
                    ></div>
                  </div>
                </div>
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
.about-img {
  width: 550px;
  height: 550px;
  object-fit: cover;
}
.skills {
  padding: 5px;
  margin: 5px;
}
.conatainer {
  width:200px;
  height:auto;
}

.container-project2 {
 
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.about {
  color: white;
  font-family: "Courier New", Courier, monospace;
}
.about-text {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: white;
}

.container-project2 {
  /* background-color: black; */
  width: 200px;
  height: 200px;
  padding: 10px;

  background-repeat: no-repeat;
  background-size: cover;
}
.text-overlay3 {
  
  width: 200px;
  height: 200px;
  position: relative;
  top: -200px;
  display: flex;
  flex-direction: column;
  /* Text Positioning */
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: rgba(18, 31, 147, 1);
  color: white;
  opacity: 0;
  transition: 1s;
}
.text-overlay3:hover {
  opacity: 1;
}

.background {
  background-color: rgba(2, 48, 71, 1);
}
</style>
