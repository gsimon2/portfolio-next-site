import {
   Button,
   Center,
   Container,
   Group,
   Paper,
} from "@mantine/core";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";

export default function IndexPage() {
   return (
      <>
         <HeroSection />
         <Navbar />
         <Container h={5000} id="about">
            <Paper p="xl" withBorder>
               <Center>
                  <Group mt={50} justify="center">
                     <Button size="xl">Welcome to Mantine!</Button>
                  </Group>
               </Center>
            </Paper>
         </Container>
      </>
   );
}
