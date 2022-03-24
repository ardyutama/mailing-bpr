import { MdEmail, MdOutgoingMail } from "react-icons/md";
import {FaClipboardCheck} from "react-icons/fa"
const SidebarConfig = [
    // {
    //     title: "Dashboard",
    //     path : "",
    //     icon: <DraftsIcon />,
    // },
    {
        title: "Nota Masuk",
        path: "/dashboard/inbox",
        icon: <MdEmail size={24} />,
    },
    {
        title: "Nota Keluar",
        path: "/dashboard/outward",
        icon: <MdOutgoingMail size={24} />,
    },
    {
        title: "Approve",
        path: "/dashboard/approve",
        icon: <FaClipboardCheck size={24} />,
    },
];

export default SidebarConfig;