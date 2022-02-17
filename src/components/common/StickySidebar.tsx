import { useStickySidebar } from "@/hooks/stickySidebar";
import React, { useEffect } from "react";

interface Props {
  offsetTop?: number;
  offsetBottom?: number;
}

export const StickySidebar = ({
  offsetTop = 0,
  offsetBottom = 0,
  children,
}: React.PropsWithChildren<Props>) => {
  const stickySidebar = useStickySidebar({ offsetTop, offsetBottom });

  useEffect(() => {
    const unsubscribe = stickySidebar();

    return () => unsubscribe?.();
  }, []);

  return <aside>{children}</aside>;
};
