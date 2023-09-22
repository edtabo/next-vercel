import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./NavBar.module.css";

const menu = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Nosotros",
    url: "/nosotros",
  },
  {
    title: "Contacto",
    url: "/contacto",
  },
];

const NavBar = () => {
  const current = useRouter();
  
  return (
    <nav className={styles.wNav}>
      {menu.map((item) => (
        <Link key={item.title} href={item.url}>
          <span className={item.url === current.pathname ? styles.current : '' }>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
