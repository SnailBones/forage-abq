import React from "react";
import Image from "next/image";

export function useMDXComponents(components) {
    return {
        img: (props) => (
            <figure>
                <Image width="1000" height="1000" {...props} />
                <figcaption>{props.title}</figcaption>
            </figure>
        ),
        // Do not wrap images in a p tag
        p: (props) => {
            if (
                typeof props.children === "object" &&
                !Array.isArray(props.children) &&
                props.children.props.src
            ) {
                return <>{props.children}</>;
            }
            return <p {...props} />;
        },
        ...components,
    };
}
