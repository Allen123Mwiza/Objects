function InstagramPost(author, content, image, views, likes, comments, shares, tags, comments, likes, shares, sponsored) {
    this.author = author;
    this.content = content;
    this.image = image;
    this.views = views;
    this.likes = likes;
    this.comments = comments;
    this.shares = shares;
    this.tags = tags;
    this.comments = comments;
    this.likes = likes;
    this.shares = shares;
    this.sponsored = sponsored;
}


var post = new InstagramPost("@allenlen", "This is a post", "https://www.google.com", "100", "50", "10", "5")


//Question 3



function createPerson(name, age, location) {
    return {
        name,
        age,
        location
    }
}

function createJambScores(eng, govt, lit, crk) {
    return {
        eng,
        govt,
        lit,
        crk
    }
}

let musa = createPerson('Musa', 19, 'Lekki');
musa.jambScores = createJambScores(70, 85, 82, 94);

console.log(musa);

//QUESTION 4

1. Object.assign()
2. Spread operator
3. JSON.parse(JSON.stringify())



// Object.assign()

let obj1 = {
    name: 'Allen',
    age: 23,
    location: 'Kigali'
}

let obj2 = Object.assign({}, obj1);

console.log(obj2);

// Spread operator

let obj3 = { ...obj1 };

console.log(obj3);

// JSON.parse(JSON.stringify())

let obj4 = JSON.parse(JSON.stringify(obj1));

console.log(obj4);

//QUESTION 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
 for (let key in presidentialCandidates) {
    console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`);

 }