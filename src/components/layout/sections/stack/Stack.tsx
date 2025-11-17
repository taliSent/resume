import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import Header from "../../header/Header";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { edges, nodes } from "./constants";
import styles from './Stack.module.css';

const Stack: React.FC = () => {
  return (
    <section id="stack" aria-label="my stack" data-screen-width={true}>
      <Header
        name="Stack"
        icon={<GiTechnoHeart className="icon" />}
        textSecondary="technologies I use"
      />
      <div className={styles.ReactFlow}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </section>
  );
};
export default Stack;
