class Tricks extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return <>
			<div id='tricks' style='display: none;text-align: center'>
            	<div>
            		<h1 style="text-align: center">tricks</h1>
            		<i>coming soon</i>
            	</div>
			</div>
		</>
	} 
}

module.exports = Tricks
