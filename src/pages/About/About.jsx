import Projects from "../Components/Projects.jsx"
function About(){
    return (
    <div>
        <h1>Lo's Portfollio</h1>
        <Projects
          name="Arcane Laboratorium" 
          repo="https://github.com/Lo-str/js-quest.git" 
          tech={[
            "JavaScript (ES6+): condition handling, input validation, program flow",
            "HTML5 & Semantic Structure",
            "CSS / SCSS: layout & responsive design",
            "DOM Manipulation & Event-Driven UI",
            "Modular JS architecture",
            "Version Control with Git & GitHub",
            "Prompt-driven interface (browser dialogs)"]} 
          writeUp={{
            goal: "Arcane Laboratorium is a text-based library manager wrapped in a medieval-fantasy theme. Users can add books, list their library, mark books as read or unread, remove books, and receive immersive in-world feedback such as “No tome matches your incantation.” It transforms a simple CRUD-style project into an interactive mini-game.",
            learned:"I deepened my understanding of JavaScript program flow, error handling, and state management in a no-framework environment. I practiced input validation, edge-case protection, and the creation of reusable functions for menu-driven programs. I also refined how to theme logic and text feedback to match a narrative aesthetic.",
            role:"Solo project: I wrote the entire codebase, theme, and interactions.",
            challenges:[
              "Handling invalid inputs without breaking the flow",
              "Preventing undefined behaviours in nested prompts",
              "Designing a clean state system to track book data",
              "Creating short, immersive fantasy-style messages that remain usable and clear"
            ]
          }}
          toSum="This project strengthened my ability to write robust interactive JavaScript tools using only core language features."
      />

      <Projects 
        name="Vault of the Realm" 
        repo="https://github.com/Lo-str/js-quest.git" 
        tech={[
          "JavaScript (Objects, methods, validation)",
          "HTML5, CSS / SCSS",
          "DOM manipulation & modal-like UI using prompts/alerts",
          "Input sanitization & error messaging",
          "Git + GitHub workflow",
          "Theming & world-building integrated into logic"
        ]} 
        writeUp={{
          goal: "Vault of the Realm is a fantasy-themed ATM simulator. Users can deposit, withdraw, and check balances through a narrative interface (“The Vault Keeper awaits your decree”). It replicates real account-logic safely while maintaining an engaging RPG-style experience.",
          learned:"This project reinforced concepts such as object-oriented programming, method design, conditional routes, and reprompt logic. I learned to anticipate user mistakes and redirect them gracefully, and I practiced designing a consistent performance loop without UI frameworks.",
          role:"Solo development: logic, design, theme, and testing.",
          challenges:[
            "Implementing a reprompt system that only triggers on errors",
            "Managing program state across nested menus",
            "Preventing invalid withdrawals without crashing the loop",
            "Keeping the theme coherent while maintaining clarity"
          ]
        }}
        toSum="This project was a great exercise in error-tolerant financial logic and controlled UI flow inside JavaScript."
      />

      <Projects 
        name="Seer's Challenge" 
        repo="https://github.com/Lo-str/js-quest.git" 
        tech={[
          "JavaScript: arrays, loops, randomization",
          "HTML5 structure",
          "SCSS styling",
          "DOM updates based on real-time user input",
          "Git & GitHub for version history",
          "Design of game logic without external libraries"
        ]} 
        writeUp={{
          goal: "Seer’s Challenge is a medieval-fantasy number-guessing game where players attempt to divine a secret number chosen by the Seer. They receive hints (“The fates whisper: higher…”) until they guess correctly, with difficulty levels and scoring logic.",
          learned:"I practiced random number generation, event-driven JavaScript, user-feedback loops, and DOM-based UI updates. I refined how difficulty affects game variables and learned to balance a simple mechanic with polished, readable code.",
          role:"Solo project: full design, mechanics, visual styling, and thematic writing.",
          challenges:[
            "Ensuring the game loop never locks or becomes unwinnable",
            "Balancing difficulty with feedback timing",
            "Managing score resets and state changes cleanly",
            "Building a polished, fantasy-themed UI without external libraries"
          ]
        }}
        toSum="This project strengthened my ability to build small, engaging browser games from scratch." 
      />
    </div>
    )
}

export default About;