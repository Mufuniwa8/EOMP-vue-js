<template>
  <div class=" background rounded-8">
    <div class="container-fluid py-5">
      <div class="text-center">
        <h1 class="display-5 p-5 text-fw-bold text-animation">
          <p class="heading-text">Resume</p>
        </h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 con-div">
            <h3 class="heading-text">Education</h3>
            <div v-for="educations in education" :key="educations.id">
              <ul>
                <li :style="'--accent-color:' + educations.color">
                  <div
                    class="date text-edu"
                    :class="{ 'text-black': educations.color == 'white' }"
                  >
                    {{ educations.year }}
                  </div>
                  <div id="1" class="descr">
                    <p class="text-edu">
                      {{ educations.desc }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 container">
            <h3 class="heading-text">My skills</h3>
            <div class="container">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                  <div
                    class="container skills skills-colu col-12 col-md-6 col-lg-6"
                  >
                    <div
                      class="row justify-content-evenly g-4"
                      v-for="skill in skills"
                      :key="skill.id"
                    >
                      <div>
                        <div class="col-12 col-md-6 col-lg-6 skill-container">
                          <img
                            class="container-project2"
                            :src="skill.image"
                            :alt="skill.title"
                          />
                          <div class="text-overlay3">
                            <h5 class="about-text">{{ skill.title }}</h5>
                            <p class="about-text">{{ skill.skill }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style>
.con-div {
  padding-right: 90px;
  width: 590px;
  /* border: 2xp solid white; */
}
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
  text-align: center;
  font-size: 90px;
  font-family: "Courier New", Courier, monospace;
}

.background {
  background-color: rgba(2, 48, 71, 1);
}
.text-edu {
  font-family: "Courier New", Courier, monospace;
  color: white;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  --col-gap: 10px;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
ul::before {
  /* content: ""; */
  grid-column: 1;
  grid-row: 1 / span 20;
  /* background: rgb(225, 225, 225); */
  border-radius: calc(var(--line-w) / 2);
}
ul::before {
  /* content: ""; */
  grid-column: 1;
  grid-row: 1 / span 20;
  /* background: rgb(225, 225, 225); */
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}
ul li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 20px;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
ul li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

ul li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
ul li .title::before,
ul li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
ul li .title::before {
  bottom: calc(100% + 0.125rem);
}

ul li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}
/* skills style */
.container-project2 {
  /* background-color: black; */
  width: 200px;
  height: 200px;
  padding: 10px;

  background-repeat: no-repeat;
  background-size: cover;
}
.about-text {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: white;
}
.skills-colu {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  gap: 10px;
  width: 150px;
}
.skill-container {
  height: 200px;
  margin: 20px;
  width: 200px;
}
.skills {
  padding: 5px;
  margin: 5px;
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

@media only screen and (max-width: 300px) {
  .skills-colu {
    display: grid;
    grid-template-columns: auto;
    padding: 5px;
    gap: 5px;
    width: 150px;
  }
  .heading-text {
  color: white;
  text-align: center;
  font-size: 40px;
  font-family: "Courier New", Courier, monospace;
}
}
@media only screen and (min-width: 700px) {
  .skills-colu {
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;
    gap: 10px;
    width: 150px;
  }
}
</style>
