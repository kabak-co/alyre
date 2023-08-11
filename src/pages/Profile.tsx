import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface profileTypes extends GlobalChildren {
  profileImage: string;
  username: string;
};


const Profile = (props: profileTypes) => {
  return (
    <div>
      Profil
    </div>
  );
};

export default Profile;