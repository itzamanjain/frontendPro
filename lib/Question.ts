export const questions = [
    {
      id: "1",
      title: "Create a responsive navbar",
      successRate:84,
      sampleUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tutorialrepublic.com%2Fsnippets%2Fpreview.php%3Ftopic%3Dbootstrap%26file%3Dbeautiful-navbar-with-menu-icons&psig=AOvVaw2altFRbn2fxQyBdEN4tj_b&ust=1739541805029000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiZl7TowIsDFQAAAAAdAAAAABAJ",
      content: `

  
  Your task is to create a responsive navigation bar using HTML, CSS, and JavaScript.
  
  ## Requirements:
  1. The navbar should have a logo on the left side.
  2. It should contain at least 4 navigation items.
  3. On desktop, all items should be visible in a horizontal layout.
  4. On mobile (screen width < 768px):
     - The navigation items should be hidden initially.
     - A hamburger menu icon should appear.
     - Clicking the hamburger icon should reveal the navigation items in a vertical layout.
  
  ## Bonus:
  - Add a smooth animation for the mobile menu toggle.
  - Implement a dropdown for one of the navigation items.
  
  Good luck!
      `,
      tags: ["html", "css", "js"],
      difficulty: 'Medium',
      expectedTime: '20 min',
      submissions:461,
    },
    {
      id: "2",
      title: "Implement a modal dialog",
      difficulty: 'Easy',
      successRate:49,
      expectedTime: '15 min',
      submissions:401,
      content: `
  # Implement a Modal Dialog
  
  Create a modal dialog component using HTML, CSS, and JavaScript.
  
  ## Requirements:
  1. The page should have a button that, when clicked, opens the modal.
  2. The modal should appear centered on the screen with a semi-transparent overlay behind it.
  3. The modal should contain a title, some content, and a close button.
  4. Clicking the close button or anywhere outside the modal should close it.
  
  ## Bonus:
  - Add a subtle animation when opening and closing the modal.
  - Make the modal responsive for different screen sizes.
  
  Good luck!
      `,
      tags: ["html", "css", "js"],
      
    },
    {
      id: "3",
      title: "Build an Image Carousel",
      difficulty: 'Hard',
      expectedTime: '20 min',
      successRate:45,
      submissions:105,
      content: `
  # Build an Image Carousel
  
  Create a responsive image carousel/slider with navigation controls.
  
  ## Requirements:
  1. Display at least 3 images in a carousel format
  2. Include previous and next buttons for navigation
  3. Add indicator dots showing the current slide
  4. Implement auto-play functionality
  5. Make it responsive for different screen sizes
  
  ## Bonus:
  - Add smooth transitions between slides
  - Implement touch/swipe support for mobile devices
  - Add keyboard navigation support
  
  Good luck!
      `,
      tags: ["html", "css", "js"],
     
    },
    {
      id: "4",
      title: "Create a Todo List App",
      difficulty: 'Medium',
      successRate:90,
      expectedTime: '25 min',
      submissions:568,
      content: `
  # Create a Todo List App
  
  Build a simple todo list application with basic CRUD functionality.
  
  ## Requirements:
  1. Input field to add new todos
  2. List of todos with checkboxes to mark them as complete
  3. Delete button for each todo
  4. Filter options: All, Active, Completed
  5. Counter showing number of active todos
  
  ## Bonus:
  - Add local storage to persist todos
  - Add edit functionality
  - Add clear completed button
  - Add drag and drop to reorder todos
  
  Good luck!
      `,
      tags: ["html", "css", "js"],
      
    },
    {
        id: "5",
        title: "Create a  cafe website",
        difficulty: 'Medium',
         expectedTime: '30 min',
         successRate:76,
        submissions:231,
        content: `
    # Create a Responsive Navbar
    
    Your task is to create a responsive navigation bar using HTML, CSS, and JavaScript.
    
    ## Requirements:
    1. The navbar should have a logo on the left side.
    2. It should contain at least 4 navigation items.
    3. On desktop, all items should be visible in a horizontal layout.
    4. On mobile (screen width < 768px):
       - The navigation items should be hidden initially.
       - A hamburger menu icon should appear.
       - Clicking the hamburger icon should reveal the navigation items in a vertical layout.
    
    ## Bonus:
    - Add a smooth animation for the mobile menu toggle.
    - Implement a dropdown for one of the navigation items.
    
    Good luck!
        `,
        tags: ["html", "css", "js"],
        
      },
      {
        id: "6",
        title: "Build a Countdown Timer",
        difficulty: "Medium",
        successRate: 67,
        expectedTime: "25 min",
        submissions: 312,
        content: `
    # Build a Countdown Timer
    
    Create a countdown timer that allows the user to set a time and starts counting down.
    
    ## Requirements:
    1. Input field to enter countdown time in minutes.
    2. Start button to begin countdown.
    3. Display remaining time in mm:ss format.
    4. Stop button to pause the countdown.
    5. Reset button to clear the timer.
    
    ## Bonus:
    - Play an alert sound when the timer reaches zero.
    - Add a progress bar showing remaining time.
    - Allow multiple countdowns to run simultaneously.
    
    Good luck!
        `,
        tags: ["html", "css", "js"],
      },
    
      {
        id: "7",
        title: "Create a Weather App",
        difficulty: "Hard",
        successRate: 38,
        expectedTime: "40 min",
        submissions: 189,
        content: `
    # Create a Weather App
    
    Develop a simple weather application that fetches weather data based on the user's location.
    
    ## Requirements:
    1. Input field to enter a city name.
    2. Fetch and display temperature, weather conditions, and an icon.
    3. Use a weather API (e.g., OpenWeather API).
    4. Show an error message if the city is invalid.
    
    ## Bonus:
    - Display a background image based on the weather condition.
    - Show hourly and weekly forecasts.
    - Implement dark mode.
    
    Good luck!
        `,
        tags: ["html", "css", "js", "API"],
      },
    
      {
        id: "8",
        title: "Create a Digital Clock",
        difficulty: "Easy",
        successRate: 91,
        sampleUrl:"https://i.ytimg.com/vi/5tC46h022YE/sddefault.jpg",
        expectedTime: "15 min",
        submissions: 479,
        content: `
    # Create a Digital Clock
    
    Build a simple digital clock that updates in real time.
    
    ## Requirements:
    1. Display the current time in hh:mm:ss AM/PM format.
    2. Update the time every second.
    3. Make it responsive for different screen sizes.
    
    ## Bonus:
    - Add a toggle for 12-hour and 24-hour formats.
    - Add different themes (light/dark mode).
    - Display the current date.
    
    Good luck!
        `,
        tags: ["html", "css", "js"],
      },
    
      {
        id: "9",
        title: "Build a Quiz App",
        difficulty: "Medium",
        successRate: 55,
        expectedTime: "30 min",
        submissions: 259,
        content: `
    # Build a Quiz App
    
    Create a quiz application where users can answer multiple-choice questions.
    
    ## Requirements:
    1. Display a set of questions with multiple-choice options.
    2. Show one question at a time with a "Next" button.
    3. Display the final score at the end.
    
    ## Bonus:
    - Add a timer for each question.
    - Allow users to restart the quiz.
    - Store high scores using local storage.
    
    Good luck!
        `,
        tags: ["html", "css", "js"],
      },
    
      {
        id: "10",
        title: "Create a Calculator",
        difficulty: "Easy",
        successRate: 78,
        expectedTime: "20 min",
        submissions: 365,
        content: `
    # Create a Calculator
    
    Build a simple calculator that performs basic arithmetic operations.
    
    ## Requirements:
    1. Display a numeric keypad with buttons for addition, subtraction, multiplication, and division.
    2. Allow users to input numbers and perform calculations.
    3. Display the result dynamically.
    
    ## Bonus:
    - Implement a dark mode.
    - Add keyboard support.
    - Allow users to see history of previous calculations.
    
    Good luck!
        `,
        tags: ["html", "css", "js"],
      }
  ];

  
