import ReactDOM from "react-dom";

type Props = null;

export const Head = ({ children }: React.PropsWithChildren<Props>) => {
  const head = document.querySelector("head");

  if (!head) return null;

  return ReactDOM.createPortal(children, head);
};
