import React, { cloneElement } from "react";

export default (props) => {
  console.log(typeof props.children);
  return (    
    <div>
      {
        props.children.map((child, i) => {
          return cloneElement(child, { ...props, key: i });
        })

        // React.Children.map(props.children, (el) => {
        //     return cloneElement(el,props)
        // }) // MAPEAMENTO UTILIZANDO CHILDREN DO REACT

        // React.cloneElement(props.children, props)
      }
    </div>
  );
};
