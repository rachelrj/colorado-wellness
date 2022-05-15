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
    'title':'Red Light for your Skin',
    'content': 
    '<p>You may have heard of red light therapy as a treatment for your skin. Is it a fad? Does it really benefit your skin? What else is it supposedly good for?</p><p>Yes. Red light therapy is great for your skin. But when I asked my dermatologist at <a target="_blank" href="https://www.azealderm.com/">Azeal Dermatology Institute</a> she said it\'s like working out. You need to regularly go to red light therapy for it to be beneficial.</p><img src="../img/red-light-therapy.jpg"/><p>So what exactly is red light therapy?</p><p>First of all, this is NOT the same light as in a tanning booth. And it does NOT expose you to damaging UV rays. According to <a href="https://www.webmd.com/skin-problems-and-treatments/red-light-therapy" target="_blank">WebMD</a>, red light therapy helps the mitochondria in your cells make more energy. So, this is why experts believe that red light helps cells repair themselves and become healthier.</p><p>Red light therapy is also called photobiomodulation (PBM). And this is what it\'s been called at <a target="_blank" href="https://www.restore.com/locations/co-boulder-co006">Restore Hyper Wellness</a> where I\'ve received the treatment.</p><p>There have been hundreds of clinical studies and thousands of laboratory studies conducted. According to <a href="https://www.healthline.com/health/red-light-therapy#evidenced--based-benefits" target="_blank">Healthline</a>, these are some of the evidence-based benefits: <ul><li>Promotes wound healing</li><li>Improves hair growth in people with androgenic alopecia</li><li>Helps for the short-term treatment of carpal tunnel syndrome</li><li>Stimulates healing of slow-healing wounds</li><li>Reduces psoriasis lesions</li><li>Aids with short-term relief of pain and morning stiffness in people with rheumatoid arthritis</li><li>Reduces some of the side effects of cancer treatments</li><li>Improves skin complexion and builds collagen</li><li>Helps to mend sun damage</li><li>Prevents recurring cold sores from herpes simplex virus infections</li><li>Helps diminish scars</li><li>Relieves pain and inflammation</li></ul><p id="endP">Check with your doctor or provider before trying red light therapy. If you do, send us a message and let us know how you feel afterwards. I know I feel quite warm and refreshed!</p>',
    'authorName': 'Rachel Joyce',
    'img': '../img/red-light-therapy.jpg',
    'month': 1,
    'day': 31,
    'year': 2022,
    'categories': [
        'red light',
        'pbm',
        'restorative',
        'skin health',
    ],
}];


initialState[STORETYPES[1]] = [{
    'id': 1,
    'name': 'F45 Boulder',
    'description': '<p>F45 Training is a global fitness community specializing in innovative, high-intensity group workouts that are fast, fun, and results-driven.</p><p>It is specifically designed to provide a functional full-body workout while improving energy levels, metabolic rate, strength, and endurance.</p><p>F45 is one of the most time-efficient ways of training. We aim to burn up to 750 calories per 45-minute session.</p>',
    'phone': '13034953377',
    'email': 'centralboulder@f45training.com',
    'website': 'https://f45training.com/centralboulder/home',
    'address': '1750 29th St Suite 2020, Boulder, CO 80301',
    'location': {
        'lat': 40.017520,
        'long': -105.254830
    },
    'categories': [0],
    'subcategories': [2,3,5,9],
    'imgSource': '../img/f45-boulder.png',
    'headerSource': '../img/f45-boulder-long.jpeg',
    'creds': ['5+ Years in Business'],
    'city': ['Boulder'],
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
    'headerSource': '../img/corepower-boulder.jpg',
    'creds': ['20+ Years in Practice'],
    'city': ['Boulder'],
}, {
    'id': 3,
    'name': 'Parkrun Boulder',
    'description': '<p>A free, fun, and friendly weekly 5k community event. Walk, jog, run, volunteer or spectate – it\'s up to you! Register ahead of the run to recieve a barcode which tracks your time. The event takes place at East Boulder Community Center every Saturday at 9am in the winter and 8am in the summer.</p>',
    'email': 'southbouldercreek@parkrun.com',
    'address': '5660 Sioux Dr, Boulder, CO 80303',
    'website': 'https://www.parkrun.us/southbouldercreek/',
    'location': {
        'lat': 39.993032,
        'long': -105.218904
    },
    'categories': [0],
    'subcategories': [10],
    'imgSource': '../img/parkrun.png',
    'headerSource': '../img/parkrun-header.png',
    'city': ['Boulder'],
},{
    'id': 4,
    'name': 'Movement Boulder',
    'description': '<p>Movement is one climbing gym located in the heart of Boulder. The lead climbing and top rope terrain include the nationally renowned Grey Wall and creative, challenging boulder problems. Built in 2009, thier flagship facility measures 22,000 square feet, with 66 independent anchors, over 100 bouldering problems, and 30-40 foot walls.</p>',
    'phone': '13034431505',
    'email': 'boulder@movementgyms.com',
    'website': 'https://movementgyms.com/',
    'address': '2845 Valmont Road Boulder, CO 80301',
    'location': {
        'lat': 40.029815,
        'long': -105.257220
    },
    'categories': [0],
    'subcategories': [1,3,4],
    'imgSource': '../img/movement-climbing.png',
    'headerSource': '../img/movement-climbing-yoga-fitness.jpeg',
    'city': ['Boulder'],
},{
    'id': 5,
    'name': 'The Spot Boulder',
    'description': '<p>Rock climbing in Boulder, Denver, Golden, and Louisville. When you join the Spot Fam, you join a community of supportive climbers across 4 gyms. You’ll unlock 70,000 sq. ft. of unlimited climbing, free Intro to Bouldering and Intro to Ropes classes during your first 3 months, gear discounts, guest passes and so much more.</p>',
    'phone': '13033798806',
    'email': 'marketing@thespotgym.com',
    'website': 'https://www.thespotgym.com/',
    'address': '3240 Prairie Ave, Boulder, CO 80301',
    'location': {
        'lat': 40.0217577,
        'long': -105.250571
    },
    'categories': [0],
    'subcategories': [4],
    'imgSource': '../img/the-spot.png',
    'headerSource': '../img/the-spot-boulder.png',
    'city': ['Boulder'],
}, {
    'id': 6,
    'name': 'Runners Roost Run Club Boulder',
    'description': '<p>Runners Roost Run Clubs are offered at all Roost locations, are free, and are open to all. The Boulder event takes place at the Runner\'s Roost on South Broadway every Wednesday. The 6-7 mile trail run starts at 5:30pm and the 5k road run starts at 6pm. There are also trail runs the first Sunday of every month at 9am.</p>',
    'email': 'tricia.vieth@runnersroost.com',
    'address': '629 S. Broadway, Suite E Boulder CO',
    'website': 'https://runnersroost.com/runners-roost-boulder/',
    'location': {
        'lat': 39.983931,
        'long': -105.249024
    },
    'categories': [0],
    'subcategories': [10],
    'imgSource': '../img/runners-roost.png',
    'headerSource': '../img/runners-roost-run-club.jpeg',
    'city': ['Boulder'],
},{
    'id': 7,
    'name': 'F45 West Highlands',
    'description': '<p>F45 Training is a global fitness community specializing in innovative, high-intensity group workouts that are fast, fun, and results-driven.</p><p>It is specifically designed to provide a functional full-body workout while improving energy levels, metabolic rate, strength, and endurance.</p><p>F45 is one of the most time-efficient ways of training. We aim to burn up to 750 calories per 45-minute session.</p>',
    'email': 'westhighland@f45training.com',
    'address': '3460 W 38th Ave, Denver, CO 80211',
    'phone': '13035290567',
    'website': 'https://f45training.com/westhighland/home',
    'location': {
        'lat': 39.7694312,
        'long': -105.0335319
    },
    'categories': [0],
    'subcategories': [2,3,5,9],
    'imgSource': '../img/f45-boulder.png',
    'headerSource': '../img/f45-highlands-long.jpeg',
    'city': ['Denver'],
}, ];

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
        'name': 'Running',
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
        'rating': 9,
        'review': '<p>I\'ve taken over one hundred classes at F45 and I\'ve grown an opinion about the experience. Prove me wrong if you can, but I think that F45CB is the best workout in Boulder. I\'ll tell you why I think so:</p><ol><li>Time - You\'ll get a challenging workout, every. single. time. in under an hour</li><li>Variation - The workouts are different each day. Some days you\'ll improve your cardio, some days you\'ll build strength. Some days, both.</li><li>Inclusiveness - At F45CB, you don\'t have to be ultra fit to complete the workout. You push yourself wherever your fitness level is at. And, even if you\'re at the peak of your performance, you still can challenge yourself.</li><li>Professionalism - The intructors will walk around to correct your form, encourage you, and guide you through the workout. They\'ll also challenge you to push yourself if you\'re able.</li><li>Price - F45CB is obviously much cheaper than a personal trainer. And with an F45 membership, you can hit the gym every day and also do the challenge app workouts at home. The unlimited membership is $40/week.</li></ol></p><p>And finally, I have to mention the staff at F45 Central Boulder. They definitely foster an uplifting environment. You\'ll find enthusiasm, motivation, and positive vibes. I feel that I\'ve found a community through my F45CB membership.</p><p>Update: I decided to dock one point because, since F45s are individual franchises, you cannot use your membership at other F45 gyms. Also, there are only about six in person classes each day.<p>',
    },{
        'id': 3,
        'name': 'Rachel Joyce',
        'provider': 2,
        'rating': 7,
        'review': '<p>I\'ll admit this at the beginning of my review: I am not a yoga person. If you want a review from a yogi, I would check out Meghan\'s or another person\'s review. Nonetheless, I was a CorePower member for over a year.</p><p>When I went to CorePower, I went mostly to their Yoga Sculpt class. I tried hot yoga in the Hot Power Fusion class and <a target="_blank" href="https://booksavenue.co/2014/08/08/man-posts-absolutely-captivating-ad-for-used-yoga-mat-on-craigslist/">felt like this individual</a>. It wasn\'t for me.</p><p>The Yoga Sculpt classes are high intensity. It uses light weights, poses and movements to build lean muscle and cardio. The website claims this class is for all skill levels. I once took a moderately fit friend to this class and she walked out halfway through; she was exhausted. So take that for what it\'s worth.</p><p>There are multiple studios in Boulder and classes run all day. You\'ll certainly be able to find classes that fit into your schedule.</p><p>The classes depend heavily on the instructor. A highly skilled instructor with a great playlist will run a bomb class. And I mostly had great instructors during the time I attended CorePower classes.</p>',
    },{
        'id': 4,
        'name': 'Meghan Kallok',
        'provider': 2,
        'rating': 'X',
        'review': '<p>Aenean rhoncus ultrices nulla nec rutrum. Aliquam hendrerit mollis massa, eu varius justo auctor at. Proin dignissim vulputate euismod. Ut in est non dui ultricies consectetur eu non mauris. Cras ornare libero justo, ut posuere metus feugiat a. Donec ut mauris sed eros posuere accumsan eget eget urna. Vestibulum eu nunc sit amet felis hendrerit maximus. Donec ultrices porttitor massa, varius venenatis turpis finibus et. Morbi eu sodales enim. Curabitur ut laoreet ex, eget varius neque. Etiam at risus in mauris euismod pellentesque et non lectus. In rutrum tempor arcu vitae rhoncus. Pellentesque et fringilla tortor. Praesent congue facilisis massa, in semper nisi semper et. Vestibulum ultricies erat id diam auctor finibus.</p>',
    },{
        'id': 5,
        'name': 'Ankit Prakash',
        'provider': 4,
        'rating': 7,
        'review': '<p>Q: How long have you been a member?</p><p>A: Almost since I moved here. Since 2015ish.</p><br/><p>Q: How is the variation of climbing terrain?</p><p>A: It\'s okay. There is a decent amount of variety, but I wouldn\'t say a lot.</p><br/><p>Q: Have you done any of the yoga or the fitness classes?</p><p>A: Yes. The yoga was kind mediocre. I\'ve taken climbing training classes and a head stand class that were pretty cool.</p><br/><p>Q: What do you pay for a membership?</p><p>A: I think it\'s $85/month now.</p><br/><p>Q: Is it the best indoor climbing gym in Boulder?</p><p>A: I\'ve been to The Spot and BRC and yeah, I think its the better of the three.</p><br/><p>Q: Is there anything else about Movement that you\'d comment on?</p><p>A: Parking can be a pain when it\'s busy.</p>',
    },{
        'id': 6,
        'name': 'Rachel Joyce',
        'provider': 3,
        'rating': 10,
        'review': '<p>I never heard of Parkruns until 2021! I was looking for a race that a friend and I could sign up for and happened upon the South Boulder Creek Parkrun. I\'m so glad that we tried it out. Jen and I have been running the Parkrun every week that we can.</p><p>Parkruns are completely free and also timed. Just register and show up. The system tracks all of your races. So you can view your times online afterward. There are Parkruns all over the country and even the World. It\'s all volunteer based. Volunteers will debrief you on the course, direct you, and record your time.</p><p>I\'ll also note that the community at the South Boulder Creek Parkrun is inclusive, friendly and upbeat. Don\'t be scared to show up. The community warmly welcomes all new runners. You can run a 16 minute 5k or a 45 minute 5k, or anything inbetween. (I believe you can even walk the course if you like). I highly recommend attending these runs if you enjoy run clubs or running events.</p>',
    },{
        'id': 7,
        'name': 'John Doe',
        'provider': 5,
        'rating': 'X',
        'review': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lacus convallis lectus auctor viverra. Pellentesque imperdiet ex augue, at ullamcorper nibh ornare non. Nam leo neque, molestie sit amet justo non, pharetra placerat justo. Donec lorem justo, accumsan vel bibendum in, ornare at ex. Cras purus mi, laoreet vitae metus vel, lacinia congue nunc. Praesent tempor dui ut leo vestibulum, eu aliquet massa sagittis. Maecenas a metus non lorem interdum elementum in id enim. Praesent sit amet rutrum tortor. In rhoncus pretium fermentum. Nunc eleifend sem quam, eu cursus nunc elementum quis. Pellentesque facilisis ipsum non nibh vulputate, ac rutrum sapien accumsan. Aliquam lorem augue, tempus id ornare id, commodo quis elit. Etiam elementum dignissim nibh.</p><p>Sed magna purus, convallis sed dictum quis, fringilla eu justo. Ut dictum tellus id lobortis finibus. Cras accumsan rhoncus massa vel pretium. Fusce et nunc turpis. Aenean bibendum nibh nisl, non facilisis nisi venenatis vitae. Ut euismod est in convallis scelerisque. Duis cursus, quam sit amet facilisis pretium, purus diam egestas est, sed rutrum dui ligula eget nibh. Proin eleifend justo eu lorem porta, euismod tempus velit vehicula. Aenean non arcu nec orci dignissim tincidunt. In at ultricies ipsum. Maecenas sit amet sem ex. Nullam egestas ligula id lectus elementum porta. Nam id aliquet nunc. Vestibulum lacus nibh, pulvinar eu tempor laoreet, eleifend et turpis. Cras eget tempus sapien.</p>',
    }, {
        'id': 8,
        'name': 'Rachel Joyce',
        'provider': 6,
        'rating': 8,
        'review': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lacus convallis lectus auctor viverra. Pellentesque imperdiet ex augue, at ullamcorper nibh ornare non. Nam leo neque, molestie sit amet justo non, pharetra placerat justo. Donec lorem justo, accumsan vel bibendum in, ornare at ex. Cras purus mi, laoreet vitae metus vel, lacinia congue nunc. Praesent tempor dui ut leo vestibulum, eu aliquet massa sagittis. Maecenas a metus non lorem interdum elementum in id enim. Praesent sit amet rutrum tortor. In rhoncus pretium fermentum. Nunc eleifend sem quam, eu cursus nunc elementum quis. Pellentesque facilisis ipsum non nibh vulputate, ac rutrum sapien accumsan. Aliquam lorem augue, tempus id ornare id, commodo quis elit. Etiam elementum dignissim nibh.</p><p>Sed magna purus, convallis sed dictum quis, fringilla eu justo. Ut dictum tellus id lobortis finibus. Cras accumsan rhoncus massa vel pretium. Fusce et nunc turpis. Aenean bibendum nibh nisl, non facilisis nisi venenatis vitae. Ut euismod est in convallis scelerisque. Duis cursus, quam sit amet facilisis pretium, purus diam egestas est, sed rutrum dui ligula eget nibh. Proin eleifend justo eu lorem porta, euismod tempus velit vehicula. Aenean non arcu nec orci dignissim tincidunt. In at ultricies ipsum. Maecenas sit amet sem ex. Nullam egestas ligula id lectus elementum porta. Nam id aliquet nunc. Vestibulum lacus nibh, pulvinar eu tempor laoreet, eleifend et turpis. Cras eget tempus sapien.</p>',
    }, {
        'id': 9,
        'name': 'Meghan Kallok',
        'provider': 7,
        'rating': 10,
        'review': '<p>For those of you that are unfamilar with F45, I like to think of it as a functional HIIT class. The exercises mimic everyday movement and typically involve the use of full body and multiple muscle groups. To say that I am hooked is an understatement. The trainers, community, and variety in the workouts are unparalleled. Each day is a new and exciting workout alternating between strength, HIIT and hybrid.</p><p>F45 West Highlands in Denver has an energetic and engaging vibe. The trainers, and I mean all of them, bring the energy to push you past your comfort zone with each and every workout. That being said, they’re mindful of meeting everyone at their own unique fitness level and offer modifications or alternative movements that are safe in your body.</p><p>Not only does F45 provide a great total body workout that will whip you into shape, they dedicate time to educate the community on nutrition and fueling your body. Who wants to waste the hard work put in during training? They provide quarterly challenges to measure your body composition, talk about goals, and put together a nutrition and fitness plans to make those goals achievable.</p><p>If you are new to the area they always have a deal going - and I say go for it!!</p>',
    }
];


export default createStore(reducer, initialState);