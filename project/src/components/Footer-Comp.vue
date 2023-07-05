<template>
    
<div class="footer-container">
    <div class="footer">
   <p>
    <router-link class="e.g" to="/contact">Contact</router-link>
    <router-link class="e.g" to="/">Home</router-link>
    <router-link class="e.g" to="/about">About</router-link>
   </p>
    </div>
</div>

</template>
<script>
 
export default {

}

</script>

<style scoped>
 
.footer-container {
    bottom: 0;
    height: 50px;
    background-color: rgba(18, 31, 147, 1);
}
.footer-link {
    width: 50px;
    height: 50px;
} 


</style>
