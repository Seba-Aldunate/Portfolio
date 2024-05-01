import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/sebastian-aldunate-315077210",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/Seba-Aldunate",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={25} />
        </>
      ),
      href: "/contact",
    },
    {
      id: 4,
      child: (
        <>
          CV <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/CV-Sebastian-Aldunate.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[55%] left-0 fixed text-sm ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-11 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#1f103d] " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
