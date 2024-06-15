import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
type Props = {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
       <div id ="header" className="shadow-md bg-slate-50 max-h-[10vh] fixed w-full z-10"><Header/></div>
        <div className="container mt-10 mx-auto flex-1 py-5">{children}</div>
        <div id="contacts"><Contacts/></div>
    </div>
  )
}

export default Layout;