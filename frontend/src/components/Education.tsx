import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { FaMedal } from "react-icons/fa6";

const Education = () => {
    return (
        <Card className="rounded-lg shadow-lg ">
            <CardHeader>
                <CardTitle className="text-center">Education</CardTitle>
            </CardHeader>
            <CardContent>
                <h2>Ateneo de Zamboanga University</h2>
                <h3>BS Information Technology major in Web Development</h3>
                <h3>Graduated May 2024</h3>
                <span className="flex flex-row"><FaMedal className="w-5 h-5 text-yellow-500" /><h3>Magna Cum Laude</h3>
                </span>
                <p>With the value of Magis inculcated in me, I aim to do my best and continuously improve</p>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default Education;