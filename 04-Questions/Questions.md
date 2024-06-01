# **Question 4**
## **JS**
### **Explain the concept of promises in JavaScript. How do they differ from callbacks?**

## **REACT**
### **Explain the following code:**
```
import React, { useState, useEffect } from 'react';
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
   const handleError = (error, info) => {
    console.error('Error caught by error boundary:', error, info);
    setHasError(true);
   };

   window.addEventListener('error', handleError);

   return () => {
    window.removeEventListener('error', handleError);
   };
  }, []);

  if (hasError) {
   return <h1>Something went wrong.</h1>;
  }

  return children;
};

const MyComponent = () => {
  return (
   <ErrorBoundary>
    {/* The rest of the component tree goes here */}
   </ErrorBoundary>
  );
}; 
```
## **Security/Routing/Styling**
### **Describe some important design principles when developing a website that should be working well on mobile, tablet, as well as desktop browsers.**
