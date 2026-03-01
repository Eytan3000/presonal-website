export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    excerpt:
      "Learn how to structure your React projects for scalability and maintainability, covering folder structure, state management, and performance optimization.",
    content: `
      <h2>Introduction</h2>
      <p>Building scalable React applications requires a solid foundation. In this post, we'll explore key strategies for structuring your projects to handle growth and complexity.</p>
      
      <h3>Folder Structure</h3>
      <p>A well-organized folder structure is crucial. Consider grouping files by feature rather than type. This keeps related code together and makes it easier to navigate.</p>
      
      <h3>State Management</h3>
      <p>Choosing the right state management solution is vital. For simple apps, Context API might suffice. For larger applications, consider Redux or Zustand.</p>
      
      <h3>Performance Optimization</h3>
      <p>React is fast, but you can make it faster. Use memoization, lazy loading, and code splitting to ensure your app remains responsive.</p>
    `,
    date: "2023-10-15",
    author: "Eytan Krief",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Architecture", "Performance"],
    category: "Development",
  },
  {
    id: "2",
    title: "The Future of Web Development with AI",
    excerpt:
      "Explore how Artificial Intelligence is transforming the web development landscape, from code generation to personalized user experiences.",
    content: `
      <h2>AI in Web Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword. It's actively changing how we build and interact with the web.</p>
      
      <h3>Code Generation</h3>
      <p>Tools like GitHub Copilot and ChatGPT are helping developers write code faster and with fewer errors. They act as intelligent assistants, suggesting snippets and even entire functions.</p>
      
      <h3>Personalization</h3>
      <p>AI algorithms can analyze user behavior to deliver highly personalized content and recommendations, improving user engagement and conversion rates.</p>
      
      <h3>Testing and Debugging</h3>
      <p>AI-powered tools can automatically generate test cases and identify bugs, streamlining the quality assurance process.</p>
    `,
    date: "2023-11-02",
    author: "Eytan Krief",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "Web Development", "Future Tech"],
    category: "Technology",
  },
  {
    id: "3",
    title: "Mastering CSS Grid and Flexbox",
    excerpt:
      "A comprehensive guide to understanding and using CSS Grid and Flexbox to create responsive and modern web layouts.",
    content: `
      <h2>CSS Layouts</h2>
      <p>CSS Grid and Flexbox are powerful tools for creating complex layouts. Understanding when to use each is key to mastering modern CSS.</p>
      
      <h3>Flexbox</h3>
      <p>Flexbox is one-dimensional. It's perfect for aligning items in a row or a column. Use it for navigation bars, card layouts, and centering content.</p>
      
      <h3>CSS Grid</h3>
      <p>CSS Grid is two-dimensional. It allows you to create complex grid structures with rows and columns. It's ideal for overall page layouts and complex component designs.</p>
      
      <h3>Combining Both</h3>
      <p>The real magic happens when you combine Flexbox and Grid. Use Grid for the main layout structure and Flexbox for the internal alignment of components.</p>
    `,
    date: "2023-11-20",
    author: "Eytan Krief",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop",
    tags: ["CSS", "Design", "Frontend"],
    category: "Design",
  },
];
