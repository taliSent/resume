import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import Header from "../../header/Header";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { edges, nodes } from "./constants";

const Stack: React.FC = () => {
  return (
    <section id="stack" aria-label="my stack">
      <Header
        name="Stack"
        icon={<GiTechnoHeart className="icon" />}
        textSecondary="technologies I use"
      />
      <div style={{ height: "500px", width: "100%" }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </section>
  );
};
export default Stack;
