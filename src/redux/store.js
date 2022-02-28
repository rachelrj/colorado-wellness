import {createStore} from "redux";
import reducer from './reducer';
import STORETYPES from './storeTypes';

let initialState = {};

initialState[STORETYPES[0]] = [
{
    'id': 3,
    'title': 'How to Get More Out of Therapy',
    'authorName': 'Rachel Joyce',
    'content': '<p>I don\'t know about you, but I get confused about the different approaches to psychotherapy. What even is psychotherapy? Having a basic understanding of therapeutic strategies can help you in multiple ways. Knowing which practices work for you will help in choosing a therapist. You might look for a therapist that specializes in an approach that you are interested in. If you already are working with a therapist, you could be curious to try a new approach. And with so many options, you might want to explore multiple types, or ask your therapist for recommendations.</p><p>According to the <a href="https://www.apa.org/">American Psychological Association</a> there are five different theories, or categories, of psychotherapy.</p><p><strong>Psychoanalysis and psychodynamic therapies</strong></p><p>Psychoanalytic or psychodynamic psychotherapy draws on practices of analytical psychology and psychoanalysis. This approach will help you understand the underlying meaning of dreams, recurring thoughts, emotions, fantasies, and/or conflicts. This approach will also help explain any resistance to certain feelings. It relies heavily on your relationship with your therapist, because it explores the conscious and unconscious aspects of the therapeutic relationship. This practice requires that the patient trust his or her therapist and be open and honest when divulging information.</p><p><strong>Behavioral therapy</strong></p><p>Behavioral therapy identifies and helps change unhealthy behaviors. The idea behind this form of therapy is that unhealthy behaviors can be changed through learning. Do you feel that you turn to self-destructive behaviors when facing difficult situations or certain uncomfortable thoughts? Behavioral therapy might be a way to retrain your brain. There are multiple types of behavioral therapy including cognitive behavioral therapy, systematic desensitization, aversion therapy, flooding, and functional analytic psychotherapy. Ultimately, behavioral therapy can teach more effective coping mechanisms and help a person respond in a more postive way to stimuli.</p><p><strong>Cognitive therapy</strong></p><p>Cognitive therapy addresses thinking patterns. It aims to adjust dysfunctional emotions and behaviors by correcting the thoughts that generate those emotions and behaviors. These negative thoughts about oneself, others, or the world are often automatic and ingrained. Using cognative therapy, one can master techniques that defeat or invalidate these automatic thoughts. Cognitive behavioral therapy (CBT) is a system drawing from both the cognitive and behavioral therapy - combining these two approaches often attains results.</p><p><strong>Humanistic therapy</strong><p>Humanistic therapy helps patients reach their maximum potential through genuine concern and supportive care. Therapists themselves will focus on the strengths of the patient and highlight the patient\'s innate goodness. Topics covered include: How can you live in the present moment? How can you accept your current situation? How can you reach self-actualization? How can you impact the world? This approach will also build on your sense of self. If you are interested in existentialism, this is a category of psychotherapy to try.</p><p><strong>Integrative or holistic therapy</strong></p><p>Integrative/holistic therapy calls attention to the relationshhip between the mind, body, and spirit. Integrative therapists feel that a blended approach best treats each client. Holistic therapist could use bodywork techniques in order to release emotions.</p>',
    'img': '../img/therapy-approaches.jpg',
    'month': 2,
    'day': 10,
    'year': 2022,
    'categories': [
        'therapy',
        'psychotherapy',
    ]
},
{
    'id': 2,
    'title':'5 Intention Setting Journal Prompts for January',
    'content': 
    '<p>Creating a daily intention journal should be a consideration if you\'re planning on improving your health and wellness in 2022. Why? You are 42 percent more likely to achieve a goal if you write it down! This statistic was determined in <a href="https://www.dominican.edu/dominicannews/study-highlights-strategies-for-achieving-goals"> an academic study</a> by psychology professor Dr. Gail Matthews. Moreover, its difficult to stick to a long-term, large-scale goal. On the other hand, if you set smaller, attainable goals, you’ll be far more likely to stay motivated over time.</p><img src="../img/journaling.jpg"/><p>Convinced yet? If so, here are a few prompts for your journal-writing New Year\'s resolution:</p><p><strong>1) What have you been complaining most about lately? How can you change this?</strong></p><p>Personally, I\'ve been shocked and scared about the <a href="https://thebluegreenjourney.com/blog/10-major-current-environmental-problems/">current environmental disasters</a> - just recently, <a href=https://www.boulderoem.com/marshall-fire-donations-and-resource-center/>the Marshall fires</a> and the Amazon rainforest burning. I\'ve felt a bit hopeless in the midst of the catastophes. There are steps I can personally take (besides donating or becoming a first responder!). One thing I\'ve starting on my own to improve my ecological footprint is using <a href="https://us.whogivesacrap.org/">Who Gives a Crap</a> for my toilet paper and using <a href="https://www.earthbreeze.com/products/earthbreeze-ecosheets-laundry-detergent">eco friendly laundry sheets</a> for my detergent. These are small, easy changes.</p><p><strong>2) What might be the next step towards accomplishing a career goal? What can you do now?</strong></p><p>Maybe you have your eye on a promotion within the next two years. Or want to discuss boosting your salary at your next quarterly review. What examples might you give your boss to warrant that raise or promotion? Could you read a book related to your career, or a book about leadership in general? Or is there a new skill you could start learning? Or maybe just today, smile and have a chat with a co-worker that you wouldn\'t normally. Nothing is too small!</p><p><strong>3) Have you tried meditation? How does it make you feel?</strong></p><p>Have you incorporated mediation into your daily routine? If so, write a journal entry about how you felt after your daily meditation. Do you feel more clear-headed? Has your outlook on the day improved? If you aren\'t a daily meditator, try a short morning mediation. The <a href="https://www.calm.com/">calm app</a> has a few free mediations to try.</p><p><strong>4) Is there someone you\'ve been meaning to catch up with? Meaning to call?</strong></p><p>Are there important friends or family of yours that you haven\'t spoken to in over a year? I am one that is guilty of losing touch with friends. There are so many ways that relationships can deteriorate. Don\'t let it be because of lack of effort! So today, give that friend a call. Or at least shoot that person a message to show that you are thinking of him or her!</p><p><strong>5) How can you practice \'everyday creativity\' today? Report your mood.</strong></p><p>Focus on creativity today. How can you express yourself at work? Or at home? <a href="https://www.tandfonline.com/doi/abs/10.1080/17439760.2016.1257049">A recent study</a> has shown that spending time on creative goals during a day is associated with higher activated positive affect on that day. Some ideas for your creative endeavour include: painting a picture, writing a poem, creating a vision board, planning a surprise, or even rearranging/tidying your living space!</p></br><p>So, instead of the standard \'lose five lbs\' goal that you set every year, do something more intentional for your New Year\'s resolution. Grab a nice journal that gets your motivational juices flowing at the store today. Set those small intentions that will lead to meaningful changes over time.</p>',
    'authorName': 'Rachel Joyce',
    'img': '../img/journaling.jpg',
    'month': 1,
    'day': 20,
    'year': 2022,
    'categories': [
        'mindfulness',
        'self-identity',
        'journaling',
        'resolutions',
    ],
},
{
    'id': 1,
    'title':'An Example by F45',
    'content': 
    '<p>This is an example of an article that F45 might write about the 80 day challenge. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.</p>',
    'authorName': 'F45 Central Boulder',
    'img': '../img/f45-boulder-long.jpeg',
    'month': 1,
    'day': 31,
    'year': 2022,
    'categories': [
        'body comp',
        'hiit',
        'strength',
        'resolutions',
    ],
    'provider': 1,
}];


initialState[STORETYPES[1]] = [{
    'id': 1,
    'name': 'F45 Boulder',
    'description': '<p>F45 Training is a global fitness community specializing in innovative, high-intensity group workouts that are fast, fun, and results-driven.</p><p>F45 is specifically designed to provide a functional full-body workout while improving energy levels, metabolic rate, strength, and endurance.</p><p>F45 is one of the most time-efficient ways of training. We aim to burn up to 750 calories per 45-minute session.</p>',
    'phone': '13034953377',
    'email': 'centralboulder@f45training.com',
    'website': 'https://f45training.com/centralboulder/home',
    'address': '1750 29th St Suite 2020, Boulder, CO 80301',
    'location': {
        'lat': 40.017520,
        'long': -105.254830
    },
    'categories': [0],
    'subcategories': [2,3,5,9,10],
    'imgSource': '../img/f45-boulder.png',
    'headerSource': '../img/f45-boulder-long.jpeg',
    'creds': ['5+ Years in Business', 'Example: University Trained Health Professional',
    'Example: Membership in Association/Society', 'Example: Endorsement']
}, {
    'id': 2,
    'name': 'CorePower',
    'description': '<p>CorePower Yoga shares the transformative power of yoga with every mind, every body, everywhere. With almost 200 locations in 21 states and virtual livestreaming and video on-demand classes, we offer a physically intense workout that is rooted in the mindfulness of yoga.</p>',
    'phone': '13038639642',
    'email': 'customerexperience@corepoweryoga.com',
    'website': 'https://www.corepoweryoga.com/',
    'location': {
    },
    'categories': [0],
    'subcategories': [1,3,6,9],
    'imgSource': '../img/corepower.png',
    'creds': ['20+ Years in Practice']
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
    0: 'fitness',
};

initialState[STORETYPES[3]] = [
    {
        'id': 1,
        'name': 'Yoga',
        'mainCat': 0
    },{
        'id': 2,
        'name': 'HIIT',
        'mainCat': 0,

    },{
        'id': 3,
        'name': 'Stretch',
        'mainCat': 0,
    },{
        'id': 4,
        'name': 'Climbing',
        'mainCat': 0,
    },{
        'id': 6,
        'name': 'Recovery',
        'mainCat': 0,
    },{
        'id': 8,
        'name': 'Aerial',
        'mainCat': 0,
    },{
        'id': 9,
        'name': 'Strength',
        'mainCat': 0,
    }, {
        'id': 10,
        'name': 'Body Composition',
        'mainCat': 0,
    }
];

initialState[STORETYPES[4]] = [
    {
        'id': 1,
        'name': 'Meghan Kallok',
        'provider': 1,
        'rating': 'X',
        'review': '<p>Aenean rhoncus ultrices nulla nec rutrum. Aliquam hendrerit mollis massa, eu varius justo auctor at. Proin dignissim vulputate euismod. Ut in est non dui ultricies consectetur eu non mauris. Cras ornare libero justo, ut posuere metus feugiat a. Donec ut mauris sed eros posuere accumsan eget eget urna. Vestibulum eu nunc sit amet felis hendrerit maximus. Donec ultrices porttitor massa, varius venenatis turpis finibus et. Morbi eu sodales enim. Curabitur ut laoreet ex, eget varius neque. Etiam at risus in mauris euismod pellentesque et non lectus. In rutrum tempor arcu vitae rhoncus. Pellentesque et fringilla tortor. Praesent congue facilisis massa, in semper nisi semper et. Vestibulum ultricies erat id diam auctor finibus.</p>',
    },{
        'id': 2,
        'name': 'Rachel Joyce',
        'provider': 1,
        'rating': 9.5,
        'review': '<p>I\'ve taken over one hundred classes at F45 and I\'ve grown an opinion about the experience. Prove me wrong if you can, but I think that F45CB is the best workout in Boulder. I\'ll tell you why I think so:</p><ol><li>Time - You\'ll get a challenging workout, every. single. time. in under an hour</li><li>Variation - The workouts are different each day. Some days you\'ll improve your cardio, some days you\'ll build strength. Some days, both.</li><li>Inclusiveness - At F45CB, you don\'t have to be ultra fit to complete the workout. You push yourself wherever your fitness level is at. And, even if you\'re at the peak of your performance, you still can challenge yourself.</li><li>Professionalism - The intructors will walk around to correct your form, encourage you, and guide you through the workout. They\'ll also challenge you to push yourself if you\'re able.</li><li>Price - F45CB is obviously much cheaper than a personal trainer. And with an F45 membership, you can hit the gym every day and also do the challenge app workouts at home.</li></ol></p><p>And finally, I have to mention the staff at F45 Central Boulder. They definitely foster an uplifting environment. You\'ll find enthusiasm, motivation, and positive vibes. I feel that I\'ve found a community through my F45CB membership.</p><p>Update: I decided to dock one half point because, since F45s are individual franchises, you cannot use your membership at other F45 gyms. It\'s a bummer that I cannot work out in person while I travel.<p>',
    },{
        'id': 3,
        'name': 'Rachel Joyce',
        'provider': 2,
        'rating': 8,
        'review': '<p>I\'ll admit this at the beginning of my review: I am not a yoga person. If you want a review from a yogi, I would check out Meghan\'s or another person\'s review. Nonetheless, I was a CorePower member for over a year.</p><p>When I went to CorePower, I went mostly to their Yoga Sculpt class. I tried hot yoga in the Hot Power Fusion class and <a target="_blank" href="https://booksavenue.co/2014/08/08/man-posts-absolutely-captivating-ad-for-used-yoga-mat-on-craigslist/">felt like this individual</a>. It wasn\'t for me.</p><p>The Yoga Sculpt classes are high intensity. It uses light weights, poses and movements to build lean muscle and cardio. The website claims this class is for all skill levels. I once took a moderately fit friend to this class and she walked out halfway through; she was exhausted. So take that for what it\'s worth.</p><p>There are multiple studios in Boulder and classes run all day. You\'ll certainly be able to find classes that fit into your schedule.</p><p>The classes depend heavily on the instructor. A highly skilled instructor with a great playlist will run a bomb class. And I mostly had great instructors during the time I attended CorePower classes.</p>',
    },{
        'id': 4,
        'name': 'Meghan Kallok',
        'provider': 2,
        'rating': 'X',
        'review': '<p>Aenean rhoncus ultrices nulla nec rutrum. Aliquam hendrerit mollis massa, eu varius justo auctor at. Proin dignissim vulputate euismod. Ut in est non dui ultricies consectetur eu non mauris. Cras ornare libero justo, ut posuere metus feugiat a. Donec ut mauris sed eros posuere accumsan eget eget urna. Vestibulum eu nunc sit amet felis hendrerit maximus. Donec ultrices porttitor massa, varius venenatis turpis finibus et. Morbi eu sodales enim. Curabitur ut laoreet ex, eget varius neque. Etiam at risus in mauris euismod pellentesque et non lectus. In rutrum tempor arcu vitae rhoncus. Pellentesque et fringilla tortor. Praesent congue facilisis massa, in semper nisi semper et. Vestibulum ultricies erat id diam auctor finibus.</p>',
    },
];


export default createStore(reducer, initialState);