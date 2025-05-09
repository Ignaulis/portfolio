'use client';

import { contacts } from '@/app/data/contacts';
import { useState } from 'react';

export default function NavContactsDrop() {
    const [hovered, setHovered] = useState(null);
    console.log(hovered);

    return (
        <div className='flex w-full justify-center gap-5'>
            {contacts.map((e, i) => (
                <a
                    className={`text-white flex items-center mt-4 py-2 px-2 gap-1.5 text-xl cursor-pointer transition-opacity duration-300 ${
                        hovered !== null && hovered !== i
                            ? 'opacity-50'
                            : 'opacity-100'
                    }`}
                    key={i}
                    href={e.href}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <e.icon />
                    {/* {e.text} */}
                </a>
            ))}
        </div>
    );
}
