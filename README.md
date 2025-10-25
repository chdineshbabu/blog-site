# Blog Site

A modern, responsive blog application built with React and Firebase. This project features user authentication with Google, a user-friendly interface for creating and viewing blog posts, and a seamless reading experience.

## Features

- 🔐 **Google Authentication** - Sign in securely with your Google account
- ✍️ **Create Posts** - Write and publish blog posts with a rich form interface
- 📖 **View Posts** - Browse all blog posts in a responsive grid layout
- 🔍 **Post Details** - Click on any post to read the full content
- 🎨 **Modern UI** - Beautiful interface built with Tailwind CSS
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- ⚡ **Fast Performance** - Built with React and Firebase for optimal speed

## Tech Stack

- **Frontend**: React 18.2
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication, Analytics)
- **Form Handling**: React Hook Form with Yup validation
- **Authentication**: Firebase Google Authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Firebase project (for backend)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blog-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a project at [Firebase Console](https://console.firebase.google.com/)
   - Copy your Firebase configuration
   - Update `src/config/firebase.js` with your configuration
   - Enable Authentication and Firestore in your Firebase project

4. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
blog-site/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── navbar.js      # Navigation bar
│   │   ├── login-page.js  # Login component
│   │   └── error.js       # Error page component
│   ├── config/
│   │   └── firebase.js    # Firebase configuration
│   ├── pages/
│   │   ├── main/          # Main blog listing page
│   │   ├── login.js       # Login page
│   │   └── create-post/   # Create post page
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
├── package.json
└── tailwind.config.js     # Tailwind CSS configuration
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation.** Ejects from Create React App configuration

## Usage

1. **Login**: Click the login button and sign in with your Google account
2. **Browse Posts**: View all published posts on the home page
3. **Create Post**: Click "Create Post" to add a new blog post (requires authentication)
4. **Read Posts**: Click on any post to view its full content
5. **Logout**: Click the logout button to sign out

## Firebase Setup

This project uses Firebase for:
- **Authentication**: Google Sign-in
- **Database**: Firestore for storing blog posts
- **Analytics**: User behavior tracking

Make sure to:
1. Enable Google Authentication in Firebase Console
2. Create a Firestore database with the following structure:
   ```
   posts/
     - postId/
       - author: string
       - postText: string
       - title: string
   ```
3. Set up appropriate Firestore security rules for your use case

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `primary`: Main background color
- `secondary`: Secondary color (navigation bar)
- `orange`: Accent color
- `yellow`: Highlight color

### Styling
The project uses Tailwind CSS for styling. Modify styles directly in component files using Tailwind utility classes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Troubleshooting

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version compatibility

### Firebase connection issues
- Verify your Firebase configuration in `src/config/firebase.js`
- Ensure Firebase services (Authentication, Firestore) are enabled
- Check your Firestore security rules

### Authentication not working
- Verify Google Authentication is enabled in Firebase Console
- Check browser console for error messages
- Ensure Firebase API keys are correctly configured
