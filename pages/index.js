import {useState} from 'react';
import axios from 'axios';
export default function Home() {
	const [weight, setWeight] = useState();
	const [height, setHeight] = useState();
	const [btnText, setBtnText] = useState('Calculate');
	const [bmi, setBmi] = useState(null);
	/**
	 *
	 *
	 * Fetch BMI
	 */
	const fetchBMI = async e => {
		e.preventDefault();
		try {
			setBtnText('Calculating...');
			const response = await axios.get(`/api/bmi`, {
				params: {
					weight,
					height
				}
			});
			setBmi(response.data.bmi);
		} catch (err) {
			console.log(err);
		}
		setBtnText('Calculate');
	};
	return (
		<div>
      <div className='content'>
			<h2 className=" headings ">
				BMI <span className="text-danger">Calculator</span> App
			</h2>
			<h3>
				Calculate your BMI using weight and height
			</h3>
			<div>
				<form>
					<input
						autoFocus={true}
						placeholder="Enter your weight (in kgs)..."
						value={weight}
						onChange={e => setWeight(e.target.value)}
					/>
					<input
						placeholder="Enter your height (in meters)..."
						value={height}
						onChange={e => setHeight(e.target.value)}
					/>
					<button
						onClick={fetchBMI}
					>
						{btnText}
					</button>
				</form>
				{bmi && (
					<div className="result">
						<p>{`Your Body Mass Index: ${bmi}`}</p>
					</div>
				)}
			</div>
			
      </div>
      
		</div>
    
	);
}