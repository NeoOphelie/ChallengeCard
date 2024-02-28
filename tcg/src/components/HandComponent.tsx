import { useState } from 'react'
import { deck } from '../react-app-env'}

interface Props {
    idPlayer : number
}
function HandComponent ({idPlayer}:Props) {
  const [hand, setHand] = useState<deck>([{id : "1"}])
  const [reserve, setReserve] = useState<deck>()
  const [firstPlay, setFirstPlay] = useState<boolean>(true)

  function playCard(idCard) {
    currentCard = 
    if (firstPlay){
        setReserve({...reserve, })
        setFirstPlay(false)
    }else {

    }
  }
  return (
    <>
      <div> une carte</div>
    </>
  )
}

export default HandComponent
