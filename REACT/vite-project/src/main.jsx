import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Component that returns null
function MyComponent() {
  return null;
}

// Component that returns a Html element
function MyComponent2(){
  return (
    <div>
      <h1> fav text </h1>
    </div>
  );
}

// Component using a react fragment with multiple html elements
function MyComponent3(){
  return(
    <>
      <div></div>
      <div></div>
    </>
  );
}

//Parent component rendering
function ParentComponent(){
  return (
    <>
      <MyComponent />
      <MyComponent2></MyComponent2>
      <MyComponent3 />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1> My first react app</h1>
    <ParentComponent />
  </StrictMode>,
);
