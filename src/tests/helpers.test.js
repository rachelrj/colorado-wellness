import { expect } from 'chai';
import { getPastMonth, convertTitleToUrl, getMonthString, getBlogPosts } from '../helpers';


describe('get past month ', () => {   
    it('gets one month ago', () => {
        const date = new Date();
        const lastMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        const helpersDate = getPastMonth(1);

        expect(helpersDate.getMonth()).to.equal(lastMonthDate.getMonth());
    });

    it('gets twelve months ago ', () => {
        const date = new Date();
        const lastMonthDate = new Date(date.getFullYear() - 1 , date.getMonth(), 1);
        const helpersDate = getPastMonth(12);

        expect(helpersDate.getMonth()).to.equal(lastMonthDate.getMonth());
    });

    it('gets zero months ago ', () => {
        const date = new Date();
        const helpersDate = getPastMonth(0);

        expect(helpersDate.getMonth()).to.equal(date.getMonth());
    });
});

describe('convert title to url ', () => {  
    it('converts basic title to url ', () => {
        const post = {
            title: 'Basic Title'
        }
        const convertedTitle = convertTitleToUrl(post);

        expect(convertedTitle).to.equal("Basic-Title");

    });

    it('converts unusual title to url ', () => {
        const post = {
            title: '!    Whoa.   I\'m weeeiiirrrddddd%'
        }
        const convertedTitle = convertTitleToUrl(post);

        expect(convertedTitle).to.equal("----Whoa---I'm-weeeiiirrrddddd");

    });
});

describe('get month string ', () => {  
    it('for January ', () => {
        const monthString = getMonthString(1);

        expect(monthString).to.equal("Jan");
    });

    it('for February ', () => {
        const monthString = getMonthString(2);

        expect(monthString).to.equal("Feb");
    });

    it('for May ', () => {
        const monthString = getMonthString(5);

        expect(monthString).to.equal("May");
    });

    it('for July ', () => {
        const monthString = getMonthString(7);

        expect(monthString).to.equal("July");
    });

    it('for August ', () => {
        const monthString = getMonthString(8);

        expect(monthString).to.equal("Aug");
    });

    it('for October ', () => {
        const monthString = getMonthString(10);

        expect(monthString).to.equal("Oct");
    });

    it('for December ', () => {
        const monthString = getMonthString(12);

        expect(monthString).to.equal("Dec");
    });
});

describe('get blog posts ', () => {  

    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();

    const blogPosts = [{
        'id': 3,
        'title': 'How to Get More Out of Therapy',
        'authorName': 'Rachel Joyce',
        'content': '<p>I don\'t know about you, but I get confused about the different approaches to psychotherapy. What even is psychotherapy? Having a basic understanding of therapeutic strategies can help you in multiple ways. Knowing which practices work for you will help in choosing a therapist. You might look for a therapist that specializes in an approach that you are interested in. If you already are working with a therapist, you could be curious to try a new approach. And with so many options, you might want to explore multiple types, or ask your therapist for recommendations.</p><p>According to the <a href="https://www.apa.org/">American Psychological Association</a> there are five different theories, or categories, of psychotherapy.</p><p><strong>Psychoanalysis and psychodynamic therapies</strong></p><p>Psychoanalytic or psychodynamic psychotherapy draws on practices of analytical psychology and psychoanalysis. This approach will help you understand the underlying meaning of dreams, recurring thoughts, emotions, fantasies, and/or conflicts. This approach will also help explain any resistance to certain feelings. It relies heavily on your relationship with your therapist, because it explores the conscious and unconscious aspects of the therapeutic relationship. This practice requires that the patient trust his or her therapist and be open and honest when divulging information.</p><p><strong>Behavioral therapy</strong></p><p>Behavioral therapy identifies and helps change unhealthy behaviors. The idea behind this form of therapy is that unhealthy behaviors can be changed through learning. Do you feel that you turn to self-destructive behaviors when facing difficult situations or certain uncomfortable thoughts? Behavioral therapy might be a way to retrain your brain. There are multiple types of behavioral therapy including cognitive behavioral therapy, systematic desensitization, aversion therapy, flooding, and functional analytic psychotherapy. Ultimately, behavioral therapy can teach more effective coping mechanisms and help a person respond in a more postive way to stimuli.</p><p><strong>Cognitive therapy</strong></p><p>Cognitive therapy addresses thinking patterns. It aims to adjust dysfunctional emotions and behaviors by correcting the thoughts that generate those emotions and behaviors. These negative thoughts about oneself, others, or the world are often automatic and ingrained. Using cognative therapy, one can master techniques that defeat or invalidate these automatic thoughts. Cognitive behavioral therapy (CBT) is a system drawing from both the cognitive and behavioral therapy - combining these two approaches often attains results.</p><p><strong>Humanistic therapy</strong><p>Humanistic therapy helps patients reach their maximum potential through genuine concern and supportive care. Therapists themselves will focus on the strengths of the patient and highlight the patient\'s innate goodness. Topics covered include: How can you live in the present moment? How can you accept your current situation? How can you reach self-actualization? How can you impact the world? This approach will also build on your sense of self. If you are interested in existentialism, this is a category of psychotherapy to try.</p><p><strong>Integrative or holistic therapy</strong></p><p>Integrative/holistic therapy calls attention to the relationshhip between the mind, body, and spirit. Integrative therapists feel that a blended approach best treats each client. Holistic therapist could use bodywork techniques in order to release emotions.</p>',
        'img': '../img/therapy-approaches.jpg',
        'month': mm,
        'day': dd,
        'year': yyyy,
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
        'month': mm,
        'day': dd,
        'year': yyyy-1,
        'categories': [
            'mindfulness',
            'self-identity',
            'journaling',
            'resolutions',
        ],
    }];

    it('for last month ', () => {
        const posts = getBlogPosts(blogPosts, 1);

        expect(posts.length).to.equal(1);
    });

    it('for last year ', () => {
        const posts = getBlogPosts(blogPosts, 15);

        expect(posts.length).to.equal(2);
    });
});
