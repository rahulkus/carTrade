<template>
<!-- Navigation -->
<nav class="navbar navbar-default">
	<div class="container">
		<div class="navbar-header">
			<!-- Collapsed Hamburger -->
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle Navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<!-- Branding Image -->
			<a class="navbar-brand" v-link="{ path: '/' }" style="padding-top: 4px;">
				<img src="../assets/car-logo.png">
			</a>
		</div>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li class="sell-icon"><a v-link="{ path: '/home' }">Sell</a></li>
				<li class="account-icon"><a v-link="{ path: '/dogs' }">My Account</a></li>
				<li class="help-icon"><a v-link="{ path: '/dogs' }">Help</a></li>
			</ul>
			<!-- Right Side Of Navbar -->
			<ul class="nav navbar-nav navbar-right">
				<!-- Login / Registration Links for unauthenticated users -->
				<!-- <li v-if=" ! $root.authenticated"><a v-link="{ path: '/auth/login' }">Login</a></li> -->
				<!-- <li v-if=" ! $root.authenticated"><a v-link="{ path: '/auth/register' }">Register</a></li> -->
				<!-- Authenticated Right Dropdown -->
				<li class="dropdown" v-if="$root.authenticated">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
						{{ $root.user.name }} <span class="caret"></span>
					</a>

					<ul class="dropdown-menu" role="menu">
						<!-- Settings -->
						<li class="dropdown-header">Settings</li>
						<li>
							<a v-link="{ path: '/auth/profile' }">
								<i class="fa fa-btn fa-fw fa-user"></i>Your profile
							</a>
						</li>

						<!-- Logout -->
						<li class="divider"></li>
						<li>
							<a v-link="{ path: '/auth/logout' }">
								<i class="fa fa-btn fa-fw fa-sign-out"></i>Logout
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav></template>

<script>
module.exports = {
  data: function () {
    return {
      navTitle: 'Vue.js'
    }
  }
}
</script>

