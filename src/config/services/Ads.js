// get random number
function getRandomNumber(limit = 1) {
  return Math.floor(Math.random() * limit)
}

// get last ad from products
function getLastAd(products) {
  const filterAd = products.filter((x) => x.id == 'ads')
  if (filterAd.length !== 0) return filterAd[filterAd.length - 1].no
  else return 0
}

// generate Ads
function RandomAds(products) {
  let newAd = getRandomNumber(1000)
  var lastAdNumber = getLastAd(products)
  if (newAd !== lastAdNumber) {
    lastAdNumber = newAd
    return {
      id: 'ads',
      ads: `http://localhost:3000/api/ads?r=${newAd}`,
    }
  } else {
    RandomAds()
  }
}

export default RandomAds
