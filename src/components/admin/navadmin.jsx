// components/Navadmin.js
import Link from 'next/link';

const pages = [
    { path: './dashboard', label: 'Dashboard' },
    { path: './upscore', label: 'UpdateScore' },
    { path: './recruiting', label: 'Recruiting' },
];

export default function Navadmin() {
    return (
        <nav className="fixed left-0 top-0 h-full w-40 bg-gray-800 text-white p-4">
            <div className='mt-20'>
                <ul>
                    {pages.map((page, index) => (
                        <li key={index} className="mb-4">
                            <Link href={page.path}>
                                <div className="text-lg cursor-pointer hover:text-yellow-500 transition-all duration-300 ease-in-out">
                                    {page.label}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};


