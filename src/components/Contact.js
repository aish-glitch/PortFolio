import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="card">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows="4" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
