const Profiles = () => {
    return (
        <section className="my-8">
            <h2 className="text-2xl font-bold mb-4">Profiles</h2>
            <ul className="list-disc list-inside">
                <li>
                    <a href="https://www.linkedin.com/in/your-profile" className="text-blue-500 hover:underline">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/your-profile" className="text-blue-500 hover:underline">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/your-profile" className="text-blue-500 hover:underline">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="https://your-portfolio.com" className="text-blue-500 hover:underline">
                        Personal Portfolio
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Profiles;