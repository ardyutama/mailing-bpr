import { Box } from "@mui/material";

export default function ShowDisposisi(props) {
    const {dataFetch} = props;
    return (
        dataFetch.disposition_mails.map((list, i) => (
            <Box>
                <h4>
                    {list.creators.first_name} {list.creators.last_name}
                </h4>
                <h5>
                    {list.creators.roles.roles_name}{" "}
                    {list.creators.divisions.divisions_name}
                </h5>
                <p>{list.comment}</p>
            </Box>
        ))
    );
}