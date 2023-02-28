const categories = {
    countriesNames: ['Afghanistan','Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',    'Australia', 'Austria', 'Azerbaijan', 'The Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo Republic of the', 'Costa Rica', 'Côte divoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia, Federated States of', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Sudan, South', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'],
    
    boysNames: ['Liam',    'Noah',        'Oliver',    'Elijah',    'James',
    'William', 'Benjamin',    'Lucas',     'Henry',     'Theodore',
    'Jack',    'Levi',        'Alexander', 'Jackson',   'Mateo',
    'Daniel',  'Michael',     'Mason',     'Sebastian', 'Ethan',
    'Logan',   'Owen',        'Samuel',    'Jacob',     'Asher',
    'Aiden',   'John',        'Joseph',    'Wyatt',     'David',
    'Leo',     'Luke',        'Julian',    'Hudson',    'Grayson',
    'Matthew', 'Ezra',        'Gabriel',   'Carter',    'Isaac',
    'Jayden',  'Luca',        'Anthony',   'Dylan',     'Lincoln',
    'Thomas',  'Maverick',    'Elias',     'Josiah',    'Charles',
    'Caleb',   'Christopher', 'Ezekiel',   'Miles',     'Jaxon',
    'Isaiah',  'Andrew',      'Joshua',    'Nathan',    'Nolan',
    'Adrian',  'Cameron',     'Santiago',  'Eli',       'Aaron',
    'Ryan',    'Angel',       'Cooper',    'Waylon',    'Easton',
    'Kai',     'Christian',   'Landon',    'Colton',    'Roman',
    'Axel',    'Brooks',      'Jonathan',  'Robert',    'Jameson',
    'Ian',     'Everett',     'Greyson',   'Wesley',    'Jeremiah',
    'Hunter',  'Leonardo',    'Jordan',    'Jose',      'Bennett',
    'Silas',   'Nicholas',    'Parker',    'Beau',      'Weston',
    'Austin',  'Connor',      'Carson',    'Dominic',   'Xavier',
    'Liam',    'Noah',        'Oliver',    'Elijah',    'James',
      'William', 'Benjamin',    'Lucas',     'Henry',     'Theodore',
      'Jack',    'Levi',        'Alexander', 'Jackson',   'Mateo',
      'Daniel',  'Michael',     'Mason',     'Sebastian', 'Ethan',
      'Logan',   'Owen',        'Samuel',    'Jacob',     'Asher',
      'Aiden',   'John',        'Joseph',    'Wyatt',     'David',
      'Leo',     'Luke',        'Julian',    'Hudson',    'Grayson',
      'Matthew', 'Ezra',        'Gabriel',   'Carter',    'Isaac',
      'Jayden',  'Luca',        'Anthony',   'Dylan',     'Lincoln',
      'Thomas',  'Maverick',    'Elias',     'Josiah',    'Charles',
      'Isaiah',  'Andrew',      'Joshua',    'Nathan',    'Nolan',
      'Adrian',  'Cameron',     'Santiago',  'Eli',       'Aaron',
      'Ryan',    'Angel',       'Cooper',    'Waylon',    'Easton',
      'Kai',     'Christian',   'Landon',    'Colton',    'Roman',
      'Axel',    'Brooks',      'Jonathan',  'Robert',    'Jameson',
      'Ian',     'Everett',     'Greyson',   'Wesley',    'Jeremiah',
      'Hunter',  'Leonardo',    'Jordan',    'Jose',      'Bennett',
      'Silas',   'Nicholas',    'Parker',    'Beau',      'Weston',
      'Austin',  'Connor',      'Carson',    'Dominic',   'Xavier', 'Jaxson',   'Jace',     'Emmett',    'Adam',    'Declan',
      'Rowan',    'Micah',    'Kayden',   'Gael',      'River',   'Ryder',
      'Kingston', 'Damian',   'Sawyer',   'Luka',      'Evan',    'Vincent',
      'Legend',   'Myles',    'Harrison', 'August',    'Bryson',  'Amir',
      'Giovanni', 'Chase',    'Diego',    'Milo',      'Jasper',  'Walker',
      'Jason',    'Brayden',  'Cole',     'Nathaniel', 'George',  'Lorenzo',
      'Zion',     'Luis',     'Archer',   'Enzo',      'Jonah',   'Thiago',
      'Theo',     'Ayden',    'Zachary',  'Calvin',    'Braxton', 'Ashton',
      'Rhett',    'Atlas',    'Jude',     'Bentley',   'Carlos',  'Ryker',
      'Adriel',   'Arthur',   'Ace',      'Tyler',     'Jayce',   'Max',
      'Elliot',   'Graham',   'Kaiden',   'Maxwell',   'Juan',    'Dean',
      'Matteo',   'Malachi',  'Ivan',     'Elliott',   'Jesus',   'Emiliano',
      'Messiah',  'Gavin',    'Maddox',   'Camden',    'Hayden',  'Leon',
      'Antonio',  'Justin',   'Tucker',   'Brandon',   'Kevin',   'Judah',
      'Finn',     'King',     'Brody',    'Xander',    'Nicolas', 'Charlie',
      'Arlo',     'Emmanuel', 'Barrett',  'Felix',     'Alex',    'Miguel',
      'Abel',     'Alan',     'Beckett',  'Amari', 'Karter',  'Timothy',   'Abraham',     'Jesse',
      'Zayden',  'Blake',   'Alejandro', 'Dawson',      'Tristan',
      'Victor',  'Avery',   'Joel',      'Grant',       'Eric',
      'Patrick', 'Peter',   'Richard',   'Edward',      'Andres',
      'Emilio',  'Colt',    'Knox',      'Beckham',     'Adonis',
      'Kyrie',   'Matias',  'Oscar',     'Lukas',       'Marcus',
      'Hayes',   'Caden',   'Remington', 'Griffin',     'Nash',
      'Israel',  'Steven',  'Holden',    'Rafael',      'Zane',
      'Jeremy',  'Kash',    'Preston',   'Kyler',       'Jax',
      'Jett',    'Kaleb',   'Riley',     'Simon',       'Phoenix',
      'Javier',  'Bryce',   'Louis',     'Mark',        'Cash',
      'Lennox',  'Paxton',  'Malakai',   'Paul',        'Kenneth',
      'Nico',    'Kaden',   'Lane',      'Kairo',       'Maximus',
      'Omar',    'Finley',  'Atticus',   'Crew',        'Brantley',
      'Colin',   'Dallas',  'Walter',    'Brady',       'Callum',
      'Ronan',   'Hendrix', 'Jorge',     'Tobias',      'Clayton',
      'Emerson', 'Damien',  'Zayn',      'Malcolm',     'Kayson',
      'Bodhi',   'Bryan',   'Aidan',     'Cohen',       'Brian',
      'Cayden',  'Andre',   'Niko',      'Maximiliano', 'Zander',
      'Khalil',  'Rory',    'Francisco', 'Cruz',        'Kobe',
      'Reid',     'Daxton',   'Derek',    'Martin',  'Jensen',
      'Karson',   'Tate',     'Muhammad', 'Jaden',    'Joaquin', 'Josue',
      'Gideon',   'Dante',    'Cody',     'Bradley',  'Orion',   'Spencer',
      'Angelo',   'Erick',    'Jaylen',   'Julius',   'Manuel',  'Ellis',
      'Colson',   'Cairo',    'Gunner',   'Wade',     'Chance',  'Odin',
      'Anderson', 'Kane',     'Raymond',  'Cristian', 'Aziel',   'Prince',
      'Ezequiel', 'Jake',     'Otto',     'Eduardo',  'Rylan',   'Ali',
      'Cade',     'Stephen',  'Ari',      'Kameron',  'Dakota',  'Warren',
      'Ricardo',  'Killian',  'Mario',    'Romeo',    'Cyrus',   'Ismael',
      'Russell',  'Tyson',    'Edwin',    'Desmond',  'Nasir',   'Remy',
      'Tanner',   'Fernando', 'Hector',   'Titus',    'Lawson',  'Sean',
      'Kyle',     'Elian',    'Corbin',   'Bowen',    'Wilder',  'Armani',
      'Royal',    'Stetson',  'Briggs',   'Sullivan', 'Leonel',  'Callan',
      'Finnegan', 'Jay',      'Zayne',    'Marshall', 'Kade',    'Travis',
      'Sterling', 'Raiden',   'Sergio',   'Tatum',    'Cesar',   'Zyaire',
      'Milan',    'Devin',    'Gianni',   'Kamari',   'Royce',   'Malik',
      'Jared',    'Franklin', 'Clark',    'Noel'],

      girlsName: [
        'Olivia',   'Emma',      'Charlotte', 'Amelia',    'Ava',       'Sophia',
        'Isabella', 'Mia',       'Evelyn',    'Harper',    'Luna',      'Camila',
        'Gianna',   'Elizabeth', 'Eleanor',   'Ella',      'Abigail',   'Sofia',
        'Avery',    'Scarlett',  'Emily',     'Aria',      'Penelope',  'Chloe',
        'Layla',    'Mila',      'Nora',      'Hazel',     'Madison',   'Ellie',
        'Lily',     'Nova',      'Isla',      'Grace',     'Violet',    'Aurora',
        'Riley',    'Zoey',      'Willow',    'Emilia',    'Stella',    'Zoe',
        'Victoria', 'Hannah',    'Addison',   'Leah',      'Lucy',      'Eliana',
        'Ivy',      'Everly',    'Lillian',   'Paisley',   'Elena',     'Naomi',
        'Maya',     'Natalie',   'Kinsley',   'Delilah',   'Claire',    'Audrey',
        'Aaliyah',  'Ruby',      'Brooklyn',  'Alice',     'Aubrey',    'Autumn',
        'Leilani',  'Savannah',  'Valentina', 'Kennedy',   'Madelyn',   'Josephine',
        'Bella',    'Skylar',    'Genesis',   'Sophie',    'Hailey',    'Sadie',
        'Natalia',  'Quinn',     'Caroline',  'Allison',   'Gabriella', 'Anna',
        'Serenity', 'Nevaeh',    'Cora',      'Ariana',    'Emery',     'Lydia',
        'Jade',     'Sarah',     'Eva',       'Adeline',   'Madeline',  'Piper',
        'Rylee',    'Athena',    'Peyton',    'Everleigh','Vivian',    'Clara',     'Raelynn',   'Liliana',   'Samantha', 
        'Maria',    'Iris',      'Ayla',      'Eloise',    'Lyla',      'Eliza',    
        'Hadley',   'Melody',    'Julia',     'Parker',    'Rose',      'Isabelle', 
        'Brielle',  'Adalynn',   'Arya',      'Eden',      'Remi',      'Mackenzie',
        'Maeve',    'Margaret',  'Reagan',    'Charlie',   'Alaia',     'Melanie',  
        'Josie',    'Elliana',   'Cecilia',   'Mary',      'Daisy',     'Alina',    
        'Lucia',    'Ximena',    'Juniper',   'Kaylee',    'Magnolia',  'Summer',   
        'Adalyn',   'Sloane',    'Amara',     'Arianna',   'Isabel',    'Reese',    
        'Emersyn',  'Sienna',    'Kehlani',   'River',     'Freya',     'Valerie',  
        'Blakely',  'Genevieve', 'Esther',    'Valeria',   'Katherine', 'Kylie',    
        'Norah',    'Amaya',     'Bailey',    'Ember',     'Ryleigh',   'Georgia',  
        'Catalina', 'Emerson',   'Alexandra', 'Faith',     'Jasmine',   'Ariella',  
        'Ashley',   'Andrea',    'Millie',    'June',      'Khloe',     'Callie',   
        'Juliette', 'Sage',      'Ada',       'Anastasia', 'Olive',     'Alani',    
        'Brianna',  'Rosalie',   'Molly',     'Brynlee',   'Amy',       'Ruth',     
        'Aubree',   'Gemma',     'Taylor',    'Oakley',    'Margot',    'Arabella', 
        'Sara',     'Journee',   'Harmony',   'Blake', 'Alaina',   'Aspen',   'Noelle',     'Selena',
        'Oaklynn',   'Morgan',   'Londyn',  'Zuri',       'Aliyah',
        'Jordyn',    'Juliana',  'Finley',  'Presley',    'Zara',
        'Leila',     'Marley',   'Sawyer',  'Amira',      'Lilly',
        'London',    'Kimberly', 'Elsie',   'Ariel',      'Lila',
        'Alana',     'Diana',    'Kamila',  'Nyla',       'Vera',
        'Hope',      'Annie',    'Kaia',    'Myla',       'Alyssa',
        'Angela',    'Ana',      'Lennon',  'Evangeline', 'Harlow',
        'Rachel',    'Gracie',   'Rowan',   'Laila',      'Elise',
        'Sutton',    'Lilah',    'Adelyn',  'Phoebe',     'Octavia',
        'Sydney',    'Mariana',  'Wren',    'Lainey',     'Vanessa',
        'Teagan',    'Kayla',    'Malia',   'Elaina',     'Saylor',
        'Brooke',    'Lola',     'Miriam',  'Alayna',     'Adelaide',
        'Daniela',   'Jane',     'Payton',  'Journey',    'Lilith',
        'Delaney',   'Dakota',   'Mya',     'Charlee',    'Alivia',
        'Annabelle', 'Kailani',  'Lucille', 'Trinity',    'Gia',
        'Tatum',     'Raegan',   'Camille', 'Kaylani',    'Kali',
        'Stevie',    'Maggie',   'Haven',   'Tessa',      'Daphne',
        'Adaline',   'Hayden',   'Joanna',  'Jocelyn',    'Lena',
        'Evie',      'Juliet',   'Fiona',   'Cataleya',   'Angelina']
}
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const attempts = {
    firstAttempt: () => {
        c.beginPath();
        c.moveTo(100, 300);
        c.lineTo(100, 70);
        c.stroke();
    },
    secondAttempt: () => {
        c.beginPath();
        c.moveTo(100, 70);
        c.lineTo(200, 70);
        c.stroke();
    },
    thirdAttempt: () => {
        c.beginPath();
        c.moveTo(200, 70);
        c.lineTo(200, 100);
        c.stroke();
    },
    fourthAttempt: () => {
        c.beginPath();
        c.arc(200, 120, 20, 0, Math.PI * 2);
        c.stroke();
    },
    fifthAttempt: () => {
        c.beginPath();
        c.moveTo(200, 140);
        c.lineTo(200, 220);
        c.stroke();
    },
    sixthAttempt: () => {
        c.beginPath();
        c.moveTo(200, 160);
        c.lineTo(240, 140);
        c.stroke();
    },
    seventhAttempt: () => {
        c.beginPath();
        c.moveTo(200, 160);
        c.lineTo(160, 140);
        c.stroke();
    },
    eighthAttempt: () => {
        c.beginPath();
        c.moveTo(200, 220);
        c.lineTo(240, 240);
        c.stroke();
    },
    ninthAttempt: () => {
        c.beginPath();
        c.moveTo(200, 220);
        c.lineTo(160, 240);
        c.stroke();
        youLose();
    },
}
let theCorrectWord;
const steps = [attempts.firstAttempt, attempts.secondAttempt, attempts.thirdAttempt, attempts.fourthAttempt, attempts.fifthAttempt, attempts.sixthAttempt, attempts.seventhAttempt, attempts.eighthAttempt, attempts.ninthAttempt];
const keyboard = document.getElementById("keyboard");
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " "];
alphabet.forEach(elem => {
    const btn = document.createElement("button");
    btn.textContent = elem;
    keyboard.appendChild(btn);
    btn.classList.add("key");
    btn.addEventListener("click", () => {
        if(!theCorrectWord) return;
        let result = document.getElementById("word").textContent;
        const resultArr = result.split("");
        let atLeastHeGuessedOne = false;
        for(let i =0; i< theCorrectWord.length; i++){
            if(theCorrectWord[i] == elem || theCorrectWord[i] == elem.toUpperCase()){
                atLeastHeGuessedOne = true;
                resultArr[i] = theCorrectWord[i];
            }
        }
        if(!atLeastHeGuessedOne){
            steps[0]();
            steps.shift();
        }
        result = "";
        resultArr.forEach(elem => result += elem)
        document.getElementById("word").textContent = result;
        result == theCorrectWord ? youWin(): null;
        btn.disabled = "true";
    });
});
const startDiv = document.getElementById("start");
const startGameBtn = document.getElementById("startGame");
const word = document.getElementById("word");
startGameBtn.addEventListener("click", () => {
    const choose = document.createElement("h2");
    choose.textContent = "Choose Category";
    startGameBtn.style.display = "none";
    const countriesNames = document.createElement("button");
    countriesNames.textContent = "Countries Names";
    const boysNames = document.createElement("button");
    boysNames.textContent = "Boys Names";
    const girlsName = document.createElement("button");
    girlsName.textContent = "Girls Names";
    const div = document.createElement("div");
    div.style.cssText = "width: 60%; margin: auto; height: 40%; display: flex; flex-direction: column; justify-content: space-around;"
    div.appendChild(choose);
    div.appendChild(countriesNames);
    div.appendChild(boysNames);
    div.appendChild(girlsName);
    startDiv.appendChild(div);
    const dash = "_"
    countriesNames.addEventListener("click", () => {
        const x = Math.floor(Math.random() * categories.countriesNames.length);
        const toBeGuessed = categories.countriesNames[x];
        word.textContent = dash.repeat(toBeGuessed.length);
        theCorrectWord = toBeGuessed;
        countriesNames.disabled = "true";
        boysNames.disabled = "true";
        girlsName.disabled = "true";
    });
    girlsName.addEventListener("click", () => {
        const x = Math.floor(Math.random() * categories.countriesNames.length);
        const toBeGuessed = categories.girlsName[x];
        word.textContent = dash.repeat(toBeGuessed.length);
        theCorrectWord = toBeGuessed;
        countriesNames.disabled = "true";
        boysNames.disabled = "true";
        girlsName.disabled = "true";
    });
    boysNames.addEventListener("click", () => {
        const x = Math.floor(Math.random() * categories.countriesNames.length);
        const toBeGuessed = categories.boysNames[x];
        word.textContent = dash.repeat(toBeGuessed.length);
        theCorrectWord = toBeGuessed;
        countriesNames.disabled = "true";
        boysNames.disabled = "true";
        girlsName.disabled = "true";
    });
})
document.getElementById("restartGame").addEventListener("click", ()=> location.reload());
function youLose(){
    alert("You lost! Try Again");
    Array.from(document.getElementsByClassName("key")).forEach(elem => {
        elem.disabled = "true";
    })   
}
function youWin(){
    alert("Congrats! You Win!");
    Array.from(document.getElementsByClassName("key")).forEach(elem => {
        elem.disabled = "true";
    })   
}