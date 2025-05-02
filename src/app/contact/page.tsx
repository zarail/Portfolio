export default function ContactsPage() {
  return (
    <main className="p-10">
      <div>
        <h1>Contact</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <ul>
          <li>
            Email:
            <a href="mailto:zahrailkhan.gmail.com"></a>
          </li>
          <li>
            LinkedIn:
            <a href="https://www.linkedin.com/in/zahra-ilkhan"></a>
          </li>
          <li>
            GitHub:
            <a href="https://github.com/zarail"></a>
          </li>
        </ul>
      </div>
      <br />
      <h2>Contact Form</h2>
      <form action="https://example.com/contact" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
