import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface settingsTypes extends GlobalChildren {
  settingsImage: string;
  username: string;
};
const Settings = (props: settingsTypes) => {
  return (
    <div>
      Profil
    </div>
  );
};

export default Settings;