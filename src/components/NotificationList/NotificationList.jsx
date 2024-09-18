import React from "react";
import NotificationItem from "../NotificationItem/NotificationItem";
import { Grid } from "@mui/material";

const NotificationList = ({ markAsRead, notifications }) => {
  return (
    <Grid
      container
      wrap={true}
      direction="column"
      sx={{
        position: "fixed",
        top: 64,
        right: 0,
        width: "350px",
        overflowY: "auto",
        height: "calc(100vh - 64px)",
        padding: 2,
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
      }}
    >
      {notifications
        .filter((not) => !not?.isRead)
        .map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            markAsRead={markAsRead}
          />
        ))}
    </Grid>
  );
};

export default NotificationList;
