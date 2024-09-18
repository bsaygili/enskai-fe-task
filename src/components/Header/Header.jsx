import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Snackbar,
  Alert,
} from "@mui/material";
import { NotificationsActive, Notifications } from "@mui/icons-material";
import { Box } from "@mui/system";
import NotificationList from "../NotificationList/NotificationList";
import { notifications as mockNotifications } from "../../assets/mock/notification";

const Header = () => {
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [notifications, setNotifications] = React.useState(mockNotifications);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
    const notification = notifications.find((notif) => notif.id === id);
    setSnackbarMessage(`Marked "${notification.typeFormal}" as read`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{ width: "100%" }}
        sx={{ backgroundColor: "#0A0916" }}
      >
        <Toolbar>
          <Box
            component="img"
            src="https://ensk.ai/static/c69a70736cb39de1896d57d88ad52ed4/02f45/primary_negative.webp"
            alt="App Logo"
            sx={{ height: 40, marginRight: 2 }}
          />

          <Typography
            variant="h6"
            color="#F8C104"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            EnskAi Platform
          </Typography>

          <IconButton
            color="inherit"
            onClick={() => setShowNotifications((pr) => !pr)}
          >
            <Badge badgeContent={unreadCount} color="error">
              {unreadCount ? <NotificationsActive /> : <Notifications />}
            </Badge>
          </IconButton>
        </Toolbar>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={1000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </AppBar>
      {showNotifications && (
        <NotificationList
          notifications={notifications}
          markAsRead={markAsRead}
        />
      )}
    </>
  );
};

export default Header;
