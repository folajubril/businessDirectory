<template>
  <div id="addbusiness">
      <div class='jumbotron'>
           <form id = 'addBusiness' @submit.prevent = 'submit'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Business name</label>
      <input type="text" class="form-control" id="inputEmail4" v-model='business.business_name'>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Category</label>
      <input type="text" class="form-control" id="inputPassword4" v-model='business.category'>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Contact Number</label>
      <input type="text" class="form-control" id="inputEmail4" v-model='business.contact_number' >
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email</label>
      <input type="text" class="form-control" id="inputPassword4" v-model='business.email'>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Website</label>
    <input type="text" class="form-control" id="inputAddress" v-model='business.description'>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Description
    </label>
    <input type="text" class="form-control" id="inputAddress2"  v-model='business.website'>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address
    </label>
    <input type="text" class="form-control" id="inputAddress2"  v-model='business.address'>
  </div>
  <div class="form-group">
    <label for="inputAddress2">City
    </label>
    <input type="text" class="form-control" id="inputAddress2"  v-model='business.city'>
  </div>
  <div class="form-group">
    <label for="inputAddress2">State
    </label>
    <input type="text" class="form-control" id="inputAddress2" v-model='business.state'>
  </div>
  <div class="row">
  <button type ='submit' class="btn btn-primary">Submit</button>
  </div>
</form>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'addbusiness',
  data () {
    return {
      business: {
        business_name: '',
        category: '',
        email: '',
        contact_number: '',
        address: '',
        city: '',
        state: '',
        website: '',
        description: ''
      }
    }
  },
  methods: {
    submit () {
      var newBusiness = {
        business_name: this.business.business_name,
        category: this.business.category,
        email: this.business.email,
        contact_number: this.business.contact_number,
        website: this.business.website,
        desceiption: this.business.description,
        address: this.business.address,
        city: this.business.city,
        state: this.business.state
      }
      console.log(newBusiness)
      axios
        .post('http://localhost:3000/addbusiness', newBusiness)
        .then(function (response) {
          console.log('posted successfully')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.jumbotron {
  padding-top: 30px;
  margin-top: 75px;
}
</style>
