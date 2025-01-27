// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white shadow">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <a href="/" className="text-2xl font-bold text-primary">SageFlow</a>
//             <div className="flex space-x-4">
//               <a href="/about" className="text-gray-700 hover:text-primary">About</a>
//               <a href="/signin" className="text-gray-700 hover:text-primary">Sign In</a>
//               <a href="/signup" className="text-gray-700 hover:text-primary">Sign Up</a>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <motion.main
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-6 py-8"
//       >
//         <h1 className="text-4xl font-bold text-center text-gray-800">About SageFlow</h1>
//         <p className="mt-4 text-center text-gray-600">
//           SageFlow is a smart healthcare analysis platform designed to provide actionable insights for better health.
//         </p>
//       </motion.main>
//     </div>
//   );
// }