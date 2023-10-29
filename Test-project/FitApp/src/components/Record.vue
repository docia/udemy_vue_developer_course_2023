<template>
	<h1>Fit App</h1>
	<div class="data">
		<div class="data__gender">
			<label for="name">Gender</label>
			<input type="text" id="gender" v-model="gender" />
		</div>
		<div class="data__age">
			<label for="name">Age</label>
			<input type="text" id="age" v-model="age" />
		</div>
		<div class="data__weight">
			<label for="name">Weight</label>
			<input type="text" id="weight" v-model="weight" />
		</div>
		<div class="data__height">
			<label for="name">Hieght</label>
			<input type="text" id="height" v-model="height" />
		</div>
	</div>
	<button type="button" @click="saveAlldata">Save</button>
	<div>
		{{ savedData }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			gender: "",
			age: "",
			weight: "",
			height: "",
			savedData: ""
			
			
		};
	},
	emits: ['data-saved'],
	methods: {
		saveAlldata() {
			const requestedData = {
				gender: this.gender,
				age: this.age,
				weight: this.weight,
				height: this.height,
			};

			this.savedData = `${this.gender} ${this.age} ${this.weight} ${this.height} `;

			this.$emit('data-saved', 'this.savedData');
			
		},
	}
};
</script>

<style></style>
