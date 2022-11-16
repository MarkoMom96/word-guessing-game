import React, { useEffect, useState } from 'react'

export type WordType = [string, string, string, string, string]
interface LetterFieldsProps {
	word: string
	goalWord: string
	attempt: number
	row: number
}
const Game: React.FC<LetterFieldsProps> = ({
	word,
	goalWord,
	attempt,
	row,
}) => {
	const chars = word.toUpperCase().split('')
	const [currentWord, setCurrentWord] = useState<string>('')

	const wordArray = word.split('')
	for (let index = 0; index < wordArray.length; index++) {
		currentWord[index] == wordArray[index]
	}

	const lettersInWord = wordArray.filter(l => goalWord.includes(l))
	console.log('Letters in word', lettersInWord)

	const guessedLetters: string[] = []
	const goalWordArray = goalWord.split('')
	for (let index = 0; index < lettersInWord.length; index++) {
		if (lettersInWord[index] === goalWordArray[index]) {
			guessedLetters.push(lettersInWord[index])
			console.log('Guessed letters', guessedLetters)
		}
	}

	return (
		<div className='flex gap-1 text-2xl my-1'>
			<div
				className={` w-9 h-9 flex justify-center items-center ${
					attempt > row && wordArray[0] === goalWordArray[0]
						? 'bg-green-700 animate-letterRender'
						: attempt > row && lettersInWord.includes(word.charAt(0))
						? 'bg-yellow-700 animate-letterRender'
						: 'bg-slate-800'
				}`}
			>
				<div className={`${word.charAt(0) ? 'animate-letterRender' : null}`}>
					{word.charAt(0)}
				</div>
			</div>
			<div
				className={` w-9 h-9 flex justify-center items-center ${
					attempt > row && wordArray[1] === goalWordArray[1]
						? 'bg-green-700 animate-letterRender'
						: attempt > row && lettersInWord.includes(word.charAt(1))
						? 'bg-yellow-700 animate-letterRender'
						: 'bg-slate-800'
				}`}
			>
				<div className={`${word.charAt(1) ? 'animate-letterRender' : null}`}>
					{word.charAt(1)}
				</div>
			</div>
			<div
				className={` w-9 h-9 flex justify-center items-center ${
					attempt > row && wordArray[2] === goalWordArray[2]
						? 'bg-green-700 animate-letterRender'
						: attempt > row && lettersInWord.includes(word.charAt(2))
						? 'bg-yellow-700 animate-letterRender'
						: 'bg-slate-800'
				}`}
			>
				<div className={`${word.charAt(2) ? 'animate-letterRender' : null}`}>
					{word.charAt(2)}
				</div>
			</div>
			<div
				className={` w-9 h-9 flex justify-center items-center ${
					attempt > row && wordArray[3] === goalWordArray[3]
						? 'bg-green-700 animate-letterRender'
						: attempt > row && lettersInWord.includes(word.charAt(3))
						? 'bg-yellow-700 animate-letterRender'
						: 'bg-slate-800'
				}`}
			>
				<div className={`${word.charAt(3) ? 'animate-letterRender' : null}`}>
					{word.charAt(3)}
				</div>
			</div>
			<div
				className={` w-9 h-9 flex justify-center items-center ${
					attempt > row && wordArray[4] === goalWordArray[4]
						? 'bg-green-700 animate-letterRender'
						: attempt > row && lettersInWord.includes(word.charAt(4))
						? 'bg-yellow-700 animate-letterRender'
						: 'bg-slate-800'
				}`}
			>
				<div className={`${word.charAt(4) ? 'animate-letterRender' : null}`}>
					{word.charAt(4)}
				</div>
			</div>
		</div>
	)
}
export default Game
