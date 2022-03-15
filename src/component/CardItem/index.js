import React, { Fragment } from 'react'
import { DollarFormat } from '../../utils/DollarFormat'
import DateFormat from '../../utils/DateFormat'
import './style.css'

function CardItem(props) {
    return (
        <div className="items">
            {
                props.products.map((v, index) => {
                    return (
                        <Fragment key={index}>
                            {
                                v.id !== 'ads' ?
                                    <div className="card-item">
                                        <label>{DollarFormat(v.price)}</label>
                                        <div style={{ fontSize: v.size }}>{v.face}</div>
                                        <i>{DateFormat(v.date)}</i>
                                    </div>
                                    :
                                    <div className="card-item" ref={props.products.length === index + 1 ? props.handleLoadMore : null}>
                                        <img style={{ width: '300px', height: '100%' }} src={v.ads} />
                                    </div>
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default CardItem