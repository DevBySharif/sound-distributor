import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import AuthProvider from './Providers/AuthProviders.jsx'
import Route from "./Routes/Route.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}>
      
    </QueryClientProvider> */}
    <AuthProvider>
        <RouterProvider router={Route}></RouterProvider>
      </AuthProvider>

    {/* <Toaster></Toaster> */}
  </React.StrictMode>,
)
