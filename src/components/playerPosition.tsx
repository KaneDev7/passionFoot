import React from 'react'

type PropsType =  {
    position : string
}

type PropsTypeEl = {
    color : string,
    text : string
}

const PositionEl = ({color, text}: PropsTypeEl) => (
    <div className={`min-w-[40px]  p-2 bg-white border-b-4 border-[${color}]` }  >
        <p className={`font-medium text-center text-[${color}] text-xs`}> {text} </p>
    </div>
)
export default function PlayerPosition({position}: PropsType) {
  
    switch (position) {
        case 'Goalkeeper':
            return <PositionEl color='#bd9949' text='GK'/>
        case 'Defence':
        return <PositionEl color='#bd9949' text='DF'/>
            
        case 'Midfield':

        return <PositionEl color='green' text='MDF'/>

        case 'Offence':

        return <PositionEl color='#f23c3c' text='OF'/>

        default:
            break;
    }

}
