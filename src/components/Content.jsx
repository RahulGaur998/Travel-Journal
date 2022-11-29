import React from 'react'
import IndividualContent from './IndividualContent'
import IndData from '../data'

const Content = () => {
    const Content= IndData.map(
        Data=> 
            <IndividualContent 
                key={Data.title}
                Data={Data}
            />
    )
  return (
    <div>
        {Content}
    </div>
  )
}

export default Content
