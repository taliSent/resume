import React, { use } from "react";
import { GiTechnoHeart } from "react-icons/gi";
import Header from "../../header/Header";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { edges, nodes } from "./constants";
import styles from "./Stack.module.css";
import { ThemeContext } from "src/context/context";
import MediaQuery, { useMediaQuery } from "react-responsive";
import NodeTree from "./NodeTree";
import { initialTreeData } from "./data";

const Stack: React.FC = () => {
  const { theme } = use(ThemeContext);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <section id="stack" aria-label="my stack" data-wide={true}>
      <Header
        name="Stack"
        icon={<GiTechnoHeart className="icon" />}
        textSecondary="technologies I use"
      />
      <MediaQuery maxWidth={1024}>
        <NodeTree data={initialTreeData} />
      </MediaQuery>

      <MediaQuery minWidth={1024}>
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
      </MediaQuery>
    </section>
  );
};
export default Stack;
