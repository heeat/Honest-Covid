import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./StatsComp.css";

function StatsComp({ title, cases, total }) {
  return (
    <div className="HC__statscomp">
      <Card className="HC__statbox">
        <CardContent>
          <Typography color="textSecondary" className="HC_title">
            {title}
          </Typography>
          <h2 className="HC__cases">{cases}</h2>
          <Typography color="textSecondary" className="HC__total">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default StatsComp;
