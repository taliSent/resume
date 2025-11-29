import { TreeNodeT } from "./types";
import styles from "./NodeTree.module.css";
// import { motion } from "framer-motion";

const traverse = (arr: TreeNodeT[]) => {
  return (
    <>
      {arr.map(({ id, name, children }: TreeNodeT) => (
        <Node key={id} name={name} id={id} children={children} />
      ))}
    </>
  );
};
const Node = ({ name, id, children }: TreeNodeT) => {
  const content = traverse(children);
  return (
    <>
      <li id={id} style={{ padding: "20px" }}>
        <details>
          <summary className={styles.Node}>{name}</summary>
          {children.length > 0 && (
            <div className={styles.Content}>{content}</div>
          )}
        </details>
      </li>
    </>
  );
};

const NodeTree = ({ data }: { data: TreeNodeT[] }) => {
  return <ul>{traverse(data)}</ul>;
};

export default NodeTree;
