import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
type Props = {
  children: React.ReactNode;
  hero?: boolean;
}

const Layout = ({children, hero = true}: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {hero && <Hero/>}
       <div id ="header" className="shadow-md bg-slate-50 max-h-[10vh] fixed w-full z-10"><Header/></div>
        <div className="container mx-auto flex-1">{children}</div>
        <div id="contacts"><Contacts/></div>
    </div>
  )
}

export default Layout;