import Container from "../../components/Container";

const Beneficiary = () => {
    return (
        <section className="bg-gray-100 py-16">
            <Container>
                <h2 className="text-3xl font-bold mb-8 text-center">Who Can Benefit?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {beneficiaryItems.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

const beneficiaryItems = [
    {
        title: 'Developers',
        description:
            'Effortlessly organize coding sprints, track project timelines, and collaborate seamlessly with your development team. Our intuitive interface is designed to enhance the productivity of developers, whether you\'re working on individual projects or as part of a larger team.',
    },
    {
        title: 'Corporate Professionals',
        description:
            'Streamline your daily tasks, meetings, and project workflows. Our task management platform is tailored to meet the needs of corporate professionals, helping you stay organized, focused, and efficient in your work.',
    },
    {
        title: 'Bankers and Financial Professionals',
        description:
            'Manage financial projects, deadlines, and team collaboration with ease. Our task management tools are crafted to suit the unique requirements of bankers and financial professionals, ensuring a structured and organized approach to your daily tasks.',
    },
];

export default Beneficiary;
