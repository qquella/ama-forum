import Image from "next/image";
import Link from "next/link";
import Logo from './unicorn.png'

const Navbar = () => {
  return ( 
    <nav>
      <Image 
      src={Logo}
      alt="AMA Logo"
      width={70}
      quality={100}
      placeholder="blur"
      />
      <h1>
        AMA - Stackunderflow
      </h1>
      <Link href="/">Home Page</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
   );
}
 
export default Navbar;