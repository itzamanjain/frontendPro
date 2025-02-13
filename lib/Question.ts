export const questions = [
    {
      id: "1",
      title: "Create a responsive navbar",
      successRate:84,
      sampleUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tutorialrepublic.com%2Fsnippets%2Fpreview.php%3Ftopic%3Dbootstrap%26file%3Dbeautiful-navbar-with-menu-icons&psig=AOvVaw2altFRbn2fxQyBdEN4tj_b&ust=1739541805029000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiZl7TowIsDFQAAAAAdAAAAABAJ",
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
      difficulty: 'Medium',
      expectedTime: '20 min',
      submissions:461,
      initialCode: {
        html: `<!DOCTYPE html>
  <html>
  <head>
      <title>Responsive Navbar</title>
  </head>
  <body>
      <nav class="navbar">
          <div class="logo">
              <img src="/api/placeholder/40/40" alt="Logo" />
          </div>
          <button class="hamburger" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
          </button>
          <ul class="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </nav>
  </body>
  </html>`,
        css: `.navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
  }
  
  .nav-links li a {
      color: #333;
      text-decoration: none;
      padding: 0.5rem 1rem;
  }
  
  .hamburger {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
  }
  
  .hamburger span {
      width: 25px;
      height: 3px;
      background-color: #333;
      margin: 2px 0;
      transition: 0.3s;
  }
  
  @media (max-width: 768px) {
      .hamburger {
          display: flex;
      }
  
      .nav-links {
          display: none;
          width: 100%;
          position: absolute;
          top: 70px;
          left: 0;
          background-color: #ffffff;
          flex-direction: column;
          text-align: center;
      }
  
      .nav-links.active {
          display: flex;
      }
  }`,
        js: `const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });`
      }
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
      initialCode: {
        html: `<!DOCTYPE html>
  <html>
  <head>
      <title>Modal Dialog</title>
  </head>
  <body>
      <button id="openModal">Open Modal</button>
  
      <div id="modal" class="modal">
          <div class="modal-content">
              <div class="modal-header">
                  <h2>Modal Title</h2>
                  <button class="close-button">&times;</button>
              </div>
              <div class="modal-body">
                  <p>This is the modal content. You can put any HTML content here.</p>
              </div>
          </div>
      </div>
  </body>
  </html>`,
        css: `.modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
      background-color: white;
      margin: 15% auto;
      padding: 20px;
      width: 70%;
      max-width: 500px;
      border-radius: 8px;
      position: relative;
  }
  
  .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
  }
  
  .close-button {
      font-size: 1.5rem;
      border: none;
      background: none;
      cursor: pointer;
  }
  
  #openModal {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
  }`,
        js: `const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.querySelector('.close-button');
  
  openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });`
      }
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
      initialCode: {
        html: `<!DOCTYPE html>
  <html>
  <head>
      <title>Image Carousel</title>
  </head>
  <body>
      <div class="carousel-container">
          <div class="carousel">
              <div class="slide">
                  <img src="/api/placeholder/800/400" alt="Slide 1" />
              </div>
              <div class="slide">
                  <img src="/api/placeholder/800/400" alt="Slide 2" />
              </div>
              <div class="slide">
                  <img src="/api/placeholder/800/400" alt="Slide 3" />
              </div>
          </div>
          
          <button class="prev-btn">❮</button>
          <button class="next-btn">❯</button>
          
          <div class="dots"></div>
      </div>
  </body>
  </html>`,
        css: `.carousel-container {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      overflow: hidden;
  }
  
  .carousel {
      display: flex;
      transition: transform 0.5s ease-in-out;
  }
  
  .slide {
      min-width: 100%;
  }
  
  .slide img {
      width: 100%;
      height: auto;
  }
  
  .prev-btn, .next-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.5);
      color: white;
      padding: 1rem;
      border: none;
      cursor: pointer;
  }
  
  .prev-btn { left: 0; }
  .next-btn { right: 0; }
  
  .dots {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
  }
  
  .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ccc;
      margin: 0 5px;
      cursor: pointer;
  }
  
  .dot.active {
      background: #333;
  }`,
        js: `const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.dots');
  
  let currentSlide = 0;
  const slideCount = slides.length;
  
  // Create dots
  slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  function updateSlide(index) {
      carousel.style.transform = \`translateX(-\${index * 100}%)\`;
      dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
  }
  
  prevBtn.addEventListener('click', () => {
      const index = (currentSlide - 1 + slideCount) % slideCount;
      updateSlide(index);
  });
  
  nextBtn.addEventListener('click', () => {
      const index = (currentSlide + 1) % slideCount;
      updateSlide(index);
  });
  
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => updateSlide(index));
  });
  
  // Auto-play
  setInterval(() => {
      const index = (currentSlide + 1) % slideCount;
      updateSlide(index);
  }, 5000);`
      }
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
      initialCode: {
        html: `<!DOCTYPE html>
  <html>
  <head>
      <title>Todo List App</title>
  </head>
  <body>
      <div class="todo-app">
          <h1>Todo List</h1>
          
          <form id="todo-form">
              <input type="text" id="todo-input" placeholder="What needs to be done?">
              <button type="submit">Add</button>
          </form>
  
          <div class="filters">
              <button class="filter-btn active" data-filter="all">All</button>
              <button class="filter-btn" data-filter="active">Active</button>
              <button class="filter-btn" data-filter="completed">Completed</button>
          </div>
  
          <ul id="todo-list"></ul>
          
          <div class="todo-footer">
              <span id="todo-count">0 items left</span>
              <button id="clear-completed">Clear completed</button>
          </div>
      </div>
  </body>
  </html>`,
        css: `.todo-app {
      max-width: 500px;
      margin: 2rem auto;
      padding: 1rem;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  #todo-form {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
  }
  
  #todo-input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
  }
  
  .filters {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
  }
  
  .filter-btn {
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      background: none;
      cursor: pointer;
  }
  
  .filter-btn.active {
      background: #007bff;
      color: white;
      border-color: #007bff;
  }
  
  #todo-list {
      list-style: none;
      padding: 0;
      margin: 0;
  }
  
  .todo-item {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px solid #ddd;
  }
  
  .todo-item.completed .todo-text {
      text-decoration: line-through;
      color: #888;
  }
  
  .todo-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #ddd;
  }`,
        js: `const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const todoCount = document.getElementById('todo-count');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const clearCompletedBtn = document.getElementById('clear-completed');
  
  let todos = [];
  let currentFilter = 'all';
  
  function createTodoElement(todo) {
      const li = document.createElement('li');
      li.className = \`todo-item \${todo.completed ? 'completed' : ''}\`;
      li.innerHTML = \`
          <input type="checkbox" \${todo.completed ? 'checked' : ''}>
          <span class="todo-text">\${todo.text}</span>
          <button class="delete-btn">×</button>
      \`;
      
      li.querySelector('input').addEventListener('change', (e) => {
          todo.completed = e.target.checked;
          li.classList.toggle('completed', todo.completed);
          updateTodoCount();
          renderTodos();
      });
      
      li.querySelector('.delete-btn').addEventListener('click', () => {
          todos = todos.filter(t => t !== todo);
          renderTodos();
      });
      
      return li;
  }
  
  function renderTodos() {
      todoList.innerHTML = '';
      const filteredTodos = todos.filter(todo => {
          if (currentFilter === 'active') return !todo.completed;
          if (currentFilter === 'completed') return todo.completed;
          return true;
      });
      
      filteredTodos.forEach(todo => {
          todoList.appendChild(createTodoElement(todo));
      });
      
      updateTodoCount();
  }
  
  function updateTodoCount() {
      const activeCount = todos.filter(todo => !todo.completed).length;
      todoCount.textContent = \`\${activeCount} item\${activeCount === 1 ? '' : 's'} left\`;
  }
  
  todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = todoInput.value.trim();
      if (text) {
          todos.push({ text, completed: false });
          todoInput.value = '';
          renderTodos();
      }
  });
  
  filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFilter = btn.dataset.filter;
          renderTodos();
      });
  });
  
  clearCompletedBtn.addEventListener('click', () => {
      todos = todos.filter(todo => !todo.completed);
      renderTodos();
  });
  
  // Initialize
  renderTodos();`
      }
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
        initialCode: {
          html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lovable Café</title>
    <meta name="description" content="Welcome to Lovable Café - Your cozy corner for coffee and comfort" />
    <meta name="author" content="Lovable" />
    <meta property="og:image" content="/og-image.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
  </head>

  <body style="margin: 0; padding: 0; font-family: 'Poppins', sans-serif; color: #333; line-height: 1.6;">
    <!-- Hero Section -->
    <header style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22') center/cover; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white;">
      <h1 style="font-family: 'Playfair Display', serif; font-size: 4rem; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Lovable Café</h1>
      <p style="font-size: 1.5rem; margin: 20px 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">Where every cup tells a story</p>
      <a href="#menu" style="background-color: #D4A373; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: 500; transition: background-color 0.3s;">View Menu</a>
    </header>

    <!-- About Section -->
    <section style="padding: 80px 20px; background-color: #FEFAE0; text-align: center;">
      <div style="max-width: 800px; margin: 0 auto;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #333; margin-bottom: 30px;">Our Story</h2>
        <p style="font-size: 1.1rem; color: #666; line-height: 1.8;">Welcome to Lovable Café, where passion meets perfection in every cup. Established in 2024, we've been serving the finest handcrafted coffee and homemade pastries in a warm, inviting atmosphere that feels like home.</p>
      </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" style="padding: 80px 20px; background-color: white;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; text-align: center; margin-bottom: 50px;">Our Menu</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
          <!-- Coffee Card -->
          <div style="background: #FAEDCD; padding: 30px; border-radius: 15px; text-align: center;">
            <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 20px;">Coffee</h3>
            <p style="margin: 10px 0;">Espresso ............ $3.50</p>
            <p style="margin: 10px 0;">Cappuccino ........ $4.50</p>
            <p style="margin: 10px 0;">Latte ................. $4.75</p>
            <p style="margin: 10px 0;">Mocha .............. $5.00</p>
          </div>
          <!-- Pastries Card -->
          <div style="background: #FAEDCD; padding: 30px; border-radius: 15px; text-align: center;">
            <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 20px;">Pastries</h3>
            <p style="margin: 10px 0;">Croissant ........... $3.75</p>
            <p style="margin: 10px 0;">Muffin .............. $3.25</p>
            <p style="margin: 10px 0;">Danish .............. $3.50</p>
            <p style="margin: 10px 0;">Scone ............... $3.25</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section style="padding: 80px 20px; background-color: #CCD5AE; text-align: center;">
      <div style="max-width: 600px; margin: 0 auto;">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #333; margin-bottom: 30px;">Visit Us</h2>
        <p style="font-size: 1.1rem; margin: 10px 0;">123 Coffee Street, Café Town</p>
        <p style="font-size: 1.1rem; margin: 10px 0;">Open Daily: 7:00 AM - 8:00 PM</p>
        <p style="font-size: 1.1rem; margin: 10px 0;">Phone: (555) 123-4567</p>
        <p style="font-size: 1.1rem; margin: 10px 0;">Email: hello@lovablecafe.com</p>
      </div>
    </section>

    <!-- Footer -->
    <footer style="background-color: #333; color: white; padding: 20px; text-align: center;">
      <p style="margin: 0;">© 2024 Lovable Café. All rights reserved.</p>
    </footer>

    <!-- Keep existing scripts -->
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
          css: ``,
          js: ``
        }
      },
  ];

  
