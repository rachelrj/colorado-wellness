import React from 'react';
import Provider from '../../pages/Provider';
import {configure, shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Provider ', () => {  
    let store;

    const blogs = [
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
    const providers = [{
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

    }];
    const reviews = [{
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
        'rating': 7.5,
        'review': '<p>I\'ll admit this at the beginning of my review: I am not a yoga person. If you want a review from a yogi, I would check out Meghan\'s or another person\'s review. Nonetheless, I was a CorePower member for over a year.</p><p>When I went to CorePower, I went mostly to their Yoga Sculpt class. I tried hot yoga in the Hot Power Fusion class and <a target="_blank" href="https://booksavenue.co/2014/08/08/man-posts-absolutely-captivating-ad-for-used-yoga-mat-on-craigslist/">felt like this individual</a>. It wasn\'t for me.</p><p>The Yoga Sculpt classes are high intensity. It uses light weights, poses and movements to build lean muscle and cardio. The website claims this class is for all skill levels. I once took a moderately fit friend to this class and she walked out halfway through; she was exhausted. So take that for what it\'s worth.</p><p>There are multiple studios in Boulder and classes run all day. You\'ll certainly be able to find classes that fit into your schedule.</p><p>The classes depend heavily on the instructor. A highly skilled instructor with a great playlist will run a bomb class. And I mostly had great instructors during the time I attended CorePower classes.</p>',
    }];


    beforeEach(() => {
      store = mockStore({ BLOGS: blogs, PROVIDERS: providers, REVIEWS: reviews});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Renders review without crashing', () => {
    	shallow(<Provider store={store}/>);
    });

    it('Renders correct information', () => {
        const location = {
            "pathname": "colorado-wellness.herokuapp.com/colorado-fitness/1"
        }
    	let wrapper = mount(<Provider store={store} location={location}/>);

        expect(wrapper.find('Header').exists()).toBeTruthy();
        expect(wrapper.find('h1').text()).toEqual('F45 Boulder');
        expect(wrapper.find({ src: '../img/f45-boulder-long.jpeg' }).exists()).toBeTruthy();
        expect(wrapper.find('div#reviewContainer').children().length).toEqual(2);
        expect(wrapper.find({ href: 'https://f45training.com/centralboulder/home' }).exists()).toBeTruthy();
        expect(wrapper.find('Map').props().center).toEqual([40.01752, -105.25483]);
        expect(wrapper.find('Footer').exists()).toBeTruthy();  
    });
});
