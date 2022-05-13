import React from "react";
import styles from "../scss/userbarcard.scss";

/**
 * Displays personal user bar inventory information.
 */
export default function UserBarCard(props) {
  //props.id, props.name
  return (
    <div className="user-bar-card">
      <div className="user-bar-design-block">
        <p className="user-bar-text user-bar-name">{props.type}</p>
      </div>
      <div>
        <p className="user-bar-text user-bar-type">
          <b>ID:</b> {props.id}
        </p>
        <p className="user-bar-text user-bar-stock">
          <b>Ingredient Name:</b> {props.name}
        </p>
      </div>
    </div>
  );
}
