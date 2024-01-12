'use client'

import { useContext } from 'react'
import GameContext from '@/contexts/GameContext'
import Modal from '../shared/Modal'
import { PlayerType } from 'core'
import { IconCircle, IconX } from '@tabler/icons-react'
import Button from '../shared/Button'

export default function Result() {
    const { result, restart, clear } = useContext(GameContext)
    
    return (
        <Modal visible={result.finished}>
            {result.tied ? (
                <span className="uppercase font-bold text-light-500 text-xl mb-1 md:text-5xl md:mb-5">
                    Terminou empatado
                </span>
            ) : (
                <>
                    <span className="uppercase font-bold text-light-500 md:text-xl pb-4">
                        Jogador {result.xWins ? PlayerType.X : PlayerType.O} ganhou!
                    </span>

                    <div
                        className={`flex items-center gap-5 ${
                            result.xWins ? 'text-primary-500' : 'text-secondary-500'
                        }`}
                    >
                        {result.xWins ? (
                            <IconX size={65} stroke={6} />
                        ) : (
                            <IconCircle size={65} stroke={6} />
                        )}
                        
                        <span className="uppercase text-xl md:text-6xl font-bold">ganhou a rodada</span>
                    </div>
                </>
            )}
            
            <div className="flex gap-5 pt-3">
                <Button onClick={clear}>
                    <div className="font-bold uppercase text-dark-400 md:text-xl px-1 md:px-4 md:py-2">Zerar</div>
                </Button>

                <Button color="secondary" onClick={restart}>
                    <div className="font-bold uppercase text-dark-400 md:text-xl md:px-4 md:py-2">
                        Próxima Rodada
                    </div>
                </Button>
            </div>
        </Modal>
    )
}