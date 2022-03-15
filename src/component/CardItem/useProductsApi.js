import { useEffect, useState } from 'react'
import RandomAds from '../../config/services/Ads'
import { getProducts } from '../../config/services/getProducts'

function useProductsApi(page, sort, limit = 20) {
  const [isLoad, setLoad] = useState(true)
  const [data, setData] = useState([])
  const [preloadData, setPreloadData] = useState([])
  const [loadMore, setLoadMore] = useState(false)
  const [lastData, setLastData] = useState(false)

  useEffect(() => {
    setData([])
  }, [sort])

  async function nextProducts(page, sort, limit) {
    const products = await getProducts(page, sort, limit)
  
    if(products.length == limit) {
      setPreloadData(products)
      
      const generateAd = RandomAds(products)
      products.push(generateAd)
      setLoadMore(products.length > 0)
      setLoad(false)

      if(!products.length) {
        setLastData(true)
      }
    }
  }

  useEffect(async () => {
    setLoad(true)
    if (page == 1) {
      const products = await getProducts(page, sort, limit)
  
      if(products.length == limit) {
        const generateAd = RandomAds(products)
        products.push(generateAd)
        setData(products)
  
        nextProducts(page + 1, sort, limit)
        setLoadMore(products.length > 0)
        setLoad(false)
  
        if(!products.length) {
          setLastData(true)
        }
      }
    } else {
      setData((prevData) => {
        return [...new Set([...prevData, ...preloadData])]
      })
      await nextProducts(page + 1, sort, limit)
    }
  }, [page, sort])

  return { isLoad, data, loadMore, lastData }
}

export default useProductsApi
