import React from 'react'
import { useSelector } from 'react-redux'
import usersSlice from '../store/users/usersSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function User() {
    const { users, isLoading, error } = useSelector((store)=> store.user)

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch()
    },[]);
    if(isLoading) {
      return (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      )
    }
  return (
    <div>useSelector</div>
  )
}
