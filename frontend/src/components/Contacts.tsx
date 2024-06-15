import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import phFlagIcon from "../assets/phflagicon.png"

const Contacts = () => {
  return (
    <div className="flex flex-col gap-5 bg-slate-300 py-5">
      <h1 className="text-center"> I would love to hear from you, get in touch with me through</h1>

      <div className="flex justify-center gap-10">
        <div className="flex flex-row">
          <img src={phFlagIcon} className="w-[30px] h-[20px] mt-0.5" />
          <h1>+63 9956207447</h1>
        </div>
        <div className="flex flex-row">
          <FaGithub className="w-6 h-6" /> <h1>Github</h1>
        </div>
        <div className="flex flex-row">
          <FaFacebook className="w-6 h-6 text-blue-600" /><h1>Facebook</h1>
        </div>
        <div className="flex flex-row">
          <FaLinkedin className="w-6 h-6 text-blue-500" /><h1>LinkedIn</h1>
        </div>
      </div>
    </div>
  )
}

export default Contacts;