
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './config/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CartItems from './CartItems.jsx'

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "check",
        element: <CartItems />
    }
])


createRoot(document.getElementById('root')).render(

    <Provider store={store}>

        <RouterProvider router={router}>
        </RouterProvider>

    </Provider>

)
