import React, { Suspense } from 'react'
import Loading from '../Common/Loading'
import PrivateDashBoard from '../Components/PrivateDashBoard/PrivateDashBoard'
import useStyles from './styles'

const PrivateLayout = (props) => {
  const classes = useStyles()

  return (
    <PrivateDashBoard >
      <Suspense
        fallback={<Loading />}
      >
        <div className={classes.privateLayout}>
          {props.children}
        </div>
      </Suspense>
    </PrivateDashBoard >
  )
}

export default PrivateLayout
