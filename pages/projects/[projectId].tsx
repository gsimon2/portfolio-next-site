import { Anchor, Breadcrumbs, Container, ScrollArea } from "@mantine/core";
import { useRouter } from "next/router";
import { ElementIds } from "../../constants";
import ProjectPage from "../../components/ProjectPage/ProjectPage";
import { projects } from "../../content/projects";
import Head from "next/head";
import Navbar from '../../components/Navbar/Navbar';

const ProjectIndexPage: React.FC = () => {
   const router = useRouter();

   const project = projects.find(
      (project) => project.id === router.query.projectId
   );

   return (
      <>
         <Head>
            <title>{`${project?.title ?? "project"} | Glen A Simon`}</title>
         </Head>
         <Navbar />
         <Container fluid className="section-container" id="project-list-page">
            <ScrollArea type="auto" scrollbars="x" offsetScrollbars>
               <Breadcrumbs>
                  <Anchor href="/">Home</Anchor>
                  <Anchor href={`/#${ElementIds.Projects}`}>Projects</Anchor>
                  <Anchor href="/projectList">Project List</Anchor>
                  <Anchor href={project?.link}>{project?.title}</Anchor>
               </Breadcrumbs>
            </ScrollArea>
            {project && <ProjectPage {...project} />}
         </Container>
      </>
   );
};

export default ProjectIndexPage;
