import Profile from '../img/profile.jpg';
import Image from 'next/image';

function ProfileCard() {
  return (
    <div className="relative z-10 max-w-lg p-4 text-center md:p-0 bottom-12 md:-bottom-10 md:-mr-4 md:text-left">
      <div className="bg-white rounded-md shadow-md">
        <header className="flex flex-col items-center gap-4 p-4 border-b border-gray-400 md:flex-row">
          <Image
            src={Profile}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h2 className="font-bold text-black">Mardini</h2>
        </header>
        <div className="p-4">
          <p className="font-normal text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            omnis voluptatem ut quas quae consequatur modi a voluptate hic! Sint
            eligendi eum quisquam delectus exercitationem cumque, rem maxime hic
            aliquam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
