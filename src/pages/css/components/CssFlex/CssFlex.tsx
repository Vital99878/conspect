import React from 'react'
import './CssFlex.scss'
import PageLayout from '../../../../components/Layout/PageLayout'

const CssFlex: React.FC = () => {
  return (
    <PageLayout isGoBack={true}>
      <div className="flex-container">
        <div className="flex-item">flex item 1</div>
        <div className="flex-item">flex item 1</div>
        <div className="flex-item">flex item 1</div>
        <div className="flex-item">
          flex item 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, delectus!
        </div>
        <div className="flex-item">flex item 1</div>
      </div>
    </PageLayout>
  )
}

export default CssFlex
