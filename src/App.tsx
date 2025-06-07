import { useState, useEffect, useRef } from 'react'
import deep6Logo from './assets/deep6.png'
import jungTarotSpread from './assets/jung_tarot_spread.png'
import './App.css'
import YouTube from 'react-youtube';

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

const TricksView = () => {
  const playingCards = useRef<any>(null);
  const maat = useRef<any>(null);
  const entryAndExit = useRef<any>(null)
  const beech = useRef<any>(null)
  const antiDiffuse = useRef<any>(null)
  const scentsAndFood = useRef<any>(null)
  const seconds = useRef<any>(null)
  const youth = useRef<any>(null)
  const altair = useRef<any>(null)
  const elementalFixing = useRef<any>(null)
  const room = useRef<any>(null)
  const astrology = useRef<any>(null)
  const miniMining = useRef<any>(null)
  const mixingNature = useRef<any>(null)
  const dreams = useRef<any>(null)

  function doWithThisElement(event: any) {
    event = event || window.event; // IE
    var target = event.target || event.srcElement; // IE

    var id = target.id;
    // window.location = window.location + "#" + id as any

     navigator.clipboard.writeText(window.location.host +'/' + 'tricks'+"#" + id);
}

  useEffect(() => {
    if((window.location.href as string).split('/tricks')[1]=='#playing-cards'){
      //@ts-ignore
      playingCards.current.scrollIntoView();
    } else if((window.location.href as string).split('/tricks')[1]=='#maat'){
      //@ts-ignore
      maat.current.scrollIntoView();
    } else if((window.location.href as string).split('/tricks')[1]=='#entry-and-exit'){
      //@ts-ignore
      entryAndExit.scrollIntoView();
    }

    switch((window.location.href as string).split('/tricks')[1]){
      case 'beech':
        //@ts-ignore
        beech.scrollIntoView();

      break;
      case 'anti-diffuse':
        //@ts-ignore
        antiDiffuse.scrollIntoView();

      break;
      case 'scents-food':
        //@ts-ignore
        scentsAndFood.scrollIntoView();

      break;

      case 'seconds':
        //@ts-ignore
       seconds.scrollIntoView();
       break;

      case 'youth':
        //@ts-ignore
        youth.scrollIntoView();

      break;
      case 'altair':
        //@ts-ignore
        altair.scrollIntoView();

      break;
      case 'elemental-fixing':
        //@ts-ignore
        elementalFixing.scrollIntoView();

      break;
      case 'room':
        //@ts-ignore
        room.scrollIntoView();

      break;
      case 'astrology':
        //@ts-ignore
        astrology.scrollIntoView();

      break;
      case 'mini-mining':
        //@ts-ignore
        miniMining.scrollIntoView();

      break;
      case 'mixing-nature':
        //@ts-ignore
        mixingNature.scrollIntoView();

      break;
      case 'dreams':
        //@ts-ignore
        dreams.scrollIntoView();
      break;
    }
  }, [])

  return (
    <>
      <h1>tricks</h1>
      <h3 ref={playingCards} style={{cursor: 'pointer'}} id="playing-cards" onClick={(evt) => doWithThisElement(evt)}>playing cards</h3>
      <p>a simple deck of playing cards, can be used as an oracle deck, like tarots. an individual can apply their own subjective experiences to each card, and they can be read to fit the reading or, played in a game. one can go even as far as adjusting their daily life to conjure certain cards to occur based on the rule of entropy and polarities.</p>
      <br/>
      <br/>
      <h3 ref={maat} id="maat"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>maat & scales balance (entropy)</h3>
      <p>everything tends to maintain in balance over a certain time horizon. a simple action as an polar action. additionaly, when something becomes retired there tends to be a repitition of reapperance in some way in some other form.</p>
      <br/>
      <br/>
      <h3 ref={entryAndExit} id="entry-and-exit"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>entry / exit</h3>
      <p>it works to the advantage of safety and control to ensure that when performing ritual, someone is able to perform an beginning and ending to a certain magical spell or 'work'. this ensures there is less leakges of energy between the cognitioners attention and what appears in the envrionment.</p>
      <br/>
      <br/>
      <h3 ref={beech} id="beech"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>full year projects</h3>
      <p>the beech tree was the first wood for a book to be printed on. it also reminds use to not be afraid of extending a goal or work to a yearly project. it tends to represent the sum of the wisdom of all the other trees and represents longevity.</p>
      <br/>
      <br/>
      <h3 ref={antiDiffuse} id="anti-diffuse"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>anti-diffuse</h3>
      <p>as practioners and normal civilians, we tend to hold energy that needs to be released and acted upon in some way. this can be done with physical cards, or, someone can use <a href="https://anti-diffuse.vercel.app">this app</a> if programmatically inclined to digitally see what is happening with a question you might have.</p>
      <br/>
      <br/>
      <h3 ref={scentsAndFood} id="scents-food"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>scents & food</h3>
      <p>as a protocol for memory, food and scents can be usd to rejuvenate a state of mind, a memory, a default operating state, or, as a kind gesture to recoup a lost feeling of love. recording when you come up with new recipes can be just as good or better than a typical journal or diary.</p>
      <br/>
      <br/>
      <h3 ref={altair} id='altair'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>altair</h3>
      <p>it's important to keep your spatial pattern recognition in order and have a place you can keep objects you pick up on your travels. there's a saying, 'the object is the memory'. this can be useful for when you go on adventures, or, need to augment a reading to signify a time and place you recovered an aura from an object.</p>
      <br/>
      <br/>
      <h3 ref={seconds} id='seconds'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>seconds</h3>
      <p>be aware of the seconds that happen in your mind with what arises when, and train to think cleanly, always. use these 'scries' to dictate priorities and actions. “The happiness of your life depends upon the quality of your thoughts.” – Marcus Aurelius</p>
      <br/>
      <br/>
      <h3 ref={youth} id="youth"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>youth</h3>
      <p>be not a afraid to introduce youth to the practice of magic. however we believe there are certain age steps for various scenarios. for a tarot reading: 8 years old with parental advisory. learning a deck: 12 years old. using a digial app for tarot: 16 years old.</p>
      <br/>
      <br/>
      <h3 ref={elementalFixing} id='elemental-fixing'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>elemental fixing</h3>
      <p>when exploring your elemental spirit, one can perform a ritual of fixing a constant element (choosing one from the earth, air, fire, water) and conjuring essences in the other elements as a way to have more stable control. for example, you can use the entry / exit tactics for beginning and ending a session with a single element, while exploring the other three. it helps to perform sound between sessions. by sitting, time horizons tend to be concentrated, versus standing, you are more dispersed (think, time and space)</p>
      <br/>
      <br/>
      <h3 ref={room} id='room'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>how to read the room</h3>
      <p>deep breaths, and awarness from the visual system is a great way to see, beyond time, where you are in the room of the void. windows still exist, however, it's a good idea to take stock of important priorities that are arising in the present before taking action.</p>
      <br/>
      <br/>
      <h3 ref={astrology} id='astrology'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>astrology</h3>
      <p>daily astrology is a fun way to swing between the planets and learn what is happneing in the global skies. it's important to begin by learning your natal charts, then, use these signifies as stepping stones for advancing the year and planning.</p>
      <br/>
      <br/>
      <h3 ref={miniMining} id='mini-mining'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>mini-beliefs</h3>
      <p>one can look at a calendar as a stitched together grid that it not just day to day. weeks can become morphed together as long as you're keeping track of significant experiences on each day. you can use <a href="https://calendat.vercel.app">this app</a> to do so where one can find windows of time to swing through dates from some zenith (or anchor) to find patterns in the monthly calendar</p>
      <br/>
      <br/>
      <h3 ref={mixingNature} id='mixing-nature'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)} >mixing nature</h3>
      <p>do not be afraid to mix plants, animals, totems, or other natural occuring phenomenon into your rituals</p>
      <br/>
      <br/>
      <h3 ref={dreams} id='dreams'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>dreams</h3>
      <p>aim to listen to your dreams and take action during the day to accomdate what the mind and sky is telling you. staying sober enables a more productive and healthy envrionment for dreams to arise while sleeping. it's possible to train yourself to no longer need a dream journal.</p>
      <br/>
      <br/>
    </>
    
  )
}

const SpreadsView = () => {
  return (
    <>
      <h1>spreads</h1>
      <br/>
      <h3>jung spread</h3>
      <img style={{marginLeft: '-35px'}} src={jungTarotSpread} />
      <ul style={{width:'500px', margin: 'auto', textAlign: 'left'}}>
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
      <div style={{fontSize: '200px', fontWeight: '100'}}>▯ ▯ ▯</div>
      <br/>
      <hr/>
      <br/>
      <h3><a href="https://labyrinthos.co/blogs/learn-tarot-with-labyrinthos-academy/the-celtic-cross-tarot-spread-exploring-the-classic-10-card-tarot-spread">celtic cross</a></h3>
    </>
  )
}

const AudioView = () => {
  return (
    <>
      <h1>audio</h1>
      <p>for readings contact morgan @ <a href="mailto:build@deep6.org">build@deep6.org</a></p>
      <br/>
      <br/>
      <h3>example reading </h3>
      <i>coming soon</i>
      <br/>
      <br/>
      <h3>post spread</h3>
      <YouTube videoId={'GrNXVNqTI4Y'} />
    </>
  )
}

const ShopView = () => {
  return (
    <>
      <h1>shop</h1>
      <i>Hand Sensing Deck, coming september 2025</i>
    </>
  )
}

function App() {
  const [menu, setMenu] = useState(0)
  const [hideMenu, setHideMenu] = useState(true)
  const [menuState, setMenuState] = useState(true)

  useEffect(() => {

    window.addEventListener('scroll',function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // enter code here
      setHideMenu(false)
    } else {
      setHideMenu(true)
    }
    });

    if((window.location.href as string).split('/tricks').length == 2 && menu != 1 && menuState){
      setMenu(1)
      setMenuState(false)
      //@ts-ignore
      window.location = '/tricks' + (window.location.href as string).split('/tricks')[1]
    }
  }, [menu, hideMenu, menuState])

  const Compass = (view: any) => {
    let pin: any;

    switch(view){
      case 0:
        pin = <HomeView/>
        break;
      case 1:
        pin = <TricksView/>
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
      
      {hideMenu&&<div style={{position: 'fixed', top: '30px', right: '100px'}}>
        <span id="menu" style={{padding: '20px', cursor: 'pointer', textDecoration: menu == 0 ? 'underline': ''}} onClick={() => {
          setMenuState(false);
          setMenu(0)}}>♆ home</span>
        <span id="menu" style={{padding: '20px',  cursor: 'pointer', textDecoration: menu == 1 ?'underline': ''}}onClick={() => {setMenuState(true);setMenu(1)}}>🂿 tricks</span>
        <span id="menu" style={{padding: '20px',  cursor: 'pointer', textDecoration: menu == 2 ? 'underline': ''}}onClick={() => {setMenuState(false);setMenu(2)}}>✺ spreads</span>
        <span id="menu" style={{padding: '20px',  cursor: 'pointer', textDecoration: menu == 3 ? 'underline': ''}}onClick={() => {setMenuState(false);setMenu(3)}}>~ audio</span>
        <span id="menu" style={{padding: '20px',  cursor: 'pointer', textDecoration: menu == 4 ? 'underline': ''}}onClick={() => {setMenuState(false);setMenu(4)}}>⛤ shop</span>
      </div>}
      {

      }
      <div>
        {Compass(menu)}
      </div>
    </>
  )
}

export default App
