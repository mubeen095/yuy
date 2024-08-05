import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqData = [
  { question: "What is Next.js?", answer: "Next.js is a React framework that provides server-side rendering and static site generation for React applications." },
  { question: "How do I get started with Next.js?", answer: "You can get started by creating a new Next.js project using the command 'npx create-next-app' or by following the official documentation." },
  { question: "What is server-side rendering?", answer: "Server-side rendering (SSR) is the process of rendering a web page on the server rather than in the browser, which can improve performance and SEO." },
  { question: "What is static site generation?", answer: "Static site generation (SSG) is the process of generating static HTML pages at build time, which can be served quickly and efficiently." },
  { question: "Can I use Next.js with existing React projects?", answer: "Yes, you can migrate an existing React project to Next.js to take advantage of its features like SSR and SSG." },
  { question: "How do I deploy a Next.js application?", answer: "You can deploy a Next.js application to platforms like Vercel, Netlify, or any hosting provider that supports Node.js." },
  { question: "What are API routes in Next.js?", answer: "API routes allow you to build API endpoints as part of your Next.js application, which can be used to handle server-side logic and data fetching." },
  { question: "How do I add custom styling in Next.js?", answer: "You can add custom styling using CSS modules, styled-components, or any CSS-in-JS library supported by Next.js." },
  { question: "What is dynamic routing in Next.js?", answer: "Dynamic routing allows you to create pages with dynamic URLs based on data or user input, using file-based routing and query parameters." },
  { question: "How do I handle authentication in Next.js?", answer: "Authentication can be handled using libraries like NextAuth.js or by implementing custom authentication logic using API routes." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button
            className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            {faq.question}
          </button>
          <div className={`${styles.answer} ${openIndex === index ? styles.active : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQSection;
