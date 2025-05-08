
// import './App.css';
// import StopWatch from './StopWatch';
// import Weather from './Weather';
// import React, { useState } from 'react';
// import BookList from './components/BookLists';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import BookItem from './components/BookItem';

// const App = () => {
//   const [books] = useState([
//     { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 299 },
//     { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 349 },
//     { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 399 }
//   ]);

//   const [cart, setCart] = useState([]);
//   const [checkout, setCheckout] = useState(false);

//   const addToCart = (book) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === book.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { ...book, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (bookId) => {
//     setCart((prev) => prev.filter((item) => item.id !== bookId));
//   };

//   const handleCheckout = () => {
//     setCheckout(true);
//   };

//   const handlePlaceOrder = () => {
//     alert('Order placed successfully!');
//     setCart([]);
//     setCheckout(false);
//   };

//   return (
//     <div className="app-container">
//       <h1>📚 Online Bookstore</h1>
//       {!checkout ? (
//         <>
//           <BookList books={books} onAddToCart={addToCart} />
//           <Cart cartItems={cart} onRemove={removeFromCart} onCheckout={handleCheckout} />
//         </>
//       ) : (
//         <Checkout onPlaceOrder={handlePlaceOrder} />
//       )}
//     </div>
//   );
// };


import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Here, you can integrate an email sending service (like EmailJS) or backend API for actual form submission.
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app-container">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <nav>
        <a href="#about" onClick={() => handleSectionChange('about')}>About</a>
        <a href="#projects" onClick={() => handleSectionChange('projects')}>Projects</a>
        <a href="#skills" onClick={() => handleSectionChange('skills')}>Skills</a>
        <a href="#contact" onClick={() => handleSectionChange('contact')}>Contact</a>
        <a href="#resume" onClick={() => handleSectionChange('resume')}>Resume</a>
      </nav>

      <section className={activeSection === 'about' ? 'active' : ''} id="about">
        <h2>About Me</h2>
        <p>Heyyy !!!  <br/>I'm Aishwarya Wanjari, a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. <br/> I've recently completed my Full Stack Development training, gaining hands-on experience through practical projects and continuous learning.

With a Bachelor of Technology in Computer Technology, I’ve built skills across HTML, CSS, JavaScript, React, Spring Boot, Java, and SQL. I enjoy creating responsive, user-friendly applications and love diving into new technologies to keep growing as a developer.</p>
      </section>

      <section className={activeSection === 'projects' ? 'active' : ''} id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: PurelyMade</h3>
          <p>PurelyMade is a full-stack website where users can browse and purchase handmade crafts, jewelry, and other products. The admin can manage products, and users can add items to their cart and make purchases.</p>
          <a href="https://github.com/yourusername/purelymade" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Project 2: The House of Events</h3>
          <p>The House of Events is a website designed for event management. Users can book events, view galleries, and check terms and conditions. The admin manages event bookings, client blogs, and event information.</p>
          <a href="https://github.com/yourusername/the-house-of-events" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Project 3: TicTacToe Game</h3>
          <p>This is a simple interactive Tic-Tac-Toe game built using JavaScript . It allows two players to play the game, and the game logic checks for win conditions and displays the result.</p>
          <a href="https://github.com/yourusername/tictactoe-game" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </section>

      <section className={activeSection === 'skills' ? 'active' : ''} id="skills">
        <h2>Skills</h2>
        <ul>
        <li>Frontend: HTML, CSS, JavaScript, React</li>
          <li>Backend: Spring Boot, Java</li>
          <li>Database: SQL</li>
          <li>Tools: VS Code, Figma, Canva</li>
        </ul>
      </section>

      <section className={activeSection === 'contact' ? 'active' : ''} id="contact">
        <h2>Contact</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className={activeSection === 'resume' ? 'active' : ''} id="resume">
        <h2>Resume</h2>
        <p>You can download my resume from the link below:</p>
        <a href="/aishwaryawanjari_resume.pdf" download>Download Resume</a>
      </section>

      <footer>
        <p>© 2025 My Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
