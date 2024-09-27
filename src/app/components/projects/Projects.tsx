interface Projects {
    title: string;
    description: string;

}

interface ProjectsProps {
    language: 'en' | 'ur';
    data: {
        projects: Projects[];
    };
}


export default function Projects({ language, data }: ProjectsProps) {
    return (
        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">{language === 'en' ? 'Projects' : 'پروجیکٹس'}</h2>
            <div className="space-y-4">
                {data.projects.map((project, index) => (
                    <div key={index} className="bg-white p-4 shadow rounded">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}