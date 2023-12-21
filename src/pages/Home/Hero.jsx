import Container from '../../components/Container';
import bannerImg from '../../assets/hero.png';

const Hero = () => {
    return (
        <div className=''>
            <Container>
                <div className='flex gap-10 flex-col-reverse sm:flex-row justify-between items-center'>
                    <div className='flex-1'>
                        <h2 className='text-2xl sm:text-4xl font-bold'>Effortless Task Management</h2>
                        <p className='my-4'>
                            Empower yourself with TaskFlow, where task management meets purposeful progress. Seamlessly organize your daily tasks, set ambitious goals, and embark on a journey of personal and professional growth.
                        </p>
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Let's Explore</button>
                    </div>
                    <div className='flex-1'>
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;