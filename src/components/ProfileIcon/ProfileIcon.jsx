const ProfileIcon = ({ user }) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer relative"
    >
      <img
        className="w-full h-full object-cover rounded-full"
        src={user?.photoURL}
        alt={user?.displayName}
        onError={(e) => (e.target.src = "profile.png")}
      />
    </div>
  );
};

export default ProfileIcon;
