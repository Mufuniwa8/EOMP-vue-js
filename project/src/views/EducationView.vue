<template>
    <div class="mb-5 background rounded-8 ">
        <div class="container-fluid  py-5">
          <div class="text-center">
            <h1 class="display-5 p-5 text-fw-bold text-animation">
              <p class="heading-text">Education</p>
            </h1>
          </div>
          <div v-for="educations in education" :key="educations.id">
            <ul>
                <li  style="--accent-color: red">
                    <div class="date">{{educations.year}}</div>
                    <div id="1" class="descr">
                      <p>
                        {{educations.desc}}
                      </p>
                    </div>
                  </li>
            </ul>
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
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
  },
    }
</script>

<style>

</style>