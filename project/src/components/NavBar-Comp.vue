<template>
    <nav class="navbar">
      <div class="nav-container">
    <router-link class="nav-link" to="/">Home</router-link> 
    <router-link class="nav-link" to="/about">About</router-link>
    <router-link class="nav-link" to="/education">Education</router-link> 
    <router-link class="nav-link" to="/testimonials">Testimonial</router-link>
    <router-link class="nav-link" to="/projects">Projects</router-link> 
    <router-link class="nav-link" to="/contact">Contact</router-link>  
    </div>
  </nav>
</template>
<script>

export default  {

}
</script>
<style scoped >

.navbar {
  background-color: rgba(2, 48, 71, 1);
  text-align: center;
  
}
.nav-link {
  float: left;
  color: white;
  text-align: center;
  padding: 15px; 
  margin: 5px;
  text-decoration: none;
  font-size: 17px;
  font-family: inherit;
  border: 2px solid white;
  border-radius: 50px;
  box-shadow: 3px 3px;
  width: 110px;
  transition: 0,1s;
}
.nav-link:hover {
  transition: 0,1s;
  background-color: rgba(18, 31, 147, 1);
  color: white;
  box-shadow: 4px 4px ;
}
.nav-container {
  text-align: center;
}

</style>
