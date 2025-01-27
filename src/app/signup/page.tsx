// import { motion } from "framer-motion";
// import Input from "@/components/Input";
// import Button from "@/components/Button";

// export default function SignUp() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-8 rounded-lg shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
//         <form className="mt-6">
//           <Input label="Name" type="text" placeholder="Enter your name" />
//           <Input label="Email" type="email" placeholder="Enter your email" />
//           {/* <Input label="Password" type="password" placeholder="Enter your password" /> */}
//           <Button type="submit" variant="primary" className="w-full">
//             Sign Up
//           </Button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Already have an account? <a href="/signin" className="text-primary hover:underline">Sign In</a>
//         </p>
//       </motion.div>
//     </div>
//   );
// }