import React from 'react'
interface CharacterProps {
	children: React.ReactNode
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
	id: string
}
const Character: React.FC<CharacterProps> = ({ children, onClick, id }) => {
	return (
		<button
			id={id}
			onClick={onClick!.bind(this)}
			className='text-xs border-2 border-gray-400 rounded m-1 aspect-square w-6 md:w-9 md:text-lg hover:bg-sky-400 transition-colors duration-150'
		>
			{children}
		</button>
	)
}
export default Character
