interface Section {
  name: string;
  id: string;
}

export enum ElementIds {
   Hero = "hero",
   About = "about",
   Projects = "projects",
   Contact = "contact",
   Experience = "experience",
   skillDisplay = "skill-display",
   projectListPage = "project-list-page",
   projectPage = "project-page",
}

export const sections: Section[] = [
   { name: "Home", id: ElementIds.Hero },
   { name: "About", id: ElementIds.About },
   { name: "Experience", id: ElementIds.Experience },
   { name: "Projects", id: ElementIds.Projects },
   { name: "Contact", id: ElementIds.Contact },
]

