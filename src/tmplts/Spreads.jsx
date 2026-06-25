class Spreads extends EventTarget {
	constructor(){
		super()
	}
	
	async view() {
		return <>
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
		</>
	} 
}

module.exports = Spreads
