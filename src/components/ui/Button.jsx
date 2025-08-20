import React from "react";

function baseClasses(variant, size) {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-blue-600 text-white hover:brightness-110 active:brightness-95 shadow-sm hover:shadow-md",
    secondary:
      "bg-purple-600 text-white hover:brightness-110 active:brightness-95 shadow-sm hover:shadow-md",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",
    ghost: "text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800",
  };

  return `inline-flex items-center justify-center rounded-md transition ${sizes[size]} ${variants[variant]}`;
}

function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classNames = `${baseClasses(variant, size)} ${className}`;
  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}

export default Button;
