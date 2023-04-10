import useJsonFetch from "../hooks/useJsonFetch";

const JsonFetch = ({ item, url, opts }) => {

	const [data, isLoading, hasError] = useJsonFetch(url, opts);

	return (
		<div className={'wrapper-'+ url}>
			<h5 className="header">{item}</h5>
			<p className='data'>{'data: ' + JSON.stringify(data)}</p>
			<p className='data'>{'isLoading: ' + JSON.stringify(isLoading)}</p>
			<p className='data'>{'hasError: ' + JSON.stringify(hasError)}</p>
		</div>
	)
}

export default JsonFetch;