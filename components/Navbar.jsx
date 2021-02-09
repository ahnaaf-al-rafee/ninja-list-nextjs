import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={78} />
      </div>
      {/* using the Image component is very useful because it's automatically responsive and only loads when is viewed */}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listings</a>
      </Link>
    </nav>
  );
};

export default Navbar;
