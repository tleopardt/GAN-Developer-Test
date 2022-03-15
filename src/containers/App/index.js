import React, { Fragment, useState, useCallback, useRef } from 'react'
import FilterColumn from '../../component/FilterColumn';
import CardItem from '../../component/CardItem';
import useProductsApi from '../../component/CardItem/useProductsApi';
import './style.css'

function App() {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('')

  // run the products API 
  const { isLoad, data, loadMore, lastData } = useProductsApi(page, sort)
  /**
    we will get the very last data which is the element
    in this function using usecallback and then we gonna
    disconnect the current last data after loading API
    so it can updated into a right value, and then the
    last thing is we will render more page.
  */
  const observer = useRef()
  const lastItemRef = useCallback(
    element => {
      if (isLoad) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && loadMore) {
          setPage(prevPage => prevPage + 1)
        }
      })
      if (element) observer.current.observe(element)
    }, [isLoad, loadMore]
  )

  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          <div className="content">
            <FilterColumn handleSort={setSort} handlePage={setPage} />
            <div className="marketplace" style={{ width: '100%' }}>
              <div className="title">
                <label>Ascii face marketplace</label>
                <hr />
              </div>
              <br />
              <div className="item-wrapper">
                <CardItem products={data} handleLoadMore={lastItemRef} />
                {
                  isLoad && <p className="text-center">Loading...</p>
                }
                {
                  lastData && <p className="text-center">~ End of catalouge ~</p>
                }
              </div>

            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default App
