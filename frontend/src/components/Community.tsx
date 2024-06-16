import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Community = () => {
    return (
        <Card className="rounded-lg shadow-lg ">
            <CardHeader>
                <CardTitle className="text-center text-3xl tracking-tighter">Community Involvement</CardTitle>
            </CardHeader>
            <CardContent>
                <h2 className="font-bold"> Google Developer Student Clubs - Ateneo de Zamboanga University</h2>
                <h3 className="text-slate-500">Lead</h3>
                <h3 > August 2023 - June 2024</h3>
                <h3 className=" text-justify italic mt-10">During my time as a GDSC Lead, we collaborated with other chapters to equip our members with Google Developer Technologies such as Flutter, Firebase, and TensorFlow through tech talks and seminar workshops.</h3>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default Community;