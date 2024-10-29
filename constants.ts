interface Section {
  name: string;
  id: string;
}

export enum ElementIds {
   Hero = "hero",
   About = "about",
   Projects = "projects",
   Contact = "contact",
   skillDisplay = "skill-display"
}

export const sections: Section[] = [
   { name: "Home", id: ElementIds.Hero },
   { name: "About", id: ElementIds.About },
   { name: "Projects", id: ElementIds.Projects },
   { name: "Contact", id: ElementIds.Contact },
]

