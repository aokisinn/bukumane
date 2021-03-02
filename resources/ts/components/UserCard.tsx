import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { AuthUserType } from "../types/AuthUserType";

const UserCard: React.FC<{
    user: AuthUserType;
}> = ({ user }) => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    userId : {user.loginId}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;
