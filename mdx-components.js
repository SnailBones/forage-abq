import React from "react";
import Image from "next/image";

export function useMDXComponents(components) {
  return {
    img: (props) => (
      <figure>
        <Image sizes="100vw" width="400" height="400" {...props} />
        <figcaption>{props.title}</figcaption>
      </figure>
    ),
    p: (props) => {
      if (typeof props.children === "object") {
        return <>{props.children}</>;
      }
      return <p {...props} />;
    },
    ...components,
  };
}
