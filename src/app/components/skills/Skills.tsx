

interface SkillsProps {
    language: 'en' | 'ur';
    data: {

        skills: string[];
    };
}
export default function Skills({ data, language }: SkillsProps) {
    return (
        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">
                {language === 'en' ? 'Skills' : 'مہارتیں'}
            </h2>
            <ul className="list-disc ml-4">
                {data.skills.map((skill, index) => (
                    <li key={index} className="mb-2">{skill}</li>
                ))}
            </ul>
        </section>
    );
}
