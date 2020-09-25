import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./StatsComp.css";

function StatsComp({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`HC__statscomp${active && "HC__stats--selected"}
    ${isRed && "HC__stats--red"}`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`HC__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        <Typography color="textSecondary" className="HC__total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatsComp;
