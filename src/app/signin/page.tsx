// import { motion } from "framer-motion";
// import Input from "@/components/Input";
// import Button from "@/components/Button";

// export default function SignIn() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-8 rounded-lg shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
//         <form className="mt-6">
//           <Input label="Email" type="email" placeholder="Enter your email" />
//           <Input label="Password" type="password" placeholder="Enter your password" />
//           <Button type="submit" variant="primary" className="w-full">
//             Sign In
//           </Button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account? <a href="/signup" className="text-primary hover:underline">Sign Up</a>
//         </p>
//       </motion.div>
//     </div>
//   );
// }