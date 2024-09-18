import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookmark,
  faEllipsisH,
  faEnvelope,
  faFeatherAlt,
  faHashtag,
  faHome,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

// eslint-disable-next-line react/prop-types
const NavItem = ({ icon, text }) => (
  <div className="flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200">
    <FontAwesomeIcon icon={icon} className="text-2xl mr-4" />
    <span className="text-xl hidden xl:inline">{text}</span>
  </div>
);

export function Sidebar() {
  return (
    <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-twitter-blue  text-3xl m-4"
      />
      <nav>
        <NavItem icon={faHome} text={"Início"} />
        <NavItem icon={faHashtag} text={"Explorar"} />
        <NavItem icon={faBell} text={"Notificações"} />
        <NavItem icon={faEnvelope} text={"Mensagens"} />
        <NavItem icon={faBookmark} text={"Favoritos"} />
        <NavItem icon={faUserFriends} text={"Comunidade"} />
        <NavItem icon={faTwitter} text={"Premium"} />
        <NavItem icon={faUser} text={"Perfil"} />
        <NavItem icon={faEllipsisH} text={"Mais"} />
      </nav>
      <button className="bg-twitter-blue text-white rounded-full font-bold px-4 py-3 mt-4 w-full">
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faFeatherAlt}
            className="text-white-400  text-3xl m-4 inline xl:hidden"
          />
          <span className="hidden xl:inline">Twitter</span>
        </div>
      </button>
    </div>
  );
}
