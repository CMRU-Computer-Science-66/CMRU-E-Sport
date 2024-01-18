import Link from 'next/link';

const TestNav = () => {
    return (
        <nav className="fixed left-0 top-0 h-full bg-gray-800 text-white p-4">
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                {/* เพิ่มเมนูเพิ่มเติมตามต้องการ */}
            </ul>
        </nav>
    );
};

export default TestNav;
