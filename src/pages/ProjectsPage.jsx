import Button from "../components/Button";

function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-[-79px] max-[764px]:mb-[-169px] mb-[-105px]">
      <h1 className="text-3xl mb-5">Coming soon!</h1>
      <Button to={"/"}>Go back to Home page</Button>
    </div>
  );
}

export default ProjectsPage;
