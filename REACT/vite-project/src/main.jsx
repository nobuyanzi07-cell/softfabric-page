import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Mapping from './Mapping';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Mapping/>
  </StrictMode>,
);
