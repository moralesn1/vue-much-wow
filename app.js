const app = Vue.createApp({
	data() {
		return {
			firstName: "Nathaniel",
			lastName: "Morales",
			email: "Email",
			gender: "male",
			picture: "https://randomuser.me/api/portraits/men/10.jpg",
		};
	},
	methods: {
		async getUser() {
			try {
				const response = await fetch("https://randomuser.me/api");
				const { results } = await response.json();
				console.log(results);

				this.firstName = results[0].name.first;
				this.lastName = results[0].name.last;
				this.email = results[0].email;
				this.gender = results[0].gender;
				this.picture = results[0].picture.large;
			} catch (e) {
				console.log(e);

				(this.firstName = "Error"),
					(this.lastName = " "),
					(this.email = "Email"),
					(this.gender = "N/A"),
					(this.picture = "https://randomuser.me/api/portraits/men/10.jpg");
			}
		},
	},
});

app.mount("#app");
