import { useState, useEffect, useRef } from 'react'
import deep6Logo from './assets/deep6.png'
import jungTarotSpread from './assets/jung_tarot_spread.png'
import './App.css'
import YouTube from 'react-youtube';
import oracleCardShowcase from './assets/example_of_cards.jpeg'
import oracleHandSensingCardCommitment from './assets/commitment_card_screenshot.png'

const HomeView = () => {
  return (
    <>
      <div>
        <a target="_blank">
          <img src={deep6Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>deep6</h1>
      <i>"not another lab... community Oracle"</i>
      <br/>
      <br/>
      <div style={{textAlign: 'left'}}>
        <p>𖡼 def'n: lost or abandonment of something</p>
        <p>𖦹 univers'l: reappearance as a function of repitition</p>
      </div>
      <p></p>
    </>
  )
}

const SpreadsView = () => {
  return (
    <>
      <div style={{maxWidth: detectMob() &&'336px'}}>
      <h1>spreads</h1>
      spreads for card reading, is a way to orient cards <br/>on a placement where you might provide a reading
      <br/>
      <br/>
      <h3>jung spread</h3>
      <img style={{width: detectMob() && '100%', marginLeft: detectMob() ? '-5px': '-35px'}} src={jungTarotSpread} />
      <ul style={{fontSize: detectMob() ? '10px': '15px', width:'500px', margin: 'auto', textAlign: 'left'}}>
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
      <hr/>
      <br/>
      <h3>past, present, future</h3>
      <div style={{fontSize: detectMob() ? '50px': '200px', fontWeight: '100'}}>▯ ▯ ▯</div>
      <br/>
      <hr/>
      <br/>
      <h3><a href="https://labyrinthos.co/blogs/learn-tarot-with-labyrinthos-academy/the-celtic-cross-tarot-spread-exploring-the-classic-10-card-tarot-spread">celtic cross spread</a></h3>
      <hr/>
      <h3>arrow of time spread</h3>
      <div style={{fontSize: detectMob() ? '20px': '30px', fontWeight: '10'}}>   &nbsp;&nbsp;[4] </div>
      <div style={{fontSize: detectMob() ? '20px': '30px', fontWeight: '10'}}>[1] [2] [3]</div>
      <div style={{fontSize: detectMob() ? '20px': '30px', fontWeight: '100'}}>   &nbsp;&nbsp;[5] </div>
      <ul style={{fontSize: detectMob() ? '10px': '15px', width:'500px', margin: 'auto', textAlign: 'left'}}>
        <li>1 what you have to leave behind</li>
        <li>2 where your capability or power or strength comes from</li>
        <li>3 present future</li>
        <li>4 what your dreams are telling you</li>
        <li>5 what you're not seeing</li>
      </ul>
      <hr/>

      <h3>rythmic spread</h3>
      <div style={{marginLeft: '-84px'}}>
      <div style={{fontSize: detectMob() ? '20px': '30px', fontWeight: '10'}}>[1] </div>
      <div style={{fontSize: detectMob() ? '20px': '30px', fontWeight: '10'}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2] [4]</div>
      <div style={{fontSize: detectMob() ? '20px': '30px', fontWeight: '10'}}>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3]</div>
      <ul style={{fontSize: detectMob() ? '10px': '15px', width:'400px', margin: 'auto', textAlign: 'left'}}>
        <li>1 nostalgia</li>
        <li>2 direction</li>
        <li>3 reversal</li>
        <li>4 connection</li>
      </ul>
      </div>
      </div>
    </>
  )
}

const AudioView = () => {
  return (
    <>  
      <div style={{maxWidth: detectMob() &&'500px'}}>
      <h1>audio</h1>
      <p>for an oracle reading with cards contact morgan @ <a href="mailto:morgan.moskalyk@protonmail.ch">morgan.moskalyk@protonmail.ch</a></p>
      <br/>
      <br/>
      <h3>example reading </h3>
      <i>coming soon</i>
      <br/>
      <br/>
      <h3>post spread reading</h3>
      {/* @ts-ignore */}
      <YouTube opts={{width: detectMob() ? '200px' : '500px', height: detectMob() ? '100px' : '300px'}} videoId={'GrNXVNqTI4Y'} />
      </div>
    </>
  )
}

const ShopView = () => {
  const videoRef = useRef(null)
  const [introductoryPulledCard, setIntroductoryPulledCard] = useState(false)
  
  useEffect( ()=> {
    setInterval(async() => {
      //@ts-ignore
      const videoCurrentTime = await videoRef.current.internalPlayer.getCurrentTime()
      if(videoCurrentTime >= 403 && videoCurrentTime < 411){
        setIntroductoryPulledCard(true)
      } else {
        setIntroductoryPulledCard(false)
      }
    }, 1000)
  }, [introductoryPulledCard])

  return (
    <>
      <h1>shop</h1>
      <i>Oracle Hand Sensing Deck</i>
      <p>$53 CAD + tax & shipping</p>
      <br/>
      <div style={{width: '50%', margin: 'auto'}}>
      <p>the oracle hand sensing deck include 18 custom pencil drawn images sourced from www.are.na and 15 tool based items with no image, only a planet and natural element alchemical sign is signified which you might use with your hands.</p>
      <p>the intention is to allow readers and querents to get in tune with how to express emotions with sign like languages, with expansive words to describe the cards, and action oriented ways to create as you adventure.</p>
      </div>
      <br/>
      <br/>
      <img style={{width: '30%'}} src={oracleCardShowcase} />
      <p>each deck is packaged with a unique cloth that can be used to read the cards in a spread</p>
      <p>please organize an order & e-transfer via email with morgan moskalyk <br/> owner of versus energy innovations inc., the company behind the cards</p>
      <p>email: morgan.moskalyk@protonmail.ch</p>
      <br/>
      <i>deck introductory</i>
      <br/>
      <br/>
      <div style={{height: '300px', width: detectMob() ? '100%': '50%', margin: 'auto', position:'relative'}}>
        {introductoryPulledCard && !detectMob()&& <img style={{position: 'absolute', bottom: '132px', left: '445px'}} width={"75"} height={"130"} src={oracleHandSensingCardCommitment}/>}
        {/* @ts-ignore */}
        <YouTube ref={videoRef} opts={{width: detectMob() ? "300" : "400", height: detectMob() ? "150" : "300"}} videoId={'864t-rKCK48'} />
        {introductoryPulledCard &&detectMob() && <img style={{position: 'absolute'}} width={"80"} height={"130"} src={oracleHandSensingCardCommitment}/>}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}

    function detectMob(): any {
    return ( ( window.innerWidth <= 800 ));
  }

function App() {
  const [menu, setMenu] = useState(0)
  const [hideMenu, setHideMenu] = useState(true)
  const [shopUTF, setShopUTF] = useState('⛤')

  useEffect(() => {
    setTimeout(async () => {
      // @ts-ignore
      const isBrave = (navigator.brave && await navigator.brave.isBrave() || false)
      isBrave&&setShopUTF('$')
    }, 0)
  })

  useEffect(() => {
    window.addEventListener('scroll',function() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      // enter code here
        setHideMenu(false)
      } else {
        setHideMenu(true)
      }
    });

  }, [menu, hideMenu])

  const Compass = (view: any) => {
    let pin: any;

    switch(view){
      case 0:
        pin = <HomeView/>
        break;
      case 2:
        pin = <SpreadsView/>
        break;
      case 3:
        pin = <AudioView/>
        break;
      case 4:
        pin = <ShopView/>
        break;
    }
    return pin
  }

  return (
    <>
      
      {hideMenu&&<div style={{position: detectMob() ? 'relative': 'fixed', margin:'auto', left: detectMob() && '45%', transform:detectMob() &&  'translateX(-50%)', width: detectMob() && '300px', top: '30px', right: detectMob() ? '0px':'100px'}}>
        <span id="menu" style={{padding: '11px', margin: '5px', cursor: 'pointer', textDecoration: menu == 0 ? 'underline': ''}} onClick={() => {
          setMenu(0)}}>♆ home</span>
        {detectMob() && <><br/></>}
        {detectMob() && <><br/></>}
        <span id="menu" style={{padding: '11px',  margin: '5px',cursor: 'pointer', textDecoration: menu == 2 ? 'underline': ''}}onClick={() => {setMenu(2)}}>✺ spreads</span>
        <span id="menu" style={{padding: '11px', margin: '5px', cursor: 'pointer', textDecoration: menu == 3 ? 'underline': ''}}onClick={() => {setMenu(3)}}>~ audio</span>
        {detectMob() && <><br/></>}
        {detectMob() && <><br/></>}
        <span id="menu" style={{padding: '11px', margin: '5px', cursor: 'pointer', textDecoration: menu == 4 ? 'underline': ''}}onClick={() => {setMenu(4)}}>{shopUTF} shop</span>
      </div>}
      {
        <>
        <br/>
        <br/>
        </>
      }
      <div>
        {Compass(menu)}
      </div>
    </>
  )
}

export default App
