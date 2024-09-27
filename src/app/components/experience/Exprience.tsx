interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
}

interface ExperienceProps {
    language: 'en' | 'ur';
    data: {
        experience: Experience[];
    };
}


export default function Experience({ language, data }: ExperienceProps) {
    return (
        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">{language === 'en' ? 'Experience' : 'تجربہ'}</h2>
            <div className="space-y-4">
                {data.experience.map((job, index) => (
                    <div key={index} className="bg-white p-4 shadow rounded">
                        <h3 className="text-2xl font-bold">{job.role} - {job.company}</h3>
                        <p>{job.period}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}