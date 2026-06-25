class Audio extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return <>
			<div id='audio' style='display: none; text-align: center;'>
            	<div>
            		<h1 style="text-align: center">audio</h1>
            		<p>for an oracle reading with cards contact Ṅero @ <a href="mailto:build@deep6.org">build@deep6.org</a></p>
					<br/>
					<br/>
					<h3>post spread reading music</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/GrNXVNqTI4Y?si=BEaKoltWY9MDk517" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            	</div>
			</div>
		</>
	} 
}

module.exports = Audio
