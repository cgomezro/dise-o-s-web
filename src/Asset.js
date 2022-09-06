/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TradeWidget from "./components/TradeWidget";
import { Skeleton, Stack, Typography, Divider } from "@mui/material";
import classNames from "classnames";
import styles from "./sass/assets.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Assets from "./components/Assets";
import ReactMarkdown from 'react-markdown'

const Asset = (props) => {
  // state
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);

  // redux
  const assets = useSelector((state) => state.assets);

  // hooks
  const params = useParams();

  // lifecycles
  useEffect(() => {
    if (!assets.loading) {
      const findAsset = assets.list.find((asset) => {
        return asset.id === params.asset_id;
      });
      if (findAsset) {
        setAsset(findAsset);
        setLoading(false);
      }
    }
  }, [assets, assets.list]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className={classNames(styles["asset"], "container mt-3")}>
      <div className="row">
        <div className="col-md-8 col-12">
          <Assets id={params.asset_id} {...props} />
          {loading ? (
            <>
              <Stack spacing={1} className="mt-3">
                <Skeleton variant="rectangular" height={150} />
                <Skeleton variant="rectangular" height={150} />
              </Stack>
            </>
          ) : (
            <>
              <div className="mt-2">
                {asset.type === "token" ? (
                  <>
                    <coingecko-coin-compare-chart-widget coin-ids={asset.symbol} currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
                  </>
                ) : (
                  <div className="text-center mt-5">
                    <Typography variant="caption">
                      No chart available
                    </Typography>
                  </div>
                )}
              </div>
              <div className={classNames(styles["description"], "row mt-5")}>
                <div className="col-12">
                  <Typography variant="h3">About {asset.name}</Typography>
                  <ReactMarkdown children={asset.description}/>
                  <Divider className="mt-4" />
                </div>
              </div>
              <div className={classNames(styles["stats"], "row mt-4")}>
                <div className="col-6">
                  <Typography variant="h4">Price</Typography>
                  <Typography variant="body1">
                    {asset.price?.usd?.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Typography>
                </div>
                <div className="col-6">
                  <Typography variant="h4">Market Cap</Typography>
                  <Typography variant="body1">
                    {asset.price?.usd_market_cap?.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Typography>
                </div>
                <div className={classNames(styles["price"], "col-6")}>
                  <Typography variant="h4">24h Performance</Typography>
                  <Typography
                    className={classNames(
                      styles["movement"],
                      asset.price?.usd_24h_change < 0
                        ? styles["negative"]
                        : styles["positive"]
                    )}
                  >
                    {asset.price?.usd_24h_change?.toFixed(2)}%
                  </Typography>
                </div>
                <div className="col-6">
                  <Typography variant="h4">24h Volume</Typography>
                  <Typography variant="body1">
                    {asset.price?.usd_24h_vol?.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Typography>
                </div>
                {/*
                  <div className="col-12">
                    <Divider className="mt-2"/> 
                  </div>
                  */}
              </div>
            </>
          )}
        </div>
        <div className="col-md-4 col-12 mt-3 mt-md-0 mb-3">
          <TradeWidget />
        </div>
      </div>
    </div>
  );
};

export default Asset;
