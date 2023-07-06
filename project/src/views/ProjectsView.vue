<template>
  <div class="mb-5 background rounded-8">
    <div class="container-fluid py-5">
      <div class="text-center">
        <h1 class="display-5 p-5 text-fw-bold text-animation">
          <p class="heading-text">My Projects</p>
        </h1>
      </div>
      <div class="grid-colu">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-12 col-md-4 col-lg-4 card-pro"
        >
          <img
            class="container-project1"
            :src="project.image"
            :alt="project.img"
          />
          <div class="text-overlay">
            <h5>{{project.title}}</h5>
            <p>{{project.desc}}</p>
            <div class="row d-flex flex-row mb-3">
              <div class="col-6">
                <div class="p-2">
                  <a href="{{project.github}}"
                    ><button type="button" class="btn btn-light">Github</button>
                  </a>
                </div>
              </div>
              <div class="col-6">
                <div class="p-2">
                  <a href="{{{project.netlify}}"
                    ><button type="button" class="btn btn-light">Live</button>
                  </a>
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
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>

<style>
.grid-colu {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  padding-left: 100px;
  align-content: center;
}
.card-pro{
  height: 300px;
}
.heading-text {
  color: white;
  font-size: 90px;
  font-family: "Courier New", Courier, monospace;
}
.container-project1 {
  /* background-position: 0%; */
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 3px 3px grey;
}

.text-overlay {
  width: 300px;
  height: 300px;
  position: relative;
  top: -300px;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* Text Positioning */
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  box-shadow: 3px 3px black;
  opacity: 0;
  transition: 1s;
}

.text-overlay:hover {
  opacity: 1;
}
.background {
  background-color: rgba(2, 48, 71, 1);
}
</style>
