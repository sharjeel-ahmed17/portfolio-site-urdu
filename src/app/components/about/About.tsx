interface IAbout {
    title: string,
    description: string,
    about: string,

}

interface AboutProps {

    data: IAbout
}

export default function About({ data }: AboutProps) {
    return (
        <section className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-8">{data.description}</p>
            <p className="text-lg">{data.about}</p>
        </section>
    )

}