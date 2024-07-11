import { Card } from 'antd'
import React from 'react'
import SimplePieChart from '../../../routes/extensions/charts/amchart/pie/Components/SimplePieChart'

export const Disposition = () => {
    return (
        <>
            <Card className="gx-card" title="Simple Pie Chart">
                <SimplePieChart />
            </Card>
        </>
    )
}
