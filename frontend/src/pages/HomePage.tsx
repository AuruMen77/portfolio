import MainBody from "@/components/MainBody";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-20 ">
            <div id="main-body" ><MainBody /></div>
            <div id="skills"><Skills /></div>
            <div id="projects" className="text-5xl text-center tracking-tight pt-5 mb-10 text-blue-500">Projects</div>
            <div className="grid md:grid-cols-2 gap-10">
                <Projects
                    title="Foodmanazz"
                    description="A food ordering application with searching capabilities"
                    imagePath="../assets/project-mern-food-ordering.png"
                    explanation="This food ordering-app is built with React for the frontend framework and Node for the backend, it uses express to manage the routes.
        Additionally it uses third-party applications such as Stripe for the payment, Cloudinary for saving images, and MongoDB for the database"
                    link="https://mern-food-ordering-app-frontend-y8ki.onrender.com"
                    techstack={["1", "2", "3"]}
                />
                <Projects
                    title="Ground Zero - Scheduler"
                    description="A scheduler with a calendar view"
                    imagePath="../assets/project-scheduler.png"
                    explanation="This is built using React for front end and Laravel with Breeze for the scaffolding. It also utilizes FullCalendar for the calendar view "
                    techstack={["1", "2", "3"]}
                    link=""

                />
            </div>
        </div>
    )
}

export default HomePage;