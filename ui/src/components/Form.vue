<!-- 
	Component displayed in home page.
	Simple form that takes in name, title, and body.
	Data sent to post request using axios.
 -->
 <template>
	<FormKit
	  type="form"
	  @submit="submit"
	>
		<h2 class="font-mono text-3xl font-extrabold mt-4 mb-6">Don't be shy! Write something new 😉.</h2>
		<FormKit
			type="text"
			name="name"
			validation="required|matches:/[a-zA-Z0-9]+$/|length:4,20"
			placeholder="What should we call you?"
		/>
		<FormKit
			type="text"
			name="title"
			validation="required|matches:/[a-zA-Z0-9]+$/|length:2,20"
			placeholder="Your masterpiece's title"
		/>
		<FormKit
			type="textarea"
			rows="10"
			cols="60"
			placeholder="You have about 150 characters left."
			name="body"
			validation="required|length:4, 150"
			help="Are you sure you want to post that?"
		/>
	</FormKit>
  </template>
  
  <script setup>
	import axios from 'axios';
	import router from '../router';
  const submit = async (data) => {
	let postData = {
					title: data.title,
					author: data.name,
					body: data.body,	
				};
	await axios.post('http://localhost:3000/posts', postData)
			router.push({name:'home'})
	alert('Your post was successfully posted!')
	window.location.href = window.location.href
  }
  </script>