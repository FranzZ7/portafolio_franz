import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'; 
import data from './Data/card.json';

const Icons = () => {
  const getIconByTitle = (red) => {
    switch (red) {
      case 'Facebook':
        return <BsFacebook size={30}/>;
      case 'Instagram':
        return <BsInstagram size={30}/>;
      case 'LinkedIn':
        return <BsLinkedin size={30} />;
      case 'GitHub':
        return <BsGithub  size={30}/>;
      default:
        return null;
    }
  };

  return (
    <div>
      {data.social.map((item, index) => (
        <a key={index} href={item.url}>
            <button>
            {getIconByTitle(item.red)}
            </button>
        </a>
      ))}
    </div>
  );
};

export default Icons;
