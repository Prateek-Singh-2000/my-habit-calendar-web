import "./ProfilePage.css";

function ProfilePage() {
	// Hard code values for now
	const name: string = "John Doe";
	const email: string = "john.doe@gmail.com";
	const userPhotoUrl = "https://avatar.iran.liara.run/public/48";
	return (
		<div className="profile-page">
			<h1>Profile Page</h1>
			<div className="profile-information">
				<img src={userPhotoUrl} alt="Profile" className="profile-photo" />
				<h3 className="profile-name profile-element">{name}</h3>
				<p className="email-name profile-element">{email}</p>
			</div>
		</div>
	);
}

export default ProfilePage;
