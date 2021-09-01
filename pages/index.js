import { Box } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Uriel Arriaga | Programador FullStack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Programador fullstack javaScript con framerwoks como react,angular,vue y de la parte del back
        con nestJs loopBack"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Box className="content">
        <p>Welcome Uriel Website</p>
        <p>Building</p>
        <button onClick={() => router.push("portafolio")}>
          Go to projects
        </button>
      </Box>
    </Layout>
  );
}

const P = styled.p`
  color: red;
`;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80");

  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    p {
      color: #ffff;
      font-size: 30px;
    }

    button {
      border: none;
      height: 40px;
      background-color: #000;
      color: #ffff;
      cursor: pointer;
    }
  }
`;
