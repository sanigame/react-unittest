import React from 'react'

import PropTypes from 'prop-types'

const DetailItem = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

DetailItem.propTypes = {
  title: PropTypes.string,
}

DetailItem.defaultProps = {
  title: 'default',
}

export default DetailItem
