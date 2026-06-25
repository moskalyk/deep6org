class Shop extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return <>
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
		</>
	} 
}

module.exports = Shop
