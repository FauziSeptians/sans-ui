import "./App.css";
import "./index.css";
// import { CardComponent } from "zsans-ui";
import { CardComponent } from "../lib/Card/CardComponent";

function App() {
   return (
      <>
         <div className="p-3 ">test</div>
         <CardComponent
            Header={"Youtuber"}
            Image={
               "https://www.lapakgaming.com/blog/id-id/wp-content/uploads/2023/07/windah-basudara-1.webp"
            }
            Description={"ini yotuuber"}
         />
      </>
   );
}

export default App;
