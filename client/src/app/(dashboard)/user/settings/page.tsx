import { SharedNotificationSettings } from "@/components/SharedNotificationSettings";

const SettingsUserPage = () => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="User Settings"
        subtitle="Manage your user notification settings"
      />
    </div>
  );
};

export default SettingsUserPage;
