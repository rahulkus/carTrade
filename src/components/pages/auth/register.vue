<template>
<div class="panel-heading">
	Register for an account
  <div class="panel-body">
	<form class="form-horizontal" role="form" v-on:submit="registerUser">

		<div id="alerts" v-if="messages.length > 0">
			<div v-for="message in messages" class="alert alert-dismissible" role="alert">
				
			</div>
		</div>

		<div class="form-group">
			<label class="col-md-4 control-label">Your name</label>
			<div class="col-md-6">
				<input type="name" class="form-control" v-model="user.name">
			</div>
		</div>

		<div class="form-group">
			<label class="col-md-4 control-label">E-Mail Address</label>
			<div class="col-md-6">
				<input type="email" class="form-control" v-model="user.email">
			</div>
		</div>

		<div class="form-group">
			<label class="col-md-4 control-label">Password</label>
			<div class="col-md-6">
				<input type="password" class="form-control" v-model="user.password">
			</div>
		</div>

		<div class="form-group">
			<label class="col-md-4 control-label">Confirm password</label>
			<div class="col-md-6">
				<input type="password" class="form-control" v-model="user.password_confirmation">
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-6 col-md-offset-4">
				<button type="submit" class="btn btn-primary" :disabled="registering">
					<i class="fa fa-btn fa-sign-in"></i> Register
				</button>
			</div>
		</div>
	</form>
</div>
</div>
</template>

<script>
module.exports = {

  name: 'register'

}
</script>

