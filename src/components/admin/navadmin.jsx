// components/Navadmin.js
import Link from 'next/link';

const pages = [
  { path: './dashboard', label: 'แดชบอร์ด' },
  { path: './upscore', label: 'อัปเดตคะแนน' },
  { path: './recruiting', label: 'รับสมัคร' },
];

export default function Navadmin() {
  return (
    <nav className='fixed left-0 top-0 h-full w-40 bg-gray-800 p-4 text-white'>
      <div className='mt-20'>
        <ul>
          {pages.map((page, index) => (
            <li key={index} className='mb-4'>
              <Link href={page.path}>
                <div className='cursor-pointer text-lg transition-all duration-300 ease-in-out hover:text-yellow-500'>
                  {page.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
