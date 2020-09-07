import React, { Suspense } from 'react'
import Loading from '../Common/Loading'
import useStyles from './styles'


const PublicLayout = (props) => {
  const classes = useStyles()
  return (
    <Suspense
      fallback={<Loading />}
    >
      <div className={classes.privateLayout}>
        {props.children}
      </div>
    </Suspense>
  )
}

export default PublicLayout
