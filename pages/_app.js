import '../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient();


import { useState, createContext } from 'react'
import useUserCheck from '../components/hooks/checkUser/useUserCheck';

export const UserFullInfoProvider = createContext()
function MyApp({Component, pageProps }) {
  const { user, user_details, isAdmin, isLoading } = useUserCheck()
  return (
    <UserFullInfoProvider.Provider value={{ user, user_details, isAdmin, isLoading }}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </UserFullInfoProvider.Provider>
  )
}



export default MyApp
