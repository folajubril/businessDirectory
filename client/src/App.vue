<template>
  <div id="app">
    <div class="nav-menu">
        <div class="bg transition">
            <div class="container-fluid fixed">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-darkbg-dark">
                            <a class="navbar-brand" href='#'>BizDir</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-menu"></span>
              </button>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li><a href="updateBusiness" class="btn btn-outline-light top-btn">Update Business</a></li>
                                    <li><a href="addbusiness" class="btn btn-outline-light top-btn">Add Business</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 0;
  background-image: url('./assets/slider.jpg');
}
.nav-menu {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto; }

.nav-menu-2 {
  position: inherit; }

.navbar {
  padding: .5rem 0; }

.navbar-brand {
  font-size: 31px;
  color:black;
  }

.navbar-dark .navbar-brand {
  color: blue; }
  .navbar-light .navbar-brand:hover {
    color: #fff; }

.navbar-light .navbar-nav .show > .nav-link {
  color: #fff; }

.navbar-light .navbar-nav .active > .nav-link {
  color: #fff; }

.navbar-light .navbar-nav .nav-link {
  font-size: 16px;
  font-weight: 300;
  color: #fff; }
  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
    color: #fff;
    outline: none; }

.navbar-light .navbar-toggler {
  color: #fff;
  border-color: #fff; }

@media (max-width: 992px) {
  .navbar-nav {
    padding: 7px 20px; } }

.nav-item {
  margin: 0 20px 0 0; }
  .nav-item span {
    font-size: 10px;
    margin: 0 0 0 4px; }

.bg {
  width: 100%;
  height: 70px; }

.is-sticky {
  background: #252a33;
  opacity: 1; }

.transition {
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out; }

.fixed {
  border-bottom: 1px solid #636363;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1; }
  @media (max-width: 992px) {
    .fixed {
      border: none;
      background: #252a33; } }

.dropdown-menu {
  background: #030303; }

.dropdown-item {
  color: #aaaaaa;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s; }
  .dropdown-item:hover {
    color: #fff;
    background: none; }

.ti-plus {
  font-size: 14px;
  padding: 0 8px 0 0; }
</style>
