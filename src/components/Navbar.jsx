// components/Navbar.jsx
import { AppBar, Toolbar, Button } from "@mui/material";


export default function Navbar() {
return (
<AppBar position="fixed" sx={{ background: "transparent", boxShadow: "none", mt: 2 }}>
<Toolbar sx={{ justifyContent: "flex-end" }}>
{["Home", "Projects", "About", "Contact"].map((item) => (
<Button
key={item}
href={`#${item.toLowerCase()}`}
sx={{
color: "#aaa",
"&:hover": { color: "#0ff", textShadow: "0 0 10px #0ff" },
}}
>
{item}
</Button>
))}
</Toolbar>
</AppBar>
);
}