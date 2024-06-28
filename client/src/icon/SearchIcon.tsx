type TypeData = {
    width?: number;
    height?: number;
    fillColor?: string,
    className?: string,
}

export default function SearchIcon({ width = 24, height = 24, fillColor = 'white', className = "cursor-pointer" }: TypeData) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 16 16" width={width} height={height} className={className}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg >
    )
};