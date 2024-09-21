type TypeData = {
	width?: number;
	height?: number;
	fillColor?: string,
	className?: string,
}

export default function ChevronIcon({width = 24, height = 24, fillColor = 'white', className = "cursor-pointer"}: TypeData) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" width={width} height={height} className={className}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<polyline points="6 9 12 15 18 9" />
		</svg >
	)
}


