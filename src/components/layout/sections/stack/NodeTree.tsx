import { TreeNodeT } from "./types";
import styles from "./NodeTree.module.css";
import HookSvg from "./HookSvg";

const traverse = (arr: TreeNodeT[]) => {
  return (
    <>
      {arr.map(({ id, name, children }: TreeNodeT, index: number) => (
        <Node index={index} key={id} name={name} id={id} children={children} />
      ))}
    </>
  );
};
// 17 - 1/2 of the height of the badge
// 17 - another 1/2 another badge
// 12 - distance between them
// width: 34 + 13
const Node = ({ name, id, children, index }: TreeNodeT) => {
  const content = traverse(children);
  return (
    <>
      <li id={id}>
        <HookSvg height={35 + 17 + index * 64} />
        <details style={{ padding: "12px" }} open={true}>
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
