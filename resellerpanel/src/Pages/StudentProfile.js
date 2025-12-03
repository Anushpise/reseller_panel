import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useParams } from "react-router-dom";

const dummyData = {
  1: {
    name: "Riya Sharma",
    email: "riya@example.com",
    orders: [
      { id: "ORD123", course: "Full Stack Course", amount: "₹2999" },
      { id: "ORD132", course: "Digital Marketing", amount: "₹1999" },
    ],
    enrolled: [
      { course: "Full Stack", status: "Active" },
      { course: "Digital Marketing", status: "Completed" },
    ],
  },
  2: {
    name: "Aditya Raj",
    email: "aditya@example.com",
    orders: [{ id: "ORD187", course: "UI/UX Course", amount: "₹1499" }],
    enrolled: [{ course: "UI/UX", status: "Active" }],
  },
};

export default function StudentProfile() {
  const { id } = useParams();
  const student = dummyData[id];

  if (!student) return <Typography>No Student Found</Typography>;

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Student Profile
      </Typography>

      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ width: 60, height: 60, fontSize: 28 }}>
              {student.name[0]}
            </Avatar>

            <Box>
              <Typography variant="h6">{student.name}</Typography>
              <Typography color="gray">{student.email}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={1}>
            Orders
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <List>
            {student.orders.map((o) => (
              <ListItem key={o.id}>
                <ListItemText
                  primary={o.course}
                  secondary={`Order ID: ${o.id} — Amount: ${o.amount}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={1}>
            Enrolled Courses
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <List>
            {student.enrolled.map((c, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={c.course}
                  secondary={`Status: ${c.status}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

    </Box>
  );
}
