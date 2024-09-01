import { NextPage } from "next";
import dynamic from "next/dynamic";
const AppWrapper = dynamic(() => import("@/components/App"), { ssr: false });

const Home: NextPage = () => {
    return (<AppWrapper/>);       
}

export default Home;