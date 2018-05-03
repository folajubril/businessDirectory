<template>
  <div id="updateBusiness">
    <div>
   <div class="input-group">
  <input type="text" class="form-control" placeholder="Enter your business Name..."  aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-primary" type="button" >Edit</button>
    <button class="btn btn-danger" type="button">Delete</button>
  </div>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'updateBusiness',
  data () {

  },
  methods: {
  }
}
</script>

<style scoped>
.input-group{
  padding-top: 0px;
  width: 700px;
}

</style>
