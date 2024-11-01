import { Anchor, Breadcrumbs, Container, Table } from "@mantine/core";
import React from "react";
import { ElementIds } from "../constants";
import BadgeDisplay from "../components/Shared/BadgeDisplay/BadgeDisplay";
import { projects } from "../content/projects";

const ProjectListPage: React.FC = () => {
   return (
      <Container fluid className="section-container" id="project-list-page">
         <Breadcrumbs>
            <Anchor href="/">Home</Anchor>
            <Anchor href={`/#${ElementIds.Projects}`}>Projects</Anchor>
            <Anchor href="">Project List</Anchor>
         </Breadcrumbs>
         <h2>All Projects</h2>
         <Table.ScrollContainer minWidth={400}>
            <Table striped highlightOnHover withTableBorder captionSide="top">
               <Table.Caption>My recent projects</Table.Caption>
               <Table.Thead>
                  <Table.Tr>
                     <Table.Th>Year</Table.Th>
                     <Table.Th>Project</Table.Th>
                     <Table.Th>Highlights</Table.Th>
                     <Table.Th>Link</Table.Th>
                  </Table.Tr>
               </Table.Thead>
               <Table.Tbody>
                  {projects.map((project) => (
                     <Table.Tr
                        key={project.title}
                        style={{ cursor: "pointer", textAlign: "center" }}
                        onClick={() => (window.location.href = project.link)}
                        my="sm"
                     >
                        <Table.Td>{project.year}</Table.Td>
                        <Table.Td>{project.title}</Table.Td>
                        <Table.Td py="md">
                           <BadgeDisplay badges={project.badges} />
                        </Table.Td>
                        <Table.Td px="lg">
                           <Anchor
                              href={project.link}
                              onClick={(e) => e.stopPropagation()}
                           >
                              View
                           </Anchor>
                        </Table.Td>
                     </Table.Tr>
                  ))}
               </Table.Tbody>
            </Table>
         </Table.ScrollContainer>
      </Container>
   );
};

export default ProjectListPage;
