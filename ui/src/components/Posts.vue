<template>
	<h1 class="font-mono text-3xl font-extrabold mt-4 mb-6" id="update-section">Wanna read some thoughts?😄</h1>

	<!-- 
		Show section if user wants to edit their post.
		Hide section if user cancels the operation.
 	-->
	<section v-if="isVisible" class="grid grid-cols-2 gap-8 mb-8">
		<div>
			<h1 class="font-mono text-xl font-extrbold mt-4 mb-6">Changed your mind? It's okay, we all do.</h1>
			<p class="text-base">You can also unchange your mind... Just sayin'.</p>
			<button type="button" class="rounded border-2 border-emerald-200  text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-emerald-200 focus:outline-none text-sm" @click="hideUpdateForm">Keep Post</button>
		</div>
		<div>
			<FormKit
	  		type="form"
	  		@submit="updatePost"
			>
				<FormKit
					type="text"
					name="name"
					validation="required|matches:/[a-zA-Z0-9]+$/|length:4,20"
					placeholder="New name"
				/>
				<FormKit
					type="text"
					name="title"
					validation="required|matches:/[a-zA-Z0-9]+$/|length:2,20"
					placeholder="New title"
				/>
				<FormKit
					type="textarea"
					rows="10"
					cols="60"
					placeholder="New content!"
					name="body"
					validation="required|length:4, 150"
					help="Are you sure you want to post that?"
				/>
			</FormKit>
		</div>
	</section>

	<section class="grid grid-cols-3 gap-8 flex justify-between">
		<div class="rounded-lg shadow-xl shadow-pink-200  overflow-hidden max-w-sm mb-5" v-for="post of posts">
			<div class="px-6 py-6 mb-3">
				<p class="font-light text-2xl mt-2 mb-3 text-sky-500"> {{ post.title }}</p>
				<p class="font-semibold text-sm mb-2 text-green-500 overline decoration-gray-400 ">{{ post.author }}</p>
				<p class="font-light text-lg ">{{ post.body}}</p>
			</div>
			<div class="grid grid-cols-2 justify-items-center mb-2">
				<button type="button" class="rounded bg-orange-200 text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-orange-300 focus:outline-none" @click="showUpdateForm(post.id)">Edit</button>
				<button type="button" class="rounded border-2 border-zinc-200  text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:bg-zinc-200 focus:outline-none " @click="deletePost(post.id)">Delete</button>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from "axios";
	export default {
		
		name: "Posts",
		data() {
			return {
				posts: [],
				isVisible: false,
				tempID:"",
				postData: "",
				title:""
			};
		},
		async created() {
			await this.loadPosts();
		},
		methods: {
			async loadPosts() {
				try {
					const res = await axios.get(`http://localhost:3000/posts`);
					this.posts = res.data;
				} catch (error) {
					console.log(error);
				}
			},
			async deletePost(postID) {
				try {
					await axios.delete(`http://localhost:3000/posts/${postID}`);
					window.location.reload();
				} catch (error) {
					console.log(error)
				}
			},
			showUpdateForm(postID) {
				this.isVisible = true
				this.tempID = postID
				// scroll to update form
				const position = document.getElementById("update-section").offsetTop;
          		window.scrollTo({ top: position, behavior: "smooth" });  
			},
			hideUpdateForm(){
				this.isVisible = false
			},
			async updatePost(data) {
				let postID = this.tempID
				await axios.put(`http://localhost:3000/posts/${postID}`, {
					title: data.title,
					author: data.name,
					body: data.body,
				})
				alert('Changes made successfuly.')
				window.location.reload();
			}
		}
	};
</script>