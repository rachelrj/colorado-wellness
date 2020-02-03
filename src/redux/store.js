import {createStore} from "redux";
import reducer from './reducer';

const initialState = [{
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
},];
export default createStore(reducer, initialState);