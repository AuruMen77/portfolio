import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
    return (
        <Card className="rounded-lg shadow-custom-lg">
            <CardHeader>
                <CardTitle className="text-center">Experience</CardTitle>
            </CardHeader>
            <CardContent>
                <h2>Department of Science and Technology - League of Developers Initiative (DOST - Project LODI)</h2>
                <h3>Intern</h3>
                <h3>May - July 2023</h3>
                <p>Developed backend API to collect, update, and delete data using PHP-Laravel from a MySQL database</p>
            </CardContent>
            <div className="border-b" />
            <CardContent>
                <h2>Ateneo de Zamboanga University</h2>
                <h3>Active Learner Program</h3>
                <h3>September 2023 - June 2024</h3>
                <p>Fixed bugs and issues and developed new features for the various systems used by the school both web-based and native applications that are run in Java</p>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default Experience;