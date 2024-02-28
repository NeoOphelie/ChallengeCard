import { useState } from 'react'
import CardComponent from './CardComponent'


interface Props {
    idPlayer : number
}
function HandComponent ({idPlayer}:Props) {
  const [hand, setHand] = useState<Deck>()
  const [reserve, setReserve] = useState<Deck>()
  const [firstPlay, setFirstPlay] = useState<boolean>(true)

  function playCard(idCard) {
    if(firstPlay){
        setReserve({...reserve, })
        setFirstPlay(false)
    }else {

    }
  }
  return (
    <>
        <CardComponent />
    </>
  )
}

export default HandComponent
