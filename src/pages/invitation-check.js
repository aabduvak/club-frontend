import React, {useState, useEffect} from "react";

const CheckInvitation = () => {
	const [isRegistered, setIsRegistered] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const search = window.location.search;
	const params = new URLSearchParams(search);
	const ticket = params.get('ticket');
	
	const okIcon = `${process.env.PUBLIC_URL}/okey.svg`;
    const errorIcon = `${process.env.PUBLIC_URL}/error.svg`;
	
	const checkRegistration = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`https://technovasyon.pythonanywhere.com/api/v1/registrations/${ticket}/`);
			if (!response.ok) {
				throw new Error(`Error checking registration: ${response.statusText}`);
			}
			const data = await response.json();
			setData(data);

			if (data.id == ticket) {
				setIsRegistered(true);
			} else {
				setIsRegistered(false);
			}
			
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};
	
	useEffect(() => {
		checkRegistration();
	}, []);
	
	if (isLoading) {
		return <p>Loading...</p>;
	}
	
	if (error) {
		return (
			<React.Fragment>
				<div style={{ backgroundColor: 'red', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
					<img src={errorIcon} alt="Registration Error" style={{ width: 80, height: 80 }} />
					<h1 style={{ color: 'white' }} >Kayıt Bulunamadı!</h1>
				</div>
			</React.Fragment>
		)
	}
	
	return (
        <React.Fragment>
			<div style={{ backgroundColor: isRegistered ? '#4CE949' : '#C42021', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
				{isRegistered ? (
					<React.Fragment>
						<img src={okIcon} alt="Registration Successful" style={{ width: 80, height: 80 }} />
						<h1 style={{ color: 'white' }} >Hoş Geldiniz!</h1>
						<h2 style={{ color: 'white', fontWeight: 'bold' }} >{data.name}</h2>
					</React.Fragment>
				) : (
					<React.Fragment>
						<img src={errorIcon} alt="Registration Error" style={{ width: 80, height: 80 }} />
						<h1 style={{ color: 'white' }} >Kayıt Bulunmadı!</h1>
					</React.Fragment>
				)}
			</div>
        </React.Fragment>
    );
};

export default CheckInvitation;