import { NextPage } from "next";
import dynamic from "next/dynamic";
// const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });
const AppWrapper = dynamic(() => import("@/components/App"), { ssr: false });

const Home: NextPage = () => <AppWrapper />;

export default Home;