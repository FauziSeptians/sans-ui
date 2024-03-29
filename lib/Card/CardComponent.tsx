import { motion} from "framer-motion";
import { useState } from "react";

export const CardComponent = ({
   Image,
   Header,
   Description,
}: {
   Image: String;
   Header: String;
   Description: String;
}) => {
   const [HoverCard, setHoverCard] = useState(false);

   console.log(HoverCard);

   return (
      <motion.div
         className="p-4 bg-black rounded-[10px] w-[450px] cursor-pointer h-[400px] relative"
         onMouseMove={() => setHoverCard(true)}
         onMouseLeave={() => setHoverCard(false)}
         whileHover={{ scale: 1.05 }}
      >
         {
            <motion.img
               src={`
                  ${
                     Image
                        ? Image
                        : "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/06/1455190466-sonic-the-hedgehog-1080x675.png?resize=640:*"
                  }
               `}
               className={`rounded-t-[5px] h-[250px] w-full
               `}
               layout
               initial={{ opacity: 1 }}
               animate={
                  HoverCard
                     ? {
                          height: "0px",
                          opacity: 0,
                       }
                     : {
                          height: "250px",
                          opacity: 1,
                       }
               }
            />
         }
         <div className="w-full p-2 text-white text-start flex flex-col gap-2">
            <div id="Header" className="text-[24px] font-medium tracking-wider">
               {Header ? Header : "Header"}
            </div>
            <p
               id="description"
               className="text-[16px] font-light  h-[50px]  break-all tracking-wider opacity-[0.8]"
            >
               {Description ? Description : "Description"}
            </p>
         </div>
      </motion.div>
   );
};
