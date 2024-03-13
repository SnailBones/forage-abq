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
        p: (props) => {
            // Check if children is an array and contains only React elements
            if (
                Array.isArray(props.children) &&
                props.children.every((child) => React.isValidElement(child))
            ) {
                return <>{props.children}</>;
            }
            // For text nodes or mixed content, wrap in a <p> tag
            return <p {...props} />;
        },
        ...components,
    };
}
