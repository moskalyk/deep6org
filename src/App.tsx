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
  const graphVsTrees = useRef<any>(null)
  const room = useRef<any>(null)
  const astrology = useRef<any>(null)
  const miniMining = useRef<any>(null)
  const mixingNature = useRef<any>(null)
  const dreams = useRef<any>(null)
  const portalsOfTransport = useRef<any>(null)
  const tempMotion = useRef<any>(null)
  const ifOutOfTime = useRef<any>(null)
  const subtleWaterHardness = useRef<any>(null)

  function doWithThisElement(event: any) {
    event = event || window.event; // IE
    var target = event.target || event.srcElement; // IE

    var id = target.id;

    navigator.clipboard.writeText(window.location.host + "#" + id);
  }

  useEffect(() => {

    switch((window.location.href as string).split('#')[1]){
      case 'playing-cards':
        //@ts-ignore
        playingCards.current.scrollIntoView();
        break;

      case 'maat':
        //@ts-ignore
        maat.current.scrollIntoView();
        break;

      case 'entry-and-exit':
        //@ts-ignore
        entryAndExit.scrollIntoView();
        break;

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
      case 'graphs-vs-trees':
        //@ts-ignore
        graphVsTrees.scrollIntoView();

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
      case 'portals-of-transport':
        //@ts-ignore
        portalsOfTransport.scrollIntoView();

      break;
      case 'temp-motion':
        //@ts-ignore
        tempMotion.scrollIntoView();

      break;
      case 'if-out-of-time':
        //@ts-ignore
        ifOutOfTime.scrollIntoView();

      break;
      case 'subtle-water-hardness':
        //@ts-ignore
        subtleWaterHardness.scrollIntoView();
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
      <p>everything tends to maintain in balance over a certain time horizon. a simple action as a polar action. additionaly, when something becomes retired there tends to be a repitition of reapperance in some way in some other form.</p>
      <br/>
      <br/>
      <h3 ref={entryAndExit} id="entry-and-exit"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>entry / exit</h3>
      <p>it works to the advantage of safety and control to ensure that when performing ritual, someone is able to perform a beginning and ending to a certain magical spell or 'work'. this ensures there is less leakages of energy between the cognitioners attention and what appears in the environment.</p>
      <br/>
      <br/>
      <h3 ref={beech} id="beech"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>full year projects</h3>
      <p>the beech tree was the first wood for a book to be printed on. it also reminds use to not be afraid of extending a goal or work to a yearly project. it tends to represent the sum of the wisdom of all the other trees and represents longevity.</p>
      <br/>
      <br/>
      <h3 ref={antiDiffuse} id="anti-diffuse"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>anti-diffuse</h3>
      <p>as practioners and normal civilians, we tend to hold energy that needs to be released and acted upon in some way. this can be done with physical cards, or other approaches to see what is happening with a question you might have.</p>
      <br/>
      <br/>
      <h3 ref={scentsAndFood} id="scents-food"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>scents & food</h3>
      <p>as a protocol for memory, food and scents can be used to rejuvenate a state of mind, a memory, a default operating state, or, as a kind gesture to recoup a lost feeling of love. recording when you come up with new recipes can be just as good or better than a typical journal or diary.</p>
      <br/>
      <br/>
      <h3 ref={altair} id='altair'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>altair</h3>
      <p>it's important to keep your spatial pattern recognition in order and have a place you can keep objects you pick up on your travels. there's a saying, 'the object is the memory'. this can be useful for when you go on adventures, or, need to augment a reading to signify a time and place to retrieve an aura.</p>
      <br/>
      <br/>
      <h3 ref={seconds} id='seconds'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>seconds</h3>
      <p>be aware of the seconds that happen in your mind with what arises when, and train to think cleanly. use these 'scries' to dictate priorities and actions. “The happiness of your life depends upon the quality of your thoughts.” – Marcus Aurelius</p>
      <br/>
      <br/>
      <h3 ref={youth} id="youth"  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>youth</h3>
      <p>be not afraid to introduce youth to the practice of magic or astronomy. however I believe there are certain age steps for various scenarios. many oracle or tarot decks can have varying ages, so best to speak with someone who is familiar with the deck and community. for a tarot reading: 8 years old with parental advisory. learning a tarot deck solo: 12 years old. using a digital app for tarot: 16 years old.</p>
      <br/>
      <br/>
      <h3 ref={elementalFixing} id='elemental-fixing'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>elemental fixing</h3>
      <p>when exploring your elemental spirit, one can perform a ritual of fixing a constant element (choosing one from the earth, air, fire, water) and conjuring essences in the other elements as a way to have more stable control. for example, you can use the entry / exit tactics for beginning and ending a session with a single element, while exploring the other three. it helps to perform or utilise sound between sessions. by sitting, time horizons tend to be concentrated, versus standing, you are more dispersed (think, time and space).</p>
      <br/>
      <br/>
      <h3 ref={graphVsTrees} id='graphs-vs-trees'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>graphs compared to trees</h3>
      <p>when exploring scenarios of information that are related to your environment (for example the trick of environmental fixing), it's important to be aware of whether you're dealing with a graph structure or a tree structure. with graphs, you're more likely to repeat or rebound an outcome, which may cause internal introspection. it is possible to convert graphs to tree's and there are theoritical algorithms online, however a possible approach is to go till failure with karmic actions and intentions of safety. trees have a natural tendency when adding elements such as air and intellect to have movement, like leaves being blown in a tree. trees can also contain graphs contained within them (like fruit on a tree) which can also contain new trees that can grow.</p>
      <br/>
      <br/>
      <h3 ref={room} id='room'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>how to read the room</h3>
      <p>deep breaths, and awareness from the visual system is a great way to see, beyond time, where you are in the room of the void. windows still exist, however, it's a good idea to take stock of important priorities that are arising in the present before taking action.</p>
      <br/>
      <br/>
      <h3 ref={astrology} id='astrology'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>astrology</h3>
      <p>daily astrology is a fun way to swing between the planets and learn what is happening in the global skies. it's important to begin by learning your natal charts, then, use these to signify as stepping stones for advancing the year and planning.</p>
      <br/>
      <br/>
      <h3 ref={miniMining} id='mini-mining'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>mini-beliefs</h3>
      <p>one can look at a calendar as a stitched together grid that it not just day to day. weeks can become morphed together as long as you're keeping track of significant experiences on each day. you can use <a href="https://calendat.fun">this app</a> to do so where one can find windows of time to swing through dates from some zenith, anchor, mirrors, etc. to find patterns in the monthly calendar.</p>
      <br/>
      <br/>
      <h3 ref={mixingNature} id='mixing-nature'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)} >mixing nature</h3>
      <p>do not be afraid to mix plants, animals, totems, or other natural occuring phenomenon into your rituals.</p>
      <br/>
      <br/>
      <h3 ref={dreams} id='dreams'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>dreams</h3>
      <p>aim to listen to your dreams and take action during the day to accomdate what the mind and sky is telling you. staying sober enables a more productive and healthy environment for dreams to arise while sleeping. it's possible to train yourself to no longer need a dream journal.</p>
      <br/>
      <br/>
      <h3 ref={portalsOfTransport} id='portals-of-transport'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>portals of transportation</h3>
      <p>historic paths of the past and varying mode of transport can create 'after burner' effects creating an idea of an after burner funnel, where outbreak like quality can be achieved (think edge of funnel of portal and tail emissions).</p>
      <br/>
      <br/>
      <h3 ref={tempMotion} id='temp-motion'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>the fall movement</h3>
      <p>during times of the fall and temperatures outside that are close to the body, can give you ideal temperatures for movement and body temperature to make you feel aware of motion from wind.</p>
      <br/>
      <br/>
      <h3 ref={ifOutOfTime} id='if-out-of-time'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>if 'out of time'</h3>
      <p>moments can speckle out into the future where if we can't get everything done today or now, structures of goals can be picked up later as shapes in the calendar.</p>
      <br/>
      <br/>
      <h3 ref={subtleWaterHardness} id='subtle-water-hardness'  style={{cursor: 'pointer'}}  onClick={(evt) => doWithThisElement(evt)}>cold resiliency compared to sleep repair</h3>
      <p>rather than fully plunging in a cold bath or water for crown energy repair where both 'good' and 'bad' cycles patterns are saved and possibly numbed, one can stand in cold water up to shins and use hand gestures to signify significant sensing or emotional memories to align your energy and 'harden the good', then wait for a sleep cycle to fully repair and recycle the bad. think tai chi in shallow water.</p>
      <br/>
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
      <p>the intention is to allow readers and querents to get in tune with how to express emotions with sign like languages, with expansive words to decribe the description of the cards, and action oriented ways to construct the world.</p>
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
      
      {hideMenu&&<div style={{position: detectMob() ? 'relative': 'fixed', margin:'auto', left: detectMob() && '45%', transform:detectMob() &&  'translateX(-50%)', width: detectMob() && '300px', top: '30px', right: detectMob() ? '0px':'100px'}}>
        <span id="menu" style={{padding: '11px', margin: '5px', cursor: 'pointer', textDecoration: menu == 0 ? 'underline': ''}} onClick={() => {
          setMenu(0)}}>♆ home</span>
        <span id="menu" style={{padding: '11px',  margin: '5px',cursor: 'pointer', textDecoration: menu == 1 ?'underline': ''}}onClick={() => {setMenu(1)}}>🂡 tricks</span>
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
