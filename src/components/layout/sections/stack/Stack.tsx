import React, { use } from "react";
import { GiTechnoHeart } from "react-icons/gi";
import Header from "../../header/Header";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { edges, nodes } from "./constants";
import styles from "./Stack.module.css";
import { ThemeContext } from "src/context/context";
import { useMediaQuery } from "react-responsive";

const Stack: React.FC = () => {
  const { theme } = use(ThemeContext);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" }); // Example for mobile breakpoint

  return (
    <section id="stack" aria-label="my stack" data-screen-width={true}>
      <Header
        name="Stack"
        icon={<GiTechnoHeart className="icon" />}
        textSecondary="technologies I use"
      />
      <div className={styles.ReactFlow}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          colorMode={theme}
          preventScrolling={!isDesktop}
          fitView={true}
          nodesConnectable={false}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </section>
  );
};
export default Stack;
