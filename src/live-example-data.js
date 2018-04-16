// thanks: https://stackoverflow.com/a/2450976/275501
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

const randoms = ( arr, n ) => shuffle( arr.slice( 0 ) ).slice( 0, n );

//https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/

const resolutions = [
    
    { title: "Get stuff done in time" },
    { title: "Focus on top priorities first" },
    { title: "Keep the app fully running at all times" },
    { title: "Get sign-off of prototypes" },
    { title: "Get stuff done" },
    { title: "Keep code simple" },
    { title: "Constantly refactor" },
    { title: "Write automated acceptance tests" },
    { title: "Do code reviews quickly" },
    { title: "Meet our commits" },
    { title: "Reduce 'noise' (meetings/e-mails/messaging)" },
    { title: "Reduce out-of-hours working" },
    { title: "Learn something new" },
    { title: "Improve the deployment pipeline" },
    { title: "Tell other teams what we're up to" },
    { title: "Communicate with The Business" },
    { title: "Find ways to avoid unnecessary work" },
    { title: "Restructure the priority list" }
    
];

let nonce = Date.now();

export function generateMenu( n ) {
    
    return randoms( resolutions, n ).map( x => ( {
        
        id: nonce++,
        title: x.title
        
    } ) );
    
}
