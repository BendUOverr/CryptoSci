import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

export const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  )
}
