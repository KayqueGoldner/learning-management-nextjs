import { SharedNotificationSettings } from "@/components/SharedNotificationSettings";

const SettingsTeacherPage = () => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="Teacher Settings"
        subtitle="Manage your teacher notification settings"
      />
    </div>
  );
};

export default SettingsTeacherPage;
