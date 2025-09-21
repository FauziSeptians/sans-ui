
import { CardComponent, Text } from "@lib/main";
import "./App.css";
import "./index.css";
import { Sidebar } from "@lib/Layout";
import {
   FolderGit2,
   House,
   User,
} from "lucide-react";

const dataSidebar = [
   {
      icon: House,
      key: "Dashboard",
      menu: "Dashboard",
      url: "/dashboard",
   },
   {
      icon: FolderGit2,
      key: "Projects",
      menu: "Projects",
      url: "/projects",
      subMenu: [
         {
            key: "Project Satu",
            menu: "Project Satu",
            url: "/project-satu",
         },
         {
            key: "Project Dua",
            menu: "Project Dua",
            url: "/project-dua",
         },
      ],
   },
   {
      icon: User,
      key: "About",
      menu: "About",
      url: "/about",
      subMenu: [
         {
            key: "About-us",
            menu: "About-us",
            url: "/about-us",
         },
      ],
   },
];

function App() {
   console.log(window.location.pathname);

   return (
      <Sidebar
         menus={dataSidebar}
         urlPath={window.location.pathname}
         bottomComponent={
            <div className="bg-red-200 p-4 w-full">Ini bottom</div>
         }
         headerComponent={
            <div className="bg-red-200 p-4 w-full">Ini header</div>
         }
      >
         <div className="bg-red-200 w-full h-screen text-center flex justify-center items-center">
            <CardComponent />
            <Text>awdwad</Text>
         </div>
      </Sidebar>
   );
}

export default App;
