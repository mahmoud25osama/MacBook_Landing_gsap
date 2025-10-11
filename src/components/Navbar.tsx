import { navLinks } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <Image
                        src="/logo.svg"
                        alt="Apple logo"
                        width={40}
                        height={40}
                    />
                    <ul>
                        {navLinks.map(({ label }) => (
                            <li key={label}>
                                <Link href={label}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex-center gap-3">
                        <button>
                            <Image
                                src="/search.svg"
                                alt="Search"
                                width={40}
                                height={40}
                            />
                        </button>
                        <button>
                            <Image
                                src="/cart.svg"
                                alt="Cart"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
