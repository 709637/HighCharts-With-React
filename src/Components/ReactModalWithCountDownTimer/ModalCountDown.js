import React, { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

const ComingSoonModal = (props) => {

	const inaugurationDate = new Date('Jun 23, 2020 21:25:00');

	let cuurentDate = new Date();

	let diffinms = inaugurationDate.getTime() - cuurentDate.getTime();

	const [days, setDay] = useState(Math.floor(diffinms / (1000 * 60 * 60 * 24)));
	diffinms = diffinms - days * (1000 * 60 * 60 * 24);
	const [hours, sethours] = useState(Math.floor(diffinms / (1000 * 60 * 60)));
	diffinms = diffinms - hours * (1000 * 60 * 60);
	const [minutes, setminutes] = useState(Math.floor(diffinms / (1000 * 60)));
	diffinms = diffinms - minutes * (1000 * 60);
	const [seconds, setseconds] = useState(Math.floor(diffinms / 1000));

	console.log("Time Differnece", days, hours, minutes, seconds);

	// setInterval(()=>{
	// 	setseconds(seconds=>seconds-1);
	// },1000)

	useEffect(() => {
		const interval = setInterval(() => {
			setseconds(seconds => {
				console.log(seconds);
				if (seconds === 0) {
					setminutes(minutes => {
						if (minutes === 0 && seconds === 0) {
							sethours(hours => {
								if (hours === 0 && minutes === 0 && seconds === 0) {
									setDay(days => days - 1)
									sethours(hours => 23);
									setminutes(minutes => 59);
									setseconds(seconds => 59);
								}
								return hours - 1;
							})
							setminutes(minutes => 59);
							setseconds(seconds => 59);
						}
						return minutes - 1
					});
					setseconds(seconds => 59);
				}
				return seconds - 1;
			})
		}, 1000);
		return () => clearInterval(interval);
	}, []);




	const [show, setShow] = useState(true);



	const handleClose = () => {
		setShow(false);
		props.history.goBack();
	}
	const handleShow = () => {
		setShow(true);
	}

	return (
		<>
			<Modal show={show} onHide={handleClose} animation={false}
				dialogClassName="modal90w">

				<Modal.Header closeButton>
					<Modal.Title>CountDownTimer</Modal.Title>
				</Modal.Header>

				<Modal.Body className="noPadding"><div id="Modalwrapper" className="Modalwrapper Modallayout">
					<div className="BodyPart">
						<div id="Modalwrapper" className="Modalwrapper Modallayout">
							<main id="MainC" className="MainC paddingzero Modallayout">
								<div className="Contents">
									<div className="BoxLayout">
										<div id="CountDown" className="columns CountDown">
											<div className="CountDownBox">
												<div id="days" className="CountDownTimer"><p>Days</p><h1>{days}</h1></div>
											</div>
											<div className="CountDownBox">
												<div id="hours" className="CountDownTimer"><p>hrs</p><h1>{hours}</h1></div>
											</div>
											<div className="CountDownBox">
												<div id="minutes" className="CountDownTimer"><p>Min</p><h1>{minutes}</h1></div>
											</div>
											<div className="CountDownBox">
												<div id="seconds" className="CountDownTimer"><p>Sec</p><h1>{seconds}</h1></div>
											</div>
										</div>
										<div className="columns ModalContents">
											Modal Content Here
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>

				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Close
                    </Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}


export default withRouter(ComingSoonModal);
