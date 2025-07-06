import {createRoot} from 'react-dom/client';
import {Main} from "./components/Main";

setTimeout(() => createRoot(document.getElementById('main')).render(<Main/>), 100);
