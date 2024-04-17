import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="mt-5">
      <div className="flex place-content-center px-5">
        <Link href="/" className="flex justify-between items-center gap-x-2">
          <Image src="/token.svg" alt="pullix_logo" width={45} height={45} />
          <h1 className="font-bold text-3xl">Dogecoin20</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
