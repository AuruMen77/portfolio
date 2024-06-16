import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { FaMedal } from "react-icons/fa6";

const Education = () => {
    return (
        <Card className="rounded-lg shadow-lg ">
            <CardHeader>
                <CardTitle className="text-center text-3xl tracking tighter">Education</CardTitle>
            </CardHeader>
            <CardContent>
                <h2 className="text-center text-xl font-bold">Ateneo de Zamboanga University</h2>
                <h3 className="text-center text-sm">BS Information Technology major in Web Development</h3>
                <h3 className="text-center text-sm">Graduated May 2024</h3>
               <div className="flex justify-center items-center mt-2">
                    <FaMedal className="w-5 h-5 text-yellow-500" />
                    <h3 className="ml-2 ">Magna Cum Laude</h3>
                </div>
                <p className="mt-10 text-justify italic">With the value of Magis inculcated in me, I aim to do my best and continuously improve</p>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default Education;