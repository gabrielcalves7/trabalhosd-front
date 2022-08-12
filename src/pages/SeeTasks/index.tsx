import React from 'react';
import Header from "../Header";
import {Card} from "../../Components/Card";

function SeeTasks() {
  return (
    <div className="container">
      <Header/>
      <div className="tasks">
        <Card name="Arrumar casa"
              data="12/10"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        />
        <Card name="Arrumar casa"
              data="12/10"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        />
        <Card name="Arrumar casa"
              data="12/10"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        />
        <Card name="Arrumar casa"
              data="12/10"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        />
        <Card name="Arrumar casa"
              data="12/10"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        />
      </div>
    </div>
  );
}

export default SeeTasks;
