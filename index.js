function runner() {
	eval(`
	 class Spreads extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return \`
			<div id='spreads' style='display: none; text-align: center;'>
            	<div>
            	<h1 style="text-align: center">spreads</h1>
            	<p>spreads for a card reading, is a way to orient cards <br/>on a placement where you might provide a reading</p>
            	<br/>
            	<h3>jung spread</h3>
            	<img alt='jung spread' src='./src/assets/jung_tarot_spread.png' />
				<ul style='width: 500px; margin: auto; text-align: left;'>
					<li>1 present</li>
					<li>2 oracle card pulled randomly, flipped at end</li>
					<li>3 oracle card pulled randomly, flipped at end</li>
					<li>4 oracle card pulled randomly, flipped at end</li>
					<li>5 oracle card pulled randomly, flipped at end</li>
					<li>6 environment</li>
					<li>7 short term future</li>
					<li>8 long term future</li>
					<li>9 what you have to leave behind</li>
				</ul>
				<br/>
				<br/>
				<br/>
				<h3>past, present, future</h3>
				<div style="font-size: 200px; font-weight: 100"}}>▯ ▯ ▯</div>
            	</div>
            	<br/>
				<br/>
				<br/>
            	<h3><a href="https://labyrinthos.co/blogs/learn-tarot-with-labyrinthos-academy/the-celtic-cross-tarot-spread-exploring-the-classic-10-card-tarot-spread">celtic cross spread</a></h3>
				<br/>
				<br/>
				<br/>
				<h3>arrow of time spread</h3>
				<div>   &nbsp;&nbsp;[4] </div>
				<div>[1] [2] [3]</div>
				<div>   &nbsp;&nbsp;[5] </div>
				<ul style='width: 500px; margin: auto; text-align: left;'>
					<li>1 what you have to leave behind</li>
					<li>2 where your capability or power or strength comes from</li>
					<li>3 present future</li>
					<li>4 what your dreams are telling you</li>
					<li>5 what you're not seeing</li>
				</ul>
				<br/>
				<br/>
				<br/>

				<h3>rythmic spread</h3>
				<div>[1] </div>
				<div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2] [4]</div>
				<div>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3]</div>
				<ul style='width: 500px; margin: auto; text-align: left;'>
					<li>1 nostalgia</li>
					<li>2 direction</li>
					<li>3 reversal</li>
					<li>4 connection</li>
				</ul>
			</div>
		\`
	} 
}


 class Audio extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return \`
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
		\`
	} 
}


 class Shop extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return \`
			<div id='shop' style='display: none'>
            	<div><h1 style="text-align: center">shop</h1></div>
            	<p style='text-align: center; width: 40%; margin: auto;'>please organize an order & e-transfer via email with Ṅero Moskalyk
owner of Versus Energy Innovations inc., the company behind the cards
</p>
<br/>
<p style='text-align: center; width: 40%; margin: auto;'>email: build@deep6.org</p>
<br/><br/>

            	<div class="shopping-container" style='text-align: center'>
					<div>
				  		<img src='./src/assets/example_of_cards.jpeg' style='width: 40%; margin: 20px auto;'/>
				  		<i>Oracle Hand Sensing Deck</i>
						  <p>$53 CAD + tax & shipping</p>
						  <p style='padding: 10px'>the oracle hand sensing deck include 18 custom pencil drawn images sourced from www.are.na and 15 tool based items with no image, only a planet and natural element alchemical sign is signified which you might use with your hands.</p>
						  <p style='padding: 10px'>the intention is to allow readers and querents to get in tune with how to express emotions with sign like languages, with expansive words to describe the cards, and action oriented ways to create as you adventure.</p>
						  <p></p>
					</div>
				  	<div>
				  		<img src='./src/assets/box_front.png' style='width: 21%'/>
				  		<i>Totem Playing Cards Deck</i>
						<p>$45 CAD + tax & shipping</p>
						<p>🃟</p>
						<p style='padding: 10px'>a non-standard 52+2 playing card deck designed with animals & insects artwork; stained-sigillism styled.</p>
						<p style='padding: 10px'>2 princess cards included, along with a fox and bunny cards as joker totems, which can swap them out.</p>
						<p style='padding: 10px'>tucked: Cribbage game explainer</p>
						<p>🂠</p>
				  	</div>
				</div>
			</div>
		\`
	} 
}


 class Tricks extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return \`
			<div id='tricks' style='display: none;text-align: center'>
            	<div>
            		<h1 style="text-align: center">tricks</h1>
            		<i>coming soon</i>
            	</div>
			</div>
		\`
	} 
}


 class Header extends EventTarget {
	constructor(){
		super()
	}
	
	// async headerClick (element) {
	// 	document.getElementById(element).style.display = 'block'
	// }
	
	async view() {
		return \`
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
		\`
	} 
}


 





class Index extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return \`
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
		\`
	} 
}



	
	(async () => {
		let index = new Index();
		let header = await (new Header()).view();
let tricks = await (new Tricks()).view();
let shop = await (new Shop()).view();
let audio = await (new Audio()).view();
let spreads = await (new Spreads()).view();

		const contents = await index.view();
		const element = document.getElementById('anchor');
		let main = contents;
		main = main.replaceAll('<Spreads/>', spreads)
		main = main.replaceAll('<Audio/>', audio)
		main = main.replaceAll('<Shop/>', shop)
		main = main.replaceAll('<Tricks/>', tricks)
		main = main.replaceAll('<Header/>', header)
		element.setHTMLUnsafe(main);
		
		
	})();
`)
};

(async () => {
	await runner();
})()
