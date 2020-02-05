import {createStore} from "redux";
import reducer from './reducer';
import STORETYPES from './storeTypes';

let initialState = {};

initialState[STORETYPES[0]] = [{
    'id': 1,
    'title':'What are Triggers?',
    'content': '<p>A trigger is any form of stimuli that initiates the desire to engage in addictive behaviour.</p><p>At <a href="https://www.asvrehabmelbourne.org.au/our-program/drug-rehab-alcohol-rehab">ASV</a>, many of our clients state that stopping drinking or using is one thing and staying stopped, another.</p><p>Effective, evidenced based addiction treatment provides the individual the opportunity, within a safe, supportable and substance free environment, to begin to identify the underlying psychological and emotional issues fuelling the addictive behaviours. The purpose of an effective treatment process is to motivate internal change, providing the individual a realistic and sustainable opportunity at recovery.</p><p>Triggers are associated with a behaviour, memory or situation that relates in some way to prior substance abuse behaviours. As someone struggles with addiction, the people they interact with, the places they spend their time and in some situations, the things they do become strongly associated with their addictive behaviour.</p><p>Moving into treatment and recovery, it helps to reduce exposure to these triggers as much as possible. This may require changing relationships, moving to a different side of town or making a career change.</p><img src="../img/woman-displeased.jpg"/><p>Triggers prompt cravings, which are strong desires for a certain substance and can lead to relapse.</p><p>Learning how to identify triggers and developing strategies to manage cravings is a vital part of recovery from addiction.</p><p>Common triggers in addiction include:</p><ul><li>Stress</li><li>Financial Insecurity</li><li>Locations associated with using/drinking</li><li>People associated with using/drinking</li><li>Romances</li><li>Resentment</li></ul>',
    'authorName': 'Jason Bowen',
    'authorImgSource': '../img/placeholder.png',
    'img': '../img/woman-displeased.jpg',
    'month': 2,
    'day': 3,
    'year': 2020,
    'categories': [
        'addiction',
        'recovery'
    ],

},{
    'id': 2,
    'title':'10 Intention Setting Journal Prompts for January',
    'content': 
    '<p>Cosmic fugue cosmos venture quasar Sea of Tranquility courage of our questions? From which we spring are creatures of the cosmos hundreds of thousands network of wormholes the sky calls to us the only home weve ever known. The sky calls to us dream of the minds eye intelligent beings invent the universe citizens of distant epochs made in the interiors of collapsing stars. Paroxysm of global death network of wormholes Drake Equation the sky calls to us vastness is bearable only through love a very small stage in a vast cosmic arena.</p><p>Hydrogen atoms dispassionate extraterrestrial observer ship of the imagination not a sunrise but a galaxyrise white dwarf something incredible is waiting to be known. Descended from astronomers courage of our questions descended from astronomers dream of the minds eye take root and flourish the carbon in our apple pies. Extraordinary claims require extraordinary evidence citizens of distant epochs bits of moving fluff the only home weve ever known the carbon in our apple pies concept of the number one.</p><p>A mote of dust suspended in a sunbeam trillion paroxysm of global death hydrogen atoms another world white dwarf. Vanquish the impossible gathered by gravity emerged into consciousness made in the interiors of collapsing stars kindling the energy hidden in matter finite but unbounded. Invent the universe realm of the galaxies kindling the energy hidden in matter citizens of distant epochs two ghostly white figures in coveralls and helmets are soflty dancing rich in heavy atoms.</p>',
    'authorName': 'Bobson Dugnutt',
    'authorImgSource': '../img/bobson.jpg',
    'img': 'https://via.placeholder.com/200x100.png',
    'month': 2,
    'day': 5,
    'year': 2020,
    'categories': [
        'mindfulness',
        'self-identity',
        'anxiety',
        'coping',
        'baseball',
    ],
},{
    'id': 3,
    'title':'The Benefits of Face-to-Face and Online Health Coaching',
    'content': 
    '<p>Cosmic fugue cosmos venture quasar Sea of Tranquility courage of our questions? From which we spring are creatures of the cosmos hundreds of thousands network of wormholes the sky calls to us the only home weve ever known. The sky calls to us dream of the minds eye intelligent beings invent the universe citizens of distant epochs made in the interiors of collapsing stars. Paroxysm of global death network of wormholes Drake Equation the sky calls to us vastness is bearable only through love a very small stage in a vast cosmic arena.</p><p>Hydrogen atoms dispassionate extraterrestrial observer ship of the imagination not a sunrise but a galaxyrise white dwarf something incredible is waiting to be known. Descended from astronomers courage of our questions descended from astronomers dream of the minds eye take root and flourish the carbon in our apple pies. Extraordinary claims require extraordinary evidence citizens of distant epochs bits of moving fluff the only home weve ever known the carbon in our apple pies concept of the number one.</p><p>A mote of dust suspended in a sunbeam trillion paroxysm of global death hydrogen atoms another world white dwarf. Vanquish the impossible gathered by gravity emerged into consciousness made in the interiors of collapsing stars kindling the energy hidden in matter finite but unbounded. Invent the universe realm of the galaxies kindling the energy hidden in matter citizens of distant epochs two ghostly white figures in coveralls and helmets are soflty dancing rich in heavy atoms.</p>',
    'authorName': 'Bobson Dugnutt',
    'authorImgSource': '../img/bobson.jpg',
    'month': 1,
    'day': 5,
    'year': 2020,
    'categories': [
        'mindfulness',
        'self-identity',
        'anxiety',
        'coping',
        'baseball',
    ],
},{
    'id': 4,
    'title':'Be patient and supportive - you dont need to understand my depression',
    'content': 
    '<p>Cosmic fugue cosmos venture quasar Sea of Tranquility courage of our questions? From which we spring are creatures of the cosmos hundreds of thousands network of wormholes the sky calls to us the only home weve ever known. The sky calls to us dream of the minds eye intelligent beings invent the universe citizens of distant epochs made in the interiors of collapsing stars. Paroxysm of global death network of wormholes Drake Equation the sky calls to us vastness is bearable only through love a very small stage in a vast cosmic arena.</p><p>Hydrogen atoms dispassionate extraterrestrial observer ship of the imagination not a sunrise but a galaxyrise white dwarf something incredible is waiting to be known. Descended from astronomers courage of our questions descended from astronomers dream of the minds eye take root and flourish the carbon in our apple pies. Extraordinary claims require extraordinary evidence citizens of distant epochs bits of moving fluff the only home weve ever known the carbon in our apple pies concept of the number one.</p><p>A mote of dust suspended in a sunbeam trillion paroxysm of global death hydrogen atoms another world white dwarf. Vanquish the impossible gathered by gravity emerged into consciousness made in the interiors of collapsing stars kindling the energy hidden in matter finite but unbounded. Invent the universe realm of the galaxies kindling the energy hidden in matter citizens of distant epochs two ghostly white figures in coveralls and helmets are soflty dancing rich in heavy atoms.</p>',
    'authorName': 'Bobson Dugnutt',
    'authorImgSource': '../img/bobson.jpg',
    'month': 1,
    'day': 10,
    'year': 2020,
    'categories': [
        'mindfulness',
        'self-identity',
        'anxiety',
        'coping',
        'baseball',
    ],
},{
    'id': 5,
    'title':'8 Year Sober and Still Growing',
    'content': 
    '<p>Cosmic fugue cosmos venture quasar Sea of Tranquility courage of our questions? From which we spring are creatures of the cosmos hundreds of thousands network of wormholes the sky calls to us the only home weve ever known. The sky calls to us dream of the minds eye intelligent beings invent the universe citizens of distant epochs made in the interiors of collapsing stars. Paroxysm of global death network of wormholes Drake Equation the sky calls to us vastness is bearable only through love a very small stage in a vast cosmic arena.</p><p>Hydrogen atoms dispassionate extraterrestrial observer ship of the imagination not a sunrise but a galaxyrise white dwarf something incredible is waiting to be known. Descended from astronomers courage of our questions descended from astronomers dream of the minds eye take root and flourish the carbon in our apple pies. Extraordinary claims require extraordinary evidence citizens of distant epochs bits of moving fluff the only home weve ever known the carbon in our apple pies concept of the number one.</p><p>A mote of dust suspended in a sunbeam trillion paroxysm of global death hydrogen atoms another world white dwarf. Vanquish the impossible gathered by gravity emerged into consciousness made in the interiors of collapsing stars kindling the energy hidden in matter finite but unbounded. Invent the universe realm of the galaxies kindling the energy hidden in matter citizens of distant epochs two ghostly white figures in coveralls and helmets are soflty dancing rich in heavy atoms.</p>',
    'authorName': 'Bobson Dugnutt',
    'authorImgSource': '../img/bobson.jpg',
    'month': 1,
    'day': 20,
    'year': 2020,
    'categories': [
        'mindfulness',
        'self-identity',
        'anxiety',
        'coping',
        'baseball',
    ],
},{
    'id': 6,
    'title':'How to Avoid the Trap of Family Roles',
    'content': 
    '<p>Cosmic fugue cosmos venture quasar Sea of Tranquility courage of our questions? From which we spring are creatures of the cosmos hundreds of thousands network of wormholes the sky calls to us the only home weve ever known. The sky calls to us dream of the minds eye intelligent beings invent the universe citizens of distant epochs made in the interiors of collapsing stars. Paroxysm of global death network of wormholes Drake Equation the sky calls to us vastness is bearable only through love a very small stage in a vast cosmic arena.</p><p>Hydrogen atoms dispassionate extraterrestrial observer ship of the imagination not a sunrise but a galaxyrise white dwarf something incredible is waiting to be known. Descended from astronomers courage of our questions descended from astronomers dream of the minds eye take root and flourish the carbon in our apple pies. Extraordinary claims require extraordinary evidence citizens of distant epochs bits of moving fluff the only home weve ever known the carbon in our apple pies concept of the number one.</p><p>A mote of dust suspended in a sunbeam trillion paroxysm of global death hydrogen atoms another world white dwarf. Vanquish the impossible gathered by gravity emerged into consciousness made in the interiors of collapsing stars kindling the energy hidden in matter finite but unbounded. Invent the universe realm of the galaxies kindling the energy hidden in matter citizens of distant epochs two ghostly white figures in coveralls and helmets are soflty dancing rich in heavy atoms.</p>',
    'authorName': 'Bobson Dugnutt',
    'authorImgSource': '../img/bobson.jpg',
    'month': 1,
    'day': 30,
    'year': 2020,
    'categories': [
        'mindfulness',
        'self-identity',
        'anxiety',
        'coping',
        'baseball',
    ],
}];


initialState[STORETYPES[1]] = [{
    'id': 1,
    'name': 'Addiction Solutions Victoria',
    'description': '<p>My name is Jason Bowman and I am the CEO at Addiction Solutions Victoria (ASV).</p><p>At ASV, we offer personalised and affordable recovery support packages delivered in the privacy and safety of peoples own homes. These packages provide people seeking support to substance misuse or addiction access to <a href="https://www.asvrehabmelbourne.org.au/about-us/asv-team-rehab-at-home-melbourne">experienced staff</a> and <a href="https://www.asvrehabmelbourne.org.au/about-us/why-asv-rehab-melbourne">evidenced based approaches</a> and provide all participants authentic opportunity at positive change.</p><p>ASV Incorporated is a <a href="https://www.consumer.vic.gov.au/">registered not-for-profit organisation</a> governed by a Board of committed family members, community members and people in recovery.</p>',
    'phone': '03 8374 7648',
    'email': 'jason@asvrehabmelbourne.org.au',
    'address': '1227-1229 Malvern Road, Malvern, VIC 3144',
    'location': {
        'lat': -37.851785,
        'long': 145.033853
    },
    'categories': [],
    'ABN': 123456789,
    'imgSource': ''
}, {
    'id': 2,
    'name': 'Test Solutions',
    'description': '<p>Cupcake ipsum dolor sit amet. Tootsie roll fruitcake pie fruitcake chocolate cake carrot cake ice cream marzipan. Jelly beans cheesecake tart danish bear claw soufflé bear claw pudding chocolate bar. Donut bear claw chupa chups marzipan sugar plum donut.</p><p>Candy lemon drops croissant danish jelly beans. Lollipop soufflé muffin sesame snaps bonbon chocolate bar jelly-o chocolate cake. Liquorice cookie chocolate marzipan. Cookie candy brownie sesame snaps.</p>',
    'phone': '03 1234 4678',
    'email': 'test@test.org.au',
    'address': '11 Brougham St., Kew, VIC 3101',
    'location': {
        'lat': -37.805913,
        'long': 145.029884
    },
    'categories': [],
    'ABN': 123456789,
    'imgSource': ''
}, {
    'id': 3,
    'name': 'Bobson Dugnutt',
    'description': '<p>Bobsons name appears to have been drawn from a list of fake American-sounding names for baseball players that appeared in the Japanese SNES game Fighting Baseball.</p>',
    'phone': '03 1234 4678',
    'email': 'test@test.org.au',
    'address': '11 Brougham St., Kew, VIC 3101',
    'location': {
        'lat': -37.805913,
        'long': 145.029884
    },
    'categories': [],
    'ABN': 123456789,
    'imgSource': ''
}];

export default createStore(reducer, initialState);