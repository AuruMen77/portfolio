import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
    return (
        <Card className="rounded-lg shadow-lg">
            <CardHeader>
                <CardTitle className="text-center text-3xl tracking-tighter">Experience</CardTitle>
            </CardHeader>
            <CardContent>
                <h2 className="font-bold ">Department of Science and Technology - League of Developers Initiative (DOST - Project LODI)</h2>
                <h3 className="text-slate-500">Intern</h3>
                <h3 className="">May - July 2023</h3>
                <p className=" text-justify italic">Developed backend API to collect, update, and delete data using PHP-Laravel from a MySQL database</p>
            </CardContent>
            <div className="border-b" />
            <CardContent>
                <h2 className="font-bold mt-5">Ateneo de Zamboanga University</h2>
                <h3 className="text-slate-500">Active Learner Program</h3>
                <h3>September 2023 - June 2024</h3>
                <p className="  text-justify italic">I fixed bugs and issues, and developed new features for various systems used by the school, including both web-based and native applications written in Java</p>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default Experience;