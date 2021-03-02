import React from "react";

const ListTabs = (props) => {
  const { tabs } = props;
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          {tabs.map((tab) => (
            <li key={tab.id}>{tab.name}</li>
          ))}
        </li>
      </ul>
    </>
  );
};

export default ListTabs;
