import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoadingPage from '../components/ui/LoadingPage'
import { Slot, Stack } from 'expo-router'
import { logged } from '../repositories/authApi'

const _layout = () => {
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await logged()
  //     setLoading(false)
  //   }

  //   fetchData()
  // }, [])

  return <>
    { loading ? <LoadingPage/> : <Stack screenOptions={{headerShown: false}} /> }
  </>
}

export default _layout