import Image from "next/image";
import styles from "./page.module.css";
import Login from "./Login";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  console.log("session", session);
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
