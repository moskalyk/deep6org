const Header = require('./Header.jsx')
const Tricks = require('./Tricks.jsx')
const Shop = require('./Shop.jsx')
const Audio = require('./Audio.jsx')
const Spreads = require('./Spreads.jsx')

class Index extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return <>
			<div>
            	<br/>
            	<br/>
            	<br/>
            	<br/>
            	<Header/>
            	<Tricks/>
			    <Spreads/>
			    <Audio/>
			    <Shop/>
            	<br/>
            	<br/>
            	<br/>
            	<br/>
            	<br/>
            	<br/>
            	<br/>
                <div style="display: initial" id='splash' class='splash'>
                	<img src='./src/assets/deep6.png' class='logo' alt="deep6 iceberg"/>
                	<br/>
                	<h1 style='text-align:center;'>deep6</h1>
                	<p id='slogan'>"<i>not another lab... community oracle"</i></p>
                	<br/>
                	<div style='width: 30%; margin: 0 auto;' >
					<p style="text-align: left;">𖡼 def'n: lost or abandonment of something</p>
					<p style="text-align: left;">𖦹 univers'l: reappearance as a function of repitition</p>
					<p style="text-align: left;">ᕗ period'c: fade away luck</p>
				  </div>
			    </div>
			    
			</div>
		</>
	} 
}

module.exports = Index
