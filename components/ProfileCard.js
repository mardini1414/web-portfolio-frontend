import Profile from '../img/profile.jpg';
import Image from 'next/image';

function ProfileCard() {
  return (
    <div className="relative max-w-md p-4 text-center lg:p-0 bottom-12 lg:-bottom-10 lg:-mr-4 lg:text-left">
      <div className="overflow-hidden bg-white rounded-md shadow-md">
        <header className="flex flex-col items-center gap-4 p-4 border-b border-gray-400 lg:flex-row bg-gray-50">
          <Image
            src={Profile}
            alt="profile"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h2 className="font-bold text-gray-800">Mardini</h2>
        </header>
        <div className="p-4">
          <p className="font-normal text-gray-400">
            I&apos;m Mardini born in Pandeglang Banten on June 6, 1997, have
            honest personality, easy to adapt and happy to learn new things and
            can team work. Love things about programming and everyday life I am
            learning to make a website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
