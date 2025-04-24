# Contributing Guide

Welcome to the project! We've recently migrated from Vite.js with React to Next.js, and this guide will help contributors get started with Next.js and understand how to create routes using the App router.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com)

### Setting Up the Project

1. Clone the repository:

```bash
git clone https://github.com/severusraj/sbyc-frontend-clone.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

### Understanding Next.js and Routing

Next.js uses the App Router (app directory) for file-based routing. This is different from Vite.js with React, where you might have used React Router.

### Creating a New Page

To create a new route, add a folder inside the `app` directory with a `page.tsx` or `page.jsx` file:

**Example: Creating a `/about` page**

```bash
app/
├── about/
│   ├── page.tsx  <-- This file defines the "About" page
│   └── other-component.tsx  <-- Additional components (optional)
```

```ts
// app/about/page.tsx
export default function AboutPage() {
	return <h1>About Us</h1>;
}
```

Now, navigating to `https://localhost:3000/about` will display this page.

### Dynamic Routes

To create dynamic routes, use square brackets `[]` in the folder name.

**Example Creating a `/user/:id` page**

```bash
app/
├── users/
│   ├── [id]/
│   │   ├── page.tsx  <-- This file handles dynamic user IDs
```

```ts
// app/users/[id]/page.tsx
import { useParams } from "next/navigation";

export default function UserPage() {
	const params = useParams();
	return <h1>User ID: {params.id}</h1>;
}
```

## Contributing

- Follow the project coding style.
- Use meaningful commit messages.
- Create a new branch for your feature/fix.
- Submit a pull request for review.

Happy coding...
