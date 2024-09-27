type NavbarProps = {
    language: 'en' | 'ur';
    toggleLanguage: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                    {language === 'en' ? 'My Portfolio' : 'میرا پورٹ فولیو'}
                </h2>
                <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                    {language === 'en' ? 'Switch to Urdu' : 'انگریزی میں سوئچ کریں'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
