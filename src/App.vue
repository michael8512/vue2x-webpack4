<template>
	<div id="app">
		<router-view/>
	</div>	
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
	html, body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	font-size: 10px;
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
}
::-webkit-scrollbar{
	width: 4px;
	height: 4px;
}
::-webkit-scrollbar-thumb{
	border-radius: 1em;
	background:rgba(47,84,235,1);
	border-radius:3px;
}
::-webkit-scrollbar-track{
	border-radius: 1em;
	background-color: rgba(50,50,50,.1);
}

</style>
