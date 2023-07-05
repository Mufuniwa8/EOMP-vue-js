<template>
  <div class="mb-5 background rounded-8">
    <div class="container-fluid py-5">
      <div class="text-center">
        <h1 class="display-5 p-5 text-fw-bold text-animation">
          <p class="heading-text">Testimonials</p>
        </h1>
      </div>
      <div class="container">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="row" >
          <div>
            <div class="col-12 col-md-6 col-lg-3" >
              <div class="card mb-3">
                <img
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="card-img-top"
                  style="height: 450px"
                />
                <div class="card-body" style="height: 210px">
                  <h5 class="card-title">{{ testimonial.name }}</h5>
                  <p class="card-text">
                    {{ testimonial.desc }}
                  </p>
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
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
}
</script>

<style scoped>
.row {
  display: row;
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
.background {
  background-color: rgba(2, 48, 71, 1);
}
</style>
