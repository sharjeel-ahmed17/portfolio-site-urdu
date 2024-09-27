interface IContact {
    name: string,
    email: string,
    message: string,
    submit: string,
}

interface ContactProps {
    language: 'en' | 'ur';
    data: {
        contactForm: IContact;
    };
}



export default function Contact({ language, data }: ContactProps) {
    return (
        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">{language === 'en' ? 'Contact Me' : 'مجھ سے رابطہ کریں'}</h2>
            <form className="space-y-4">
                <div>
                    <label className="block mb-2" htmlFor="name">{data.contactForm.name}</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded"
                        placeholder={data.contactForm.name}
                    />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="email">{data.contactForm.email}</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded"
                        placeholder={data.contactForm.email}
                    />
                </div>
                <div>
                    <label className="block mb-2" htmlFor="message">{data.contactForm.message}</label>
                    <textarea
                        id="message"
                        className="w-full px-4 py-2 border rounded"
                        placeholder={data.contactForm.message}
                        rows={4}
                    ></textarea>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    {data.contactForm.submit}
                </button>
            </form>
        </section>

    )
}