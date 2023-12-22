import { Helmet } from "react-helmet-async";
import Beneficiary from "./Beneficiary";
import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Task Flow</title>
            </Helmet>
            <Hero />
            <Beneficiary />
        </>
    );
};

export default Home;