import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}
export default HomeLayout
