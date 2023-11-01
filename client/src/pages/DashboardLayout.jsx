import { Outlet, useLoaderData, redirect, useNavigate } from "react-router-dom"
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import Wrapper from "../assets/wrappers/Dashboard.js"
import { createContext, useContext, useState } from "react"
import { checkDefaultTheme } from "../App"
import customFetch from "../utils/customFetch"
import { toast } from 'react-toastify'

export const loader = async () => {
   try {
      const { data } = await customFetch.get('/users/current-user')
      return data
   } catch (error) {
      return redirect('/')
   }
}

const DashboardContext = createContext()

const DashboardLayout = () => {
   const navigate = useNavigate()
   const { user } = useLoaderData()
   const [showSidebar, setShowSidebar] = useState(false)
   const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme())

   const toggleDarkTheme = () => {
      const newDarkTheme = !isDarkTheme
      setIsDarkTheme(newDarkTheme)
      document.body.classList.toggle('dark-theme')
      localStorage.setItem('darkTheme', newDarkTheme)
   }

   const toggleSidebar = () => {
      setShowSidebar(!showSidebar)
   }

   const logout = async () => {
      navigate('/login')
      await customFetch.get('/auth/logout')
      toast.success('Logging out...')
   }
   // testFunction()

   return (
      <DashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logout }}>
         <Wrapper>
            <main className="dashboard">
               <SmallSidebar />
               <BigSidebar />
               <div>
                  <Navbar />
                  <div className="dashboard-page">
                     <Outlet context={{ user }} />
                  </div>
               </div>
            </main>
         </Wrapper>
      </DashboardContext.Provider >
   )
}

export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout