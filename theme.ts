import { createTheme, colorsTuple } from "@mantine/core";

export const theme = createTheme({
   primaryColor: "gray",
   colors: {
      
      "ocean-blue": [
         "#7AD1DD",
         "#5FCCDB",
         "#44CADC",
         "#2AC9DE",
         "#1AC2D9",
         "#11B7CD",
         "#09ADC3",
         "#0E99AC",
         "#128797",
         "#147885",
      ],
      glass: colorsTuple("rgba(40,40,40,0.92)"),
   },
});
