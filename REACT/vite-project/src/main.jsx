import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import StatesAndEvents from './StatesAndEvents/Form2.0.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <StatesAndEvents />
  </StrictMode>,
);
