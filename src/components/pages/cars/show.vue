<template>
	<div>
<div class="panel-heading">
	Edit dog
</div>
<div class="panel-body">
	<div id="alerts" v-if="messages.length > 0">
		<div v-for="message in messages" class="alert  alert-dismissible" role="alert">
			
		</div>
	</div>
	<form class="form-horizontal" role="form" v-on:submit="updateDog">
	<fieldset disabled>
		<div class="form-group">
			<label for="name" class="col-sm-2 col-sm-offset-1 control-label">Dog ID</label>
			<div class="col-sm-5">
				<input class="form-control" required="required" name="name" type="text" v-model="dog.id">
			</div>
		</div>
	</fieldset>
		<div class="form-group">
			<label for="name" class="col-sm-2 col-sm-offset-1 control-label">Name your dog</label>
			<div class="col-sm-5">
				<input class="form-control" required="required" name="name" type="text" v-model="dog.name">
			</div>
		</div>
		<div class="form-group">
			<label for="age" class="col-sm-2 col-sm-offset-1 control-label">What's the age?</label>
			<div class="col-sm-5">
				<input class="form-control" required="required" name="age" type="text" v-model="dog.age">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-4 col-sm-offset-3">
				<button type="submit" class="btn btn-primary"><i class="fa fa-btn fa-save"></i>Update the dog!</button>
			</div>
		</div>
	</form>
</div>
	</div>
</template>

<script>
module.exports = {

  data: function () {
    return {
      dog: {
        id: null,
        name: null,
        age: null
      },
      messages: []
    }
  }
}
</script>

