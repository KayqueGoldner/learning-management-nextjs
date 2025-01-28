# Learning Management

**An innovative platform designed to simplify the creation, management, and sale of online courses. Whether you're an educator, entrepreneur, or organization, Learning Management provides all the tools needed to share knowledge, grow your audience, and manage your business efficiently.**

![Application Screenshot](/learning-management.png "Application Screenshot")  

## 🚀 Features  

- **Authentication**: Secure login via OAuth and email.  
- **Courses**: Purchase, create, edit, and sell courses easily.  
- **Profile**: Edit and customize your profile information.  
- **Billing**: View and manage your payment history, invoices, and subscription details.  
- **Responsive Design**: Optimized for seamless use on all screen sizes and devices.  


## 🛠️ Technologies Used  

- **Frontend**:  
  - [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.  
  - [Motion](https://motion.dev/) - A modern animation library for JavaScript and React.  
  - [Redux Toolkit](https://redux-toolkit.js.org/) - State management for efficient and scalable applications.  

- **Backend**:  
  - [Node.js](https://nodejs.org/en) - A JavaScript runtime for building server-side applications.  
  - [Stripe](https://stripe.com) - A payment processing platform for subscriptions and secure payments.  
  - [Express.js](https://expressjs.com/) - A fast and minimalist web framework for Node.js.  
  - [Docker](https://www.docker.com/) - A platform to build, run, and manage applications in containers.  
  - [AWS Lambda](https://aws.amazon.com/lambda/) - Serverless computing for running code without managing servers.  
  - [DynamoDB](https://aws.amazon.com/dynamodb/) - A serverless NoSQL database for scalable applications.  
  - [S3](https://aws.amazon.com/s3/) - Cloud storage for data, backups, and media.  
  - [CloudFront](https://aws.amazon.com/cloudfront/) - Content delivery network for fast and secure web content.  

- **Programming Language**:  
  - [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript for robust development.  

- **Styling**:  
  - [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework.  
  - [Shadcn UI](https://ui.shadcn.com/) - Accessible and customizable UI components.  

- **Authentication**:  
  - [Clerk](https://clerk.com/) - Authentication and user management service with social login support.  

## 📦 NPM Packages  

- [Lucide](https://lucide.dev/) - Open-source, customizable icon library.  
- [React Icons](https://react-icons.github.io/react-icons/) - Library for adding icons to React apps.  
- [Sonner](https://sonner.emilkowal.ski/) - Minimal toast notifications for React. 


## 💻 Setup

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com/KayqueGoldner/learning-management-nextjs.git
```

### 2. Install Dependencies

```bash
cd learning-management-nextjs
cd client
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8001
NEXT_PUBLIC_LOCAL_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### 4. Install Server Dependencies

```bash
cd server
npm install
```

### 5. Configure Server Environment Variables

```bash
PORT=8001
NODE_ENV=development
AWS_REGION=
S3_BUCKET_NAME=
CLOUDFRONT_DOMAIN=
STRIPE_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

### 6. Access the Application

**You can access the application by opening the following URL in your browser:
http://localhost:3000**