// import React from "react";

// interface ButtonProps {
//   variant?: "primary" | "secondary" | "danger";
//   onClick?: () => void;
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ variant = "primary", onClick, children }) => {
//   const variantStyles = {
//     primary: "bg-blue-600 text-white hover:bg-blue-700",
//     secondary: "bg-gray-600 text-white hover:bg-gray-700",
//     danger: "bg-red-600 text-white hover:bg-red-700",
//   };

//   return (
//     <button
//       className={`px-4 py-2 rounded-lg transition-colors ${variantStyles[variant]}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// // export default Button; // Ensure this is exported