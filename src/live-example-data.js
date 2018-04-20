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
    
    { 
        title: "Get stuff done in time",
        specifics: "We won't commit to things we can't deliver so that we get everything prioritised finished on time. \"End of sprint\" means the end of Friday (not over the weekend!)",
        measurement: "Were all commits Done before the end of the sprint?",
    },
    { 
        title: "Focus on top priorities first",
        specifics: "Get it working first. Refine the solution as you have time available. Define test plans and implement basic functionality during the first half of the sprint.",
        measurement: "Was basic functionality and test planning complete by Wednesday?"
    },
    { 
        title: "Keep the app fully running at all times",
        specifics: "We should be able to pull the latest code without fear of it breaking our development environment.",
        measurement: "Did all our code pushes go through without breaking CI or another team member's build/environment?"
    },
    { 
        title: "Get sign-off of prototypes",
        specifics: "We need to do prototypes and get verbal sign-off from Kevin before we start implementing",
        measurement: "Did all our implemented features not result in Kevin complaining that he didn't pre-approve the design?"
    },
    { 
        title: "Keep code simple",
        specifics: "Until further notice, if we're adding code to the solution, it should result in a reduction in average overall complexity.",
        measurement: "Did all C#, JS or SQL code pushs show a reduction of average overall cyclomatic complexity in SonarCube?"
    },
    { 
        title: "Constantly refactor",
        specifics: "Until further notice, we need to refactor at least some of the codebase every sprint to reduce complexity or improve the design",
        measurement: "Did we refactor/redesign a piece of code and communicate the change to the rest of the team?"
    },
    { 
        title: "Write automated acceptance tests",
        specifics: "We should be writing fully automated BDD tests for all functionality we add to the product",
        measurement: "Did we add/update BDD tests approved by Charles for all features implemented/changed?"
    },
    { 
        title: "Do code reviews quickly",
        specifics: "Code reviews should be completed within a day of being requested (or declined). If code reviews are requested from a person who isn't working that day, it is the responsibility of the requester to cancel the request.",
        measurement: "Did we complete (or reject) code reviews within 24 hours of them being requested?"
    },
    { 
        title: "Reduce 'noise' (meetings/e-mails/messaging)",
        specifics: "Ensure that we have no more than 4 meetings per sprint. For the purpose of this goal, \"meeting\" means something arranged through Outlook, taking place in a meeting room (i.e. informal chats aren't included in this)",
        measurement: "Did we attend more than 4 meetings?"
    },
    { 
        title: "Reduce out-of-hours working",
        specifics: "We need to stop doing out-of-hours work. Specifically late-night work (8pm - 5am) needs to be reduced to a bare minimum (no more than 30 minutes this sprint).",
        measurement: "Did we do more than 30 minutes between 8pm and 5am?"
    },
    { 
        title: "Learn something new",
        specifics: "We need to keep updating our skills and communicating what we learn to the rest of the team",
        measurement: "Did we learn something new and send a 1 paragraph e-mail to the team with details?"
    },
    { 
        title: "Improve the deployment pipeline",
        specifics: "The deployment pipeline is too slow - especially tests. We need to find ways to speed up the build.",
        measurement: "Did we decrease the build time or reliability in some measurementable way?"
    },
    { 
        title: "Tell other teams what we're up to",
        specifics: "Adam is sending out e-mail updates about what the team is working on every sprint. Everyone needs to send Adam two lines of text describing what they're focusing on before the end of the sprint",
        measurement: "Did we send Adam our two-line activity summary?"
    },
    { 
        title: "Communicate with The Business",
        specifics: "We aren't speaking to non-technical members of the team enough so there is a perception that we are a silo which isn't interested in anybody else.",
        measurement: "Did we speak to Kevin at least once this sprint? Did we chat to at least one other person outside the team this sprint for at least five minutes?"
    },
    { 
        title: "Find ways to avoid unnecessary work",
        specifics: "Where possible we want to find ways to accomplish our business and technical goals by doing as little work as possible (and producing as little code as possible).",
        measurement: "Did we suggest, and get acceptance, of at least one simplification of features we were asked to implement?"
    },
    { 
        title: "Restructure the priority list",
        specifics: "We all need to regularly go through the backlog and find things which are no longer necessary, or suggest things which should be prioritised",
        measurement: "Did we find at least one item on the backlog and discuss it with Charles?"
    }
    
];

let nonce = Date.now();

export function generateMenu( n ) {
    
    return randoms( resolutions, n ).map( x => ( {
        
        id: nonce++,
        ...x,
        upScore: Math.ceil( Math.random() * 3 )
        
    } ) ).map( x => ( {
        
        ...x,
        downScore: Math.random() >= 0.4
            ? Math.random() >= 0.5
                ? x.upScore
                : Math.ceil( x.upScore * Math.random() )
            : undefined
            
    } ) );
    
}
