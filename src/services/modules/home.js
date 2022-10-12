import shRequest from "@/services/request";

export function getHomeGoodPriceData() {
  return shRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeScoreData() {
  return shRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return shRequest.get({
    url: "/home/discount"
  })
}
