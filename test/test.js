module.exports = {

  "nested": {
    "test": {
      "options": {
        "java_package": "com.test.wsmsg"
      },
      "nested": {
        "DmParamError": {
          "fields": {
            "name": {
              "type": "string",
              "id": 1
            },
            "error": {
              "type": "string",
              "id": 2
            }
          }
        },
        "MasterDataRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "filterFuture": {
              "type": "bool",
              "id": 2
            }
          }
        },
        "DmCurrency": {
          "fields": {
            "currencyId": {
              "type": "uint32",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "type": {
              "type": "string",
              "id": 3
            },
            "name": {
              "type": "string",
              "id": 4
            },
            "precision": {
              "type": "uint32",
              "id": 5
            },
            "currencyRegion": {
              "type": "string",
              "id": 6
            },
            "coinIcon": {
              "type": "string",
              "id": 7
            }
          }
        },
        "DmPair": {
          "fields": {
            "pairId": {
              "type": "uint32",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "baseCurrencyId": {
              "type": "uint32",
              "id": 3
            },
            "quoteCurrencyId": {
              "type": "uint32",
              "id": 4
            },
            "minPrice": {
              "type": "double",
              "id": 5
            },
            "maxPrice": {
              "type": "double",
              "id": 6
            },
            "minSize": {
              "type": "double",
              "id": 7
            },
            "maxSize": {
              "type": "double",
              "id": 8
            },
            "minNotional": {
              "type": "double",
              "id": 9
            },
            "tradable": {
              "type": "bool",
              "id": 10
            },
            "priceDisplayDp": {
              "type": "uint32",
              "id": 11
            },
            "sizeDisplayDp": {
              "type": "uint32",
              "id": 12
            },
            "futEnabled": {
              "type": "bool",
              "id": 13
            },
            "futMin": {
              "type": "double",
              "id": 14
            },
            "futMax": {
              "type": "double",
              "id": 15
            },
            "futRate": {
              "type": "double",
              "id": 16
            },
            "recommend": {
              "type": "bool",
              "id": 17
            },
            "currencyPairRegion": {
              "type": "string",
              "id": 18
            },
            "futureConfig": {
              "type": "DmFuturePairConfig",
              "id": 19
            }
          }
        },
        "DmFuturePairConfig": {
          "fields": {
            "clearingTypes": {
              "type": "string",
              "id": 1
            },
            "timeCycles": {
              "type": "string",
              "id": 2
            },
            "dynamicRiseOdds": {
              "rule": "repeated",
              "type": "DmDynamicOdds",
              "id": 3
            },
            "dynamicFallOdds": {
              "rule": "repeated",
              "type": "DmDynamicOdds",
              "id": 4
            }
          }
        },
        "DmDynamicOdds": {
          "fields": {
            "timeCycle": {
              "type": "string",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "type": {
              "type": "string",
              "id": 3
            }
          }
        },
        "MasterDataResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "currencies": {
              "rule": "repeated",
              "type": "DmCurrency",
              "id": 4
            },
            "pairs": {
              "rule": "repeated",
              "type": "DmPair",
              "id": 5
            },
            "systemTime": {
              "type": "uint64",
              "id": 6
            }
          }
        },
        "UserLoginRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "token": {
              "type": "string",
              "id": 2
            },
            "includeUser": {
              "type": "bool",
              "id": 3
            },
            "includeAccount": {
              "type": "bool",
              "id": 4
            },
            "reqAccountUpdate": {
              "type": "bool",
              "id": 5
            },
            "hasFundOnly": {
              "type": "bool",
              "id": 6
            }
          }
        },
        "DmUserAccount": {
          "fields": {
            "accountId": {
              "type": "uint64",
              "id": 1
            },
            "currencyId": {
              "type": "uint32",
              "id": 2
            },
            "available": {
              "type": "string",
              "id": 3
            },
            "frozen": {
              "type": "string",
              "id": 4
            },
            "withdrawable": {
              "type": "bool",
              "id": 15
            },
            "withdrawalFee": {
              "type": "double",
              "id": 8
            },
            "withdrawalFeeType": {
              "type": "string",
              "id": 9
            },
            "withdrawalLimit": {
              "type": "double",
              "id": 11
            },
            "depositable": {
              "type": "bool",
              "id": 16
            },
            "rateBtc": {
              "type": "double",
              "id": 12
            },
            "rateCny": {
              "type": "double",
              "id": 13
            },
            "rateUsd": {
              "type": "double",
              "id": 14
            },
            "withdrawalMinFee": {
              "type": "double",
              "id": 17
            },
            "rebate": {
              "type": "string",
              "id": 18
            }
          }
        },
        "UserLoginResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "paramErrors": {
              "rule": "repeated",
              "type": "DmParamError",
              "id": 4
            },
            "token": {
              "type": "string",
              "id": 5
            },
            "email": {
              "type": "string",
              "id": 6
            },
            "phone": {
              "type": "string",
              "id": 7
            },
            "country": {
              "type": "string",
              "id": 8
            },
            "fullName": {
              "type": "string",
              "id": 9
            },
            "hasTransactionPassword": {
              "type": "bool",
              "id": 10
            },
            "unreadMessageCount": {
              "type": "uint32",
              "id": 11
            },
            "accounts": {
              "rule": "repeated",
              "type": "DmUserAccount",
              "id": 12
            }
          }
        },
        "UserLogoutRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            }
          }
        },
        "UserLogoutResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            }
          }
        },
        "UserAccountUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "account": {
              "type": "DmUserAccount",
              "id": 2
            }
          }
        },
        "DmQuote": {
          "fields": {
            "symbol": {
              "type": "string",
              "id": 1
            },
            "high": {
              "type": "double",
              "id": 3
            },
            "open": {
              "type": "double",
              "id": 4
            },
            "low": {
              "type": "double",
              "id": 5
            },
            "close": {
              "type": "double",
              "id": 6
            },
            "price": {
              "type": "double",
              "id": 7
            },
            "volume": {
              "type": "double",
              "id": 8
            },
            "quoteVolume": {
              "type": "double",
              "id": 9
            },
            "status": {
              "type": "uint32",
              "id": 10
            },
            "fromTime": {
              "type": "uint64",
              "id": 11
            },
            "toTime": {
              "type": "uint64",
              "id": 12
            },
            "closeBtc": {
              "type": "double",
              "id": 13
            },
            "closeCny": {
              "type": "double",
              "id": 14
            },
            "closeUsd": {
              "type": "double",
              "id": 15
            }
          }
        },
        "SymbolListRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "region": {
              "type": "string",
              "id": 2
            },
            "watch": {
              "type": "bool",
              "id": 3
            },
            "currencyRegion": {
              "type": "string",
              "id": 4
            },
            "orderBy": {
              "type": "string",
              "id": 5
            },
            "order": {
              "type": "string",
              "id": 6
            }
          }
        },
        "SymbolListResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "quotes": {
              "rule": "repeated",
              "type": "DmQuote",
              "id": 4
            },
            "region": {
              "type": "string",
              "id": 5
            }
          }
        },
        "HomeSymbolListRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "type": {
              "type": "string",
              "id": 2
            },
            "limit": {
              "type": "uint32",
              "id": 3
            },
            "watch": {
              "type": "bool",
              "id": 4
            },
            "orderBy": {
              "type": "string",
              "id": 5
            },
            "order": {
              "type": "string",
              "id": 6
            }
          }
        },
        "HomeSymbolListResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "type": {
              "type": "string",
              "id": 5
            },
            "quotes": {
              "rule": "repeated",
              "type": "DmQuote",
              "id": 4
            }
          }
        },
        "WatchListRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "watch": {
              "type": "bool",
              "id": 2
            },
            "currencyRegion": {
              "type": "string",
              "id": 3
            },
            "orderBy": {
              "type": "string",
              "id": 4
            },
            "order": {
              "type": "string",
              "id": 5
            }
          }
        },
        "WatchListResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "quotes": {
              "rule": "repeated",
              "type": "DmQuote",
              "id": 4
            }
          }
        },
        "WatchListEditRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "add": {
              "type": "bool",
              "id": 2
            },
            "symbols": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            },
            "watch": {
              "type": "bool",
              "id": 4
            }
          }
        },
        "WatchListEditResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "quotes": {
              "rule": "repeated",
              "type": "DmQuote",
              "id": 4
            }
          }
        },
        "WatchListSortRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbols": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            }
          }
        },
        "WatchListSortResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            }
          }
        },
        "SymbolSearchRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            }
          }
        },
        "SymbolSearchResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "symbols": {
              "rule": "repeated",
              "type": "string",
              "id": 4
            },
            "quotes": {
              "rule": "repeated",
              "type": "DmQuote",
              "id": 5
            }
          }
        },
        "QuoteUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "quote": {
              "type": "DmQuote",
              "id": 2
            }
          }
        },
        "QuoteRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "watch": {
              "type": "bool",
              "id": 3
            }
          }
        },
        "QuoteResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "quote": {
              "type": "DmQuote",
              "id": 4
            },
            "watched": {
              "type": "bool",
              "id": 5
            },
            "takerCommission": {
              "type": "double",
              "id": 6
            },
            "makerCommission": {
              "type": "double",
              "id": 7
            }
          }
        },
        "BarRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "type": {
              "type": "string",
              "id": 3
            },
            "from": {
              "type": "uint64",
              "id": 4
            },
            "number": {
              "type": "uint32",
              "id": 5
            },
            "watch": {
              "type": "bool",
              "id": 6
            },
            "noFill": {
              "type": "bool",
              "id": 7
            }
          }
        },
        "DmBar": {
          "fields": {
            "time": {
              "type": "uint64",
              "id": 1
            },
            "open": {
              "type": "double",
              "id": 2
            },
            "high": {
              "type": "double",
              "id": 3
            },
            "low": {
              "type": "double",
              "id": 4
            },
            "close": {
              "type": "double",
              "id": 5
            },
            "volume": {
              "type": "double",
              "id": 6
            }
          }
        },
        "BarResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "symbol": {
              "type": "string",
              "id": 4
            },
            "type": {
              "type": "string",
              "id": 5
            },
            "bars": {
              "rule": "repeated",
              "type": "DmBar",
              "id": 6
            }
          }
        },
        "BarUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "type": {
              "type": "string",
              "id": 3
            },
            "bar": {
              "type": "DmBar",
              "id": 4
            }
          }
        },
        "DepthRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "limit": {
              "type": "uint32",
              "id": 3
            },
            "watch": {
              "type": "bool",
              "id": 4
            }
          }
        },
        "DmDepthItem": {
          "fields": {
            "price": {
              "type": "double",
              "id": 1
            },
            "size": {
              "type": "double",
              "id": 2
            },
            "has": {
              "type": "bool",
              "id": 3
            }
          }
        },
        "DepthResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "symbol": {
              "type": "string",
              "id": 6
            },
            "bids": {
              "rule": "repeated",
              "type": "DmDepthItem",
              "id": 4
            },
            "asks": {
              "rule": "repeated",
              "type": "DmDepthItem",
              "id": 5
            }
          }
        },
        "DepthUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "bids": {
              "rule": "repeated",
              "type": "DmDepthItem",
              "id": 3
            },
            "asks": {
              "rule": "repeated",
              "type": "DmDepthItem",
              "id": 4
            }
          }
        },
        "TradeRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "limit": {
              "type": "uint32",
              "id": 3
            },
            "watch": {
              "type": "bool",
              "id": 4
            }
          }
        },
        "DmTrade": {
          "fields": {
            "price": {
              "type": "double",
              "id": 1
            },
            "size": {
              "type": "double",
              "id": 2
            },
            "takerSide": {
              "type": "string",
              "id": 3
            },
            "time": {
              "type": "uint64",
              "id": 4
            }
          }
        },
        "TradeResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "symbol": {
              "type": "string",
              "id": 4
            },
            "trades": {
              "rule": "repeated",
              "type": "DmTrade",
              "id": 5
            }
          }
        },
        "TradeUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "trades": {
              "rule": "repeated",
              "type": "DmTrade",
              "id": 3
            }
          }
        },
        "PlaceOrderRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "action": {
              "type": "string",
              "id": 3
            },
            "orderType": {
              "type": "string",
              "id": 4
            },
            "price": {
              "type": "string",
              "id": 5
            },
            "size": {
              "type": "string",
              "id": 6
            },
            "triggerPrice": {
              "type": "string",
              "id": 7
            },
            "amount": {
              "type": "string",
              "id": 8
            }
          }
        },
        "PlaceOrderResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "paramErrors": {
              "rule": "repeated",
              "type": "DmParamError",
              "id": 4
            },
            "orderId": {
              "type": "uint64",
              "id": 5
            }
          }
        },
        "CancelOrderRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "orderId": {
              "type": "uint64",
              "id": 3
            }
          }
        },
        "CancelOrderResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "orderId": {
              "type": "uint64",
              "id": 4
            }
          }
        },
        "OrderRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "orderStatus": {
              "type": "string",
              "id": 3
            },
            "page": {
              "type": "uint32",
              "id": 4
            },
            "size": {
              "type": "uint32",
              "id": 5
            },
            "watch": {
              "type": "bool",
              "id": 6
            },
            "action": {
              "type": "string",
              "id": 7
            },
            "currencyRegion": {
              "type": "string",
              "id": 8
            }
          }
        },
        "DmOrder": {
          "fields": {
            "orderId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "action": {
              "type": "string",
              "id": 3
            },
            "orderType": {
              "type": "string",
              "id": 4
            },
            "price": {
              "type": "double",
              "id": 5
            },
            "size": {
              "type": "double",
              "id": 6
            },
            "orderStatus": {
              "type": "string",
              "id": 7
            },
            "filledSize": {
              "type": "double",
              "id": 8
            },
            "lastFilledPrice": {
              "type": "double",
              "id": 9
            },
            "commission": {
              "type": "double",
              "id": 10
            },
            "isActive": {
              "type": "bool",
              "id": 11
            },
            "createdTime": {
              "type": "uint64",
              "id": 12
            },
            "triggerPrice": {
              "type": "double",
              "id": 13
            },
            "filledAmount": {
              "type": "double",
              "id": 14
            },
            "avgPrice": {
              "type": "double",
              "id": 15
            }
          }
        },
        "OrderResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "orders": {
              "rule": "repeated",
              "type": "DmOrder",
              "id": 4
            },
            "totalPage": {
              "type": "uint32",
              "id": 5
            },
            "totalCount": {
              "type": "uint32",
              "id": 6
            },
            "pageSize": {
              "type": "uint32",
              "id": 7
            },
            "currentPage": {
              "type": "uint32",
              "id": 8
            }
          }
        },
        "OrderUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "order": {
              "type": "DmOrder",
              "id": 2
            }
          }
        },
        "StopUpdateRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "quote": {
              "type": "bool",
              "id": 2
            },
            "bar": {
              "type": "bool",
              "id": 3
            },
            "depth": {
              "type": "bool",
              "id": 4
            },
            "trade": {
              "type": "bool",
              "id": 5
            },
            "order": {
              "type": "bool",
              "id": 6
            },
            "futureQuote": {
              "type": "bool",
              "id": 7
            },
            "futureBar": {
              "type": "bool",
              "id": 8
            },
            "futureDepth": {
              "type": "bool",
              "id": 9
            },
            "futureOrder": {
              "type": "bool",
              "id": 10
            }
          }
        },
        "ExecutionRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "page": {
              "type": "uint32",
              "id": 2
            },
            "size": {
              "type": "uint32",
              "id": 3
            },
            "symbol": {
              "type": "string",
              "id": 4
            },
            "action": {
              "type": "string",
              "id": 5
            }
          }
        },
        "DmExecution": {
          "fields": {
            "executionId": {
              "type": "uint64",
              "id": 7
            },
            "symbol": {
              "type": "string",
              "id": 1
            },
            "isMarketMaker": {
              "type": "bool",
              "id": 2
            },
            "commission": {
              "type": "double",
              "id": 3
            },
            "price": {
              "type": "double",
              "id": 4
            },
            "filled": {
              "type": "double",
              "id": 5
            },
            "time": {
              "type": "uint64",
              "id": 6
            },
            "action": {
              "type": "string",
              "id": 8
            },
            "totalAmout": {
              "type": "double",
              "id": 9
            }
          }
        },
        "ExecutionResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "totalPage": {
              "type": "uint32",
              "id": 5
            },
            "totalCount": {
              "type": "uint32",
              "id": 6
            },
            "pageSize": {
              "type": "uint32",
              "id": 7
            },
            "currentPage": {
              "type": "uint32",
              "id": 8
            },
            "executions": {
              "rule": "repeated",
              "type": "DmExecution",
              "id": 4
            }
          }
        },
        "NotificationResponse": {
          "fields": {
            "code": {
              "type": "uint32",
              "id": 1
            },
            "title": {
              "type": "string",
              "id": 2
            },
            "content": {
              "type": "string",
              "id": 3
            }
          }
        },
        "FutureDmQuote": {
          "fields": {
            "symbol": {
              "type": "string",
              "id": 1
            },
            "high": {
              "type": "double",
              "id": 3
            },
            "open": {
              "type": "double",
              "id": 4
            },
            "low": {
              "type": "double",
              "id": 5
            },
            "price": {
              "type": "double",
              "id": 6
            },
            "prevClose": {
              "type": "double",
              "id": 7
            },
            "popClose": {
              "type": "double",
              "id": 8
            },
            "time": {
              "type": "uint64",
              "id": 9
            },
            "status": {
              "type": "uint32",
              "id": 10
            },
            "timeQuotes": {
              "rule": "repeated",
              "type": "FutureTimeDmQuote",
              "id": 11
            }
          }
        },
        "FutureTimeDmQuote": {
          "fields": {
            "timeCycle": {
              "type": "string",
              "id": 1
            },
            "prevClose": {
              "type": "double",
              "id": 2
            },
            "popClose": {
              "type": "double",
              "id": 3
            },
            "price": {
              "type": "double",
              "id": 6
            },
            "riseAmount": {
              "type": "double",
              "id": 7
            },
            "fallAmount": {
              "type": "double",
              "id": 8
            },
            "endTime": {
              "type": "uint64",
              "id": 9
            }
          }
        },
        "FutureSymbolListRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "watch": {
              "type": "bool",
              "id": 2
            }
          }
        },
        "FutureSymbolListResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "quotes": {
              "rule": "repeated",
              "type": "FutureDmQuote",
              "id": 4
            }
          }
        },
        "FutureQuoteUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "quote": {
              "type": "FutureDmQuote",
              "id": 2
            }
          }
        },
        "FutureQuoteRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "watch": {
              "type": "bool",
              "id": 3
            }
          }
        },
        "FutureQuoteResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "quote": {
              "type": "FutureDmQuote",
              "id": 4
            },
            "introUrl": {
              "type": "string",
              "id": 5
            }
          }
        },
        "FutureDepthRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "round": {
              "type": "uint32",
              "id": 3
            },
            "watch": {
              "type": "bool",
              "id": 4
            },
            "timeCycle": {
              "type": "string",
              "id": 5
            },
            "clearingType": {
              "type": "string",
              "id": 6
            }
          }
        },
        "FutureDepthResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "symbol": {
              "type": "string",
              "id": 4
            },
            "riseAmount": {
              "type": "double",
              "id": 5
            },
            "fallAmount": {
              "type": "double",
              "id": 6
            },
            "riseOrders": {
              "rule": "repeated",
              "type": "DmFutureDepthItem",
              "id": 7
            },
            "fallOrders": {
              "rule": "repeated",
              "type": "DmFutureDepthItem",
              "id": 8
            },
            "round": {
              "type": "uint64",
              "id": 9
            },
            "timeCycle": {
              "type": "string",
              "id": 10
            },
            "clearingType": {
              "type": "string",
              "id": 11
            }
          }
        },
        "DmFutureDepthItem": {
          "fields": {
            "createdTime": {
              "type": "uint64",
              "id": 1
            },
            "amount": {
              "type": "double",
              "id": 2
            }
          }
        },
        "FutureDepthUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "symbol": {
              "type": "string",
              "id": 4
            },
            "riseAmount": {
              "type": "double",
              "id": 5
            },
            "fallAmount": {
              "type": "double",
              "id": 6
            },
            "riseOrders": {
              "rule": "repeated",
              "type": "DmFutureDepthItem",
              "id": 7
            },
            "fallOrders": {
              "rule": "repeated",
              "type": "DmFutureDepthItem",
              "id": 8
            },
            "round": {
              "type": "uint64",
              "id": 9
            },
            "timeCycle": {
              "type": "string",
              "id": 10
            },
            "clearingType": {
              "type": "string",
              "id": 11
            }
          }
        },
        "FutureBarRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "type": {
              "type": "string",
              "id": 3
            },
            "from": {
              "type": "uint64",
              "id": 4
            },
            "number": {
              "type": "uint32",
              "id": 5
            },
            "watch": {
              "type": "bool",
              "id": 6
            },
            "noFill": {
              "type": "bool",
              "id": 7
            }
          }
        },
        "FutureDmBar": {
          "fields": {
            "time": {
              "type": "uint64",
              "id": 1
            },
            "open": {
              "type": "double",
              "id": 2
            },
            "high": {
              "type": "double",
              "id": 3
            },
            "low": {
              "type": "double",
              "id": 4
            },
            "close": {
              "type": "double",
              "id": 5
            },
            "volume": {
              "type": "double",
              "id": 6
            }
          }
        },
        "FutureBarResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "symbol": {
              "type": "string",
              "id": 4
            },
            "type": {
              "type": "string",
              "id": 5
            },
            "bars": {
              "rule": "repeated",
              "type": "FutureDmBar",
              "id": 6
            }
          }
        },
        "FutureBarUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "type": {
              "type": "string",
              "id": 3
            },
            "bar": {
              "type": "FutureDmBar",
              "id": 4
            }
          }
        },
        "FutureDmOrder": {
          "fields": {
            "orderId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "action": {
              "type": "string",
              "id": 3
            },
            "price": {
              "type": "double",
              "id": 5
            },
            "orderStatus": {
              "type": "string",
              "id": 7
            },
            "filledPrice": {
              "type": "double",
              "id": 8
            },
            "commission": {
              "type": "double",
              "id": 10
            },
            "isActive": {
              "type": "bool",
              "id": 11
            },
            "createdTime": {
              "type": "uint64",
              "id": 12
            },
            "filledTime": {
              "type": "uint64",
              "id": 13
            },
            "round": {
              "type": "uint64",
              "id": 14
            },
            "roundPreClose": {
              "type": "double",
              "id": 15
            },
            "roundClose": {
              "type": "double",
              "id": 16
            },
            "timeCycle": {
              "type": "string",
              "id": 17
            },
            "clearingType": {
              "type": "string",
              "id": 18
            }
          }
        },
        "FutureOrderUpdateResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "order": {
              "type": "FutureDmOrder",
              "id": 2
            }
          }
        },
        "FutureOrderRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "activeOnly": {
              "type": "bool",
              "id": 3
            },
            "page": {
              "type": "uint32",
              "id": 4
            },
            "size": {
              "type": "uint32",
              "id": 5
            },
            "watch": {
              "type": "bool",
              "id": 6
            },
            "action": {
              "type": "string",
              "id": 7
            },
            "result": {
              "type": "string",
              "id": 8
            }
          }
        },
        "FutureOrderResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "orders": {
              "rule": "repeated",
              "type": "FutureDmOrder",
              "id": 4
            },
            "totalPage": {
              "type": "uint32",
              "id": 5
            },
            "totalCount": {
              "type": "uint32",
              "id": 6
            },
            "pageSize": {
              "type": "uint32",
              "id": 7
            },
            "currentPage": {
              "type": "uint32",
              "id": 8
            }
          }
        },
        "FuturePlaceOrderRequest": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "symbol": {
              "type": "string",
              "id": 2
            },
            "action": {
              "type": "string",
              "id": 3
            },
            "price": {
              "type": "string",
              "id": 5
            },
            "round": {
              "type": "uint64",
              "id": 6
            },
            "timeCycle": {
              "type": "string",
              "id": 7
            },
            "clearingType": {
              "type": "string",
              "id": 8
            }
          }
        },
        "FuturePlaceOrderResponse": {
          "fields": {
            "requestId": {
              "type": "uint64",
              "id": 1
            },
            "code": {
              "type": "string",
              "id": 2
            },
            "message": {
              "type": "string",
              "id": 3
            },
            "paramErrors": {
              "rule": "repeated",
              "type": "DmParamError",
              "id": 4
            },
            "orderId": {
              "type": "uint64",
              "id": 5
            }
          }
        },
        "RequestMessage": {
          "oneofs": {
            "msg": {
              "oneof": [
                "userLogin",
                "userLogout",
                "symbolList",
                "watchList",
                "watchEdit",
                "watchSort",
                "symbolSearch",
                "quote",
                "bar",
                "depth",
                "trade",
                "execution",
                "order",
                "stopUpdate",
                "homeSymbolList",
                "masterData",
                "placeOrder",
                "cancelOrder",
                "futureQuote",
                "futureBar",
                "futureOrder",
                "futurePlaceOrder",
                "futureDepth",
                "futureSymbolList"
              ]
            }
          },
          "fields": {
            "userLogin": {
              "type": "UserLoginRequest",
              "id": 1
            },
            "userLogout": {
              "type": "UserLogoutRequest",
              "id": 2
            },
            "symbolList": {
              "type": "SymbolListRequest",
              "id": 3
            },
            "watchList": {
              "type": "WatchListRequest",
              "id": 4
            },
            "watchEdit": {
              "type": "WatchListEditRequest",
              "id": 5
            },
            "watchSort": {
              "type": "WatchListSortRequest",
              "id": 6
            },
            "symbolSearch": {
              "type": "SymbolSearchRequest",
              "id": 7
            },
            "quote": {
              "type": "QuoteRequest",
              "id": 8
            },
            "bar": {
              "type": "BarRequest",
              "id": 9
            },
            "depth": {
              "type": "DepthRequest",
              "id": 10
            },
            "trade": {
              "type": "TradeRequest",
              "id": 11
            },
            "execution": {
              "type": "ExecutionRequest",
              "id": 12
            },
            "order": {
              "type": "OrderRequest",
              "id": 13
            },
            "stopUpdate": {
              "type": "StopUpdateRequest",
              "id": 14
            },
            "homeSymbolList": {
              "type": "HomeSymbolListRequest",
              "id": 15
            },
            "masterData": {
              "type": "MasterDataRequest",
              "id": 16
            },
            "placeOrder": {
              "type": "PlaceOrderRequest",
              "id": 17
            },
            "cancelOrder": {
              "type": "CancelOrderRequest",
              "id": 18
            },
            "futureQuote": {
              "type": "FutureQuoteRequest",
              "id": 19
            },
            "futureBar": {
              "type": "FutureBarRequest",
              "id": 20
            },
            "futureOrder": {
              "type": "FutureOrderRequest",
              "id": 21
            },
            "futurePlaceOrder": {
              "type": "FuturePlaceOrderRequest",
              "id": 22
            },
            "futureDepth": {
              "type": "FutureDepthRequest",
              "id": 23
            },
            "futureSymbolList": {
              "type": "FutureSymbolListRequest",
              "id": 24
            },
            "lang": {
              "type": "string",
              "id": 99
            },
            "accessKey": {
              "type": "string",
              "id": 100
            }
          }
        },
        "ResponseMessage": {
          "oneofs": {
            "msg": {
              "oneof": [
                "notification",
                "userLogin",
                "userLogout",
                "accountUpdate",
                "symbolList",
                "watchList",
                "watchEdit",
                "watchSort",
                "symbolSearch",
                "quoteUpdate",
                "quote",
                "bar",
                "barUpdate",
                "depth",
                "depthUpdate",
                "trade",
                "tradeUpdate",
                "execution",
                "order",
                "orderUpdate",
                "homeSymbolList",
                "masterData",
                "placeOrder",
                "cancelOrder",
                "futureQuote",
                "futureQuoteUpdate",
                "futureBar",
                "futureBarUpdate",
                "futureOrder",
                "futureOrderUpdate",
                "futurePlaceOrder",
                "futureDepth",
                "futureDepthUpdate",
                "futureSymbolList"
              ]
            }
          },
          "fields": {
            "notification": {
              "type": "NotificationResponse",
              "id": 100
            },
            "userLogin": {
              "type": "UserLoginResponse",
              "id": 1
            },
            "userLogout": {
              "type": "UserLogoutResponse",
              "id": 2
            },
            "accountUpdate": {
              "type": "UserAccountUpdateResponse",
              "id": 3
            },
            "symbolList": {
              "type": "SymbolListResponse",
              "id": 4
            },
            "watchList": {
              "type": "WatchListResponse",
              "id": 5
            },
            "watchEdit": {
              "type": "WatchListEditResponse",
              "id": 6
            },
            "watchSort": {
              "type": "WatchListSortResponse",
              "id": 7
            },
            "symbolSearch": {
              "type": "SymbolSearchResponse",
              "id": 8
            },
            "quoteUpdate": {
              "type": "QuoteUpdateResponse",
              "id": 9
            },
            "quote": {
              "type": "QuoteResponse",
              "id": 10
            },
            "bar": {
              "type": "BarResponse",
              "id": 11
            },
            "barUpdate": {
              "type": "BarUpdateResponse",
              "id": 12
            },
            "depth": {
              "type": "DepthResponse",
              "id": 13
            },
            "depthUpdate": {
              "type": "DepthUpdateResponse",
              "id": 14
            },
            "trade": {
              "type": "TradeResponse",
              "id": 15
            },
            "tradeUpdate": {
              "type": "TradeUpdateResponse",
              "id": 16
            },
            "execution": {
              "type": "ExecutionResponse",
              "id": 17
            },
            "order": {
              "type": "OrderResponse",
              "id": 18
            },
            "orderUpdate": {
              "type": "OrderUpdateResponse",
              "id": 19
            },
            "homeSymbolList": {
              "type": "HomeSymbolListResponse",
              "id": 20
            },
            "masterData": {
              "type": "MasterDataResponse",
              "id": 21
            },
            "placeOrder": {
              "type": "PlaceOrderResponse",
              "id": 22
            },
            "cancelOrder": {
              "type": "CancelOrderResponse",
              "id": 23
            },
            "futureQuote": {
              "type": "FutureQuoteResponse",
              "id": 24
            },
            "futureQuoteUpdate": {
              "type": "FutureQuoteUpdateResponse",
              "id": 30
            },
            "futureBar": {
              "type": "FutureBarResponse",
              "id": 25
            },
            "futureBarUpdate": {
              "type": "FutureBarUpdateResponse",
              "id": 31
            },
            "futureOrder": {
              "type": "FutureOrderResponse",
              "id": 26
            },
            "futureOrderUpdate": {
              "type": "FutureOrderUpdateResponse",
              "id": 32
            },
            "futurePlaceOrder": {
              "type": "FuturePlaceOrderResponse",
              "id": 27
            },
            "futureDepth": {
              "type": "FutureDepthResponse",
              "id": 28
            },
            "futureDepthUpdate": {
              "type": "FutureDepthUpdateResponse",
              "id": 29
            },
            "futureSymbolList": {
              "type": "FutureSymbolListResponse",
              "id": 33
            }
          }
        }
      }
    }
  }
}