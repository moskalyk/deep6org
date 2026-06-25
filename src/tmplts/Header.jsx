class Header extends EventTarget {
	constructor(){
		super()
	}
	
	// async headerClick (element) {
	// 	document.getElementById(element).style.display = 'block'
	// }
	
	async view() {
		return <>
			<div style='position: fixed; top: 30px; right: 50px;'>
            	<span class="hover" onclick="(() => {
                    document.getElementById('splash').style.display = 'block'
                    document.getElementById('tricks').style.display = 'none'
                    document.getElementById('spreads').style.display = 'none'
                    document.getElementById('audio').style.display = 'none'
                    document.getElementById('shop').style.display = 'none'
            	})()">♆ home</span>&nbsp;&nbsp;
            	<span class="hover" onclick="(() => {
            	    document.getElementById('splash').style.display = 'none'
                    document.getElementById('tricks').style.display = 'block'
                    document.getElementById('spreads').style.display = 'none'
                    document.getElementById('audio').style.display = 'none'
                    document.getElementById('shop').style.display = 'none'
            	})()">🃑 tricks</span>&nbsp;&nbsp;
            	<span class="hover" onclick="(() => {
            	    document.getElementById('splash').style.display = 'none'
                    document.getElementById('tricks').style.display = 'none'
                    document.getElementById('spreads').style.display = 'block'
                    document.getElementById('audio').style.display = 'none'
                    document.getElementById('shop').style.display = 'none'
            	})()">✺ spreads</span>&nbsp;&nbsp;
            	<span class="hover" onclick="(() => {
            	    document.getElementById('splash').style.display = 'none'
                    document.getElementById('tricks').style.display = 'none'
                    document.getElementById('spreads').style.display = 'none'
                    document.getElementById('audio').style.display = 'block'
                    document.getElementById('shop').style.display = 'none'
            	})()">~ audio</span>&nbsp;&nbsp;
            	<span class="hover" onclick="(() => {
            	    document.getElementById('splash').style.display = 'none'
                    document.getElementById('tricks').style.display = 'none'
                    document.getElementById('spreads').style.display = 'none'
                    document.getElementById('audio').style.display = 'none'
                    document.getElementById('shop').style.display = 'block'
            	})()">⛤ shop</span>
			</div>
		</>
	} 
}

module.exports = Header
