import React, { useEffect, useState } from 'react'
import Character from './components/Character'
import LetterFields, { WordType } from './components/LetterFields'
import words from './words'
const CHARACTERS = [
	'A',
	'B',
	'C',
	'Č',
	'Ć',
	'D',
	'Đ',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'R',
	'S',
	'Š',
	'T',
	'U',
	'V',
	'Z',
	'Ž',
]
function App() {
	const goalWord = words
	console.log(goalWord)

	const [attempt, setAttempt] = useState(1)
	const [guess1, setGuess1] = useState<string>('')
	const [guess2, setGuess2] = useState<string>('')
	const [guess3, setGuess3] = useState<string>('')
	const [guess4, setGuess4] = useState<string>('')
	const [guess5, setGuess5] = useState<string>('')

	const keyDownHandler = (e: React.MouseEvent<HTMLElement>) => {
		console.log(e.currentTarget.id)
		const key = e.currentTarget.id
		switch (attempt) {
			case 1:
				if (key === 'backspace') {
					setGuess1(lastState => lastState.slice(0, -1))
					break
				}
				if (guess1.length < 5) setGuess1(lastState => lastState + key)
				break
			case 2:
				if (key === 'backspace') {
					setGuess2(lastState => lastState.slice(0, -1))
					break
				}
				if (guess2.length < 5) setGuess2(lastState => lastState + key)
				break
			case 3:
				if (key === 'backspace') {
					setGuess3(lastState => lastState.slice(0, -1))
					break
				}
				if (guess3.length < 5) setGuess3(lastState => lastState + key)
				break
			case 4:
				if (key === 'backspace') {
					setGuess4(lastState => lastState.slice(0, -1))
					break
				}
				if (guess4.length < 5) setGuess4(lastState => lastState + key)
				break
			case 5:
				if (key === 'backspace') {
					setGuess5(lastState => lastState.slice(0, -1))
					break
				}
				if (guess5.length < 5) setGuess5(lastState => lastState + key)
				break
		}
	}
	return (
		<div className='bg-gray-700 h-screen flex flex-col items-center justify-center text-gray-300'>
			<LetterFields
				word={guess1}
				attempt={attempt}
				goalWord={goalWord}
				row={1}
			/>
			<LetterFields
				word={guess2}
				attempt={attempt}
				goalWord={goalWord}
				row={2}
			/>
			<LetterFields
				word={guess3}
				attempt={attempt}
				goalWord={goalWord}
				row={3}
			/>
			<LetterFields
				word={guess4}
				attempt={attempt}
				goalWord={goalWord}
				row={4}
			/>
			<LetterFields
				word={guess5}
				attempt={attempt}
				goalWord={goalWord}
				row={5}
			/>

			<button
				className='mt-2 text-lg bg-amber-300 text-black rounded p-1'
				onClick={() => {
					setAttempt(attempt + 1)
				}}
			>
				Guess
			</button>
			<div className='md:w-1/3  mt-2'>
				{CHARACTERS.map(c => (
					<Character id={c} key={c} onClick={keyDownHandler}>
						{c}
					</Character>
				))}
				<Character id='backspace' onClick={keyDownHandler}>
					{'<-'}
				</Character>
				<Character id='enter' onClick={keyDownHandler}>
					{'->'}
				</Character>
			</div>
		</div>
	)
}

export default App
