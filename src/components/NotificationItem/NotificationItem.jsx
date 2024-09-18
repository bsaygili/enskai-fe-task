import React from "react";
import { Grid, Typography, Button, Alert, Box } from "@mui/material";
import { NOTIFICATION_TYPES } from "../../assets/constants";

const NotificationItem = ({ notification, markAsRead }) => {
  const { type, isRead } = notification;

  return (
    <Grid
      container
      sx={{
        maxWidth: 300,
        // margin: "10px auto",
        borderRadius: 8,
        backgroundColor: isRead ? "#f0f0f0" : "#fff",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
      spacing={-1}
      direction="column"
    >
      <Box>
        <Alert
          severity={
            type === NOTIFICATION_TYPES.TEAMREQUEST
              ? "error"
              : type === NOTIFICATION_TYPES.PROPOSAL
              ? "warning"
              : "info"
          }
          sx={{
            borderRadius: 4,
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {type === NOTIFICATION_TYPES.TEAMREQUEST && (
            <>
              <Typography variant="h6">{notification.typeFormal}</Typography>
              <Typography variant="body2">{notification.name}</Typography>
              <Typography variant="body2">{notification.country}</Typography>
              <Typography variant="body2">
                {notification.position} - {notification.financials}
              </Typography>
            </>
          )}
          {type === NOTIFICATION_TYPES.PLAYERNOTIFICATION && (
            <>
              <Typography variant="h6">{notification.typeFormal}</Typography>
              <Typography variant="body2">
                Player: {notification.name}
              </Typography>
              <Typography variant="body2">Age: {notification.age}</Typography>
              <Typography variant="body2">
                Current Team: {notification.currentTeam}
              </Typography>
            </>
          )}
          {type === NOTIFICATION_TYPES.PROPOSAL && (
            <>
              <Typography variant="h6">{notification.typeFormal}</Typography>
              <Typography variant="body2">
                Player: {notification.sentPlayer}
              </Typography>
              <Typography variant="body2">
                From: {notification.sender}
              </Typography>
              <Typography variant="body2">
                Salary: {notification.salary}
              </Typography>
            </>
          )}
          <div>
            {!isRead && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => markAsRead(notification.id)}
              >
                Mark as Read
              </Button>
            )}
          </div>
        </Alert>
      </Box>
    </Grid>
  );
};

export default NotificationItem;
