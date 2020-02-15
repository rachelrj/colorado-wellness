import {createStore} from "redux";
import reducer from './reducer';
import STORETYPES from './storeTypes';

let initialState = {};

initialState[STORETYPES[0]] = [{
    'id': 1,
    'title':'What are Triggers?',
    'content': '<p>A trigger is any form of stimuli that initiates the desire to engage in addictive behaviour.</p><p>At <a href="https://www.asvrehabmelbourne.org.au/our-program/drug-rehab-alcohol-rehab">ASV</a>, many of our clients state that stopping drinking or using is one thing and staying stopped, another.</p><p>Effective, evidenced based addiction treatment provides the individual the opportunity, within a safe, supportable and substance free environment, to begin to identify the underlying psychological and emotional issues fuelling the addictive behaviours. The purpose of an effective treatment process is to motivate internal change, providing the individual a realistic and sustainable opportunity at recovery.</p><img src="../img/woman-displeased.jpg"/><p>Triggers are associated with a behaviour, memory or situation that relates in some way to prior substance abuse behaviours. As someone struggles with addiction, the people they interact with, the places they spend their time and in some situations, the things they do become strongly associated with their addictive behaviour.</p><p>Moving into treatment and recovery, it helps to reduce exposure to these triggers as much as possible. This may require changing relationships, moving to a different side of town or making a career change.</p><p>Triggers prompt cravings, which are strong desires for a certain substance and can lead to relapse.</p><p>Learning how to identify triggers and developing strategies to manage cravings is a vital part of recovery from addiction.</p><p>Common triggers in addiction include:</p><ul><li>Stress</li><li>Financial Insecurity</li><li>Locations associated with using/drinking</li><li>People associated with using/drinking</li><li>Romances</li><li>Resentment</li></ul>',
    'authorName': 'Jason Bowen',
    'authorImgSource': '../img/jason-bowman-addiction-solutions.jpg',
    'img': '../img/woman-displeased.jpg',
    'month': 2,
    'day': 3,
    'year': 2020,
    'categories': [
        'addiction',
        'recovery'
    ],
    'provider': 1,
    'providerCat': STORETYPES[1],

},{
    'id': 2,
    'title':'5 Intention Setting Journal Prompts for January',
    'content': 
    '<p>Creating a daily intention journal should be a consideration if you\'re planning on improving your health and wellness in 2020. Why? You are 42 percent more likely to achieve a goal if you write it down! This statistic was determined in <a href="https://www.dominican.edu/dominicannews/study-highlights-strategies-for-achieving-goals"> an academic study</a> by psychology professor Dr. Gail Matthews. Moreover, its difficult to stick to a long-term, large-scale goal. On the other hand, if you set smaller, attainable goals, you’ll be far more likely to stay motivated over time.</p><img src="../img/journaling.jpg"/><p>Convinced yet? If so, here are a few prompts for your journal-writing New Year\'s resolution:</p><p><strong>1) What have you been complaining most about lately? How can you change this?</strong></p><p>Personally, I\'ve been shocked and scared about the current environmental disasters - just recently, the California fires, the Amazon rainforest burning, and the Australian bushfires. I\'ve felt a bit hopeless in the midst of the catastophes. There are steps I can personally take (besides donating or becoming a fire-fighter!). One thing I\'ve starting on my own to improve my ecological footprint is <a href="https://www.melbourne.vic.gov.au/residents/sustainability-at-home/Pages/home-composting.aspx"/>at home composting</a>.</p><p><strong>2) What might be the next step towards accomplishing a career goal? What can you do now?</strong></p><p>Maybe you have your eye on a promotion within the next two years. Or want to discuss boosting your salary at your next quarterly review. What examples might you give your boss to warrant that raise or promotion? Could you read a book related to your career, or a book about leadership in general? Or is there a new skill you could start learning? Or maybe just today, smile and have a chat with a co-worker that you wouldn\'t normally. Nothing is too small!</p><p><strong>3) Have you tried meditation? How does it make you feel?</strong></p><p>Have you incorporated mediation into your daily routine? If so, write a journal entry about how you felt after your daily meditation. Do you feel more clear-headed? Has your outlook on the day improved? If you aren\'t a daily meditator, try a short morning mediation. The <a href="https://www.calm.com/">calm app</a> has a few free mediations to try.</p><p><strong>4) Is there someone you\'ve been meaning to catch up with? Meaning to call?</strong></p><p>Are there important friends or family of yours that you haven\'t spoken to in over a year? I am one that is guilty of losing touch with friends. There are so many ways that relationships can deteriorate. Don\'t let it be because of lack of effort! So today, give that friend a call. Or at least shoot that person a message to show that you are thinking of him or her!</p><p><strong>5) How can you practice \'everyday creativity\' today? Report your mood.</strong></p><p>Focus on creativity today. How can you express yourself at work? Or at home? <a href="https://www.tandfonline.com/doi/abs/10.1080/17439760.2016.1257049">A recent study</a> has shown that spending time on creative goals during a day is associated with higher activated positive affect on that day. Some ideas for your creative endeavour include: painting a picture, writing a poem, planning a surprise, or even rearranging/tidying your living space!</p></br><p>So, instead of the standard \'lose five kilo\' goal that you set every year, do something more intentional for your New Year\'s resolution. Grab a nice journal that gets your motivational juices flowing at the store today. Set those small intentions that will lead to meaningful changes over time.</p>',
    'authorName': 'Rachel Joyce',
    'img': '../img/journaling.jpg',
    'month': 1,
    'day': 20,
    'year': 2020,
    'categories': [
        'mindfulness',
        'self-identity',
        'journaling',
        'resolutions',
    ],
}];


initialState[STORETYPES[1]] = [{
    'id': 1,
    'name': 'Addiction Solutions Victoria',
    'description': '<p>My name is Jason Bowman and I am the CEO at Addiction Solutions Victoria (ASV).</p><p>At ASV, we offer personalised and affordable recovery support packages delivered in the privacy and safety of peoples own homes. These packages provide people seeking support to substance misuse or addiction access to <a href="https://www.asvrehabmelbourne.org.au/about-us/asv-team-rehab-at-home-melbourne">experienced staff</a> and <a href="https://www.asvrehabmelbourne.org.au/about-us/why-asv-rehab-melbourne">evidenced based approaches</a> and provide all participants authentic opportunity at positive change.</p><p>ASV Incorporated is a <a href="https://www.consumer.vic.gov.au/">registered not-for-profit organisation</a> governed by a Board of committed family members, community members and people in recovery.</p>',
    'phone': '03 8374 7648',
    'email': 'jason@asvrehabmelbourne.org.au',
    'website': 'http://www.asvrehabmelbourne.org.au',
    'address': '1227-1229 Malvern Road, Malvern, VIC 3144',
    'location': {
        'lat': -37.851785,
        'long': 145.033853
    },
    'categories': [0],
    'subcategories': [1,2,3,4,5,6,7,8,9,10],
    'ABN': 123456789,
    'imgSource': '../img/addiction-solutions-victoria-logo.svg',
    'creds': ['Example: Number of Years in Practice', 'Example: University Trained Health Professional',
    'Example: Membership in Association/Society', 'Example: Endorsement']
}, {
    'id': 2,
    'name': 'Test Solutions',
    'description': '<p>Cupcake ipsum dolor sit amet. Tootsie roll fruitcake pie fruitcake chocolate cake carrot cake ice cream marzipan. Jelly beans cheesecake tart danish bear claw soufflé bear claw pudding chocolate bar. Donut bear claw chupa chups marzipan sugar plum donut.</p><p>Candy lemon drops croissant danish jelly beans. Lollipop soufflé muffin sesame snaps bonbon chocolate bar jelly-o chocolate cake. Liquorice cookie chocolate marzipan. Cookie candy brownie sesame snaps.</p>',
    'phone': '03 1234 4678',
    'email': 'test@test.org.au',
    'website': 'test.com',
    'location': {
    },
    'categories': [0],
    'subcategories': [2],
    'ABN': 123456789,
    'imgSource': '../img/placeholder.png',
    'creds': ['Example: Number of Years in Practice', 'Example: University Trained Health Professional',
    'Example: Membership in Association/Society', 'Example: Endorsement']
}, {
    'id': 3,
    'name': 'Bobson Dugnutt',
    'description': '<p>Bobsons name appears to have been drawn from a list of fake American-sounding names for baseball players that appeared in the Japanese SNES game Fighting Baseball.</p>',
    'phone': '03 1234 4678',
    'email': 'test@test.org.au',
    'address': '11 Brougham St., Kew, VIC 3101',
    'website': 'https://thedragonfriends.fandom.com/wiki/Bobson_Dugnutt',
    'location': {
        'lat': -37.805913,
        'long': 145.029884
    },
    'categories': [0],
    'subcategories': [3,5,8,9],
    'ABN': 123456789,
    'imgSource': '../img/bobson.jpg',
    'creds': ['Example: Number of Years in Practice', 'Example: University Trained Health Professional',
    'Example: Membership in Association/Society', 'Example: Endorsement']
}];

initialState[STORETYPES[2]] = {
    0: 'addiction',
};

initialState[STORETYPES[3]] = [
    {
        'id': 1,
        'name': 'treatment',
        'mainCat': 0
    },{
        'id': 2,
        'name': 'rehabilitation',
        'mainCat': 0,

    },{
        'id': 3,
        'name': 'counselling',
        'mainCat': 0,
    },{
        'id': 4,
        'name': 'programs',
        'mainCat': 0,
    },{
        'id': 5,
        'name': 'family support',
        'mainCat': 0,
    },{
        'id': 6,
        'name': 'recovery',
        'mainCat': 0,
    },{
        'id': 7,
        'name': 'detox',
        'mainCat': 0,
    },{
        'id': 8,
        'name': 'aftercare',
        'mainCat': 0,
    },{
        'id': 9,
        'name': 'addiction medicine',
        'mainCat': 0,
    }, {
        'id': 10,
        'name': 'psychology',
        'mainCat': 0,
    }
];

export default createStore(reducer, initialState);