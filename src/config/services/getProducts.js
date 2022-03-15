import { axiosConfig } from '../api'

/**
 * get Product List
 * @param {object} page - page number
 * @param {number} sort -  sort data order by price, size, or id
 * @param {number} limit - handle limit of returned data
 * @returns string
 */
export async function getProducts(page, sort, limit) {
  const params = {
    _page: page,
    _limit: limit,
    _sort: sort,
  }
  const { data } = await axiosConfig.get('api/products', {
    params: params,
  })
  return data
}
