import React from "react";
import styles from "./../../sass/landing/assets.module.scss";
import classNames from "classnames";
import { Skeleton, Avatar, Typography } from '@mui/material';
import { useSelector } from "react-redux";

const Assets = (props) => {
  // redux
  let { assets: { list, loading } } = useSelector((state) => state);
  list = list.filter(asset => asset.symbol !== "tether"); 
  // methods
  const openAsset = (id) => {
    props.history.push("/asset/" + id);
  }
  return (
    <>
      <div className={classNames(styles["assets"], "container")}>
        <div className="row flex-nowrap flex-lg-wrap">
          {
            loading ? (
              <>
                <div className="col-4">
                  <Skeleton variant="text" />
                </div>
                <div className="col-4">
                  <Skeleton variant="text" />
                </div>
                <div className="col-4">
                  <Skeleton variant="text" />
                </div>
                <div className="col-4">
                  <Skeleton variant="text" />
                </div>
                <div className="col-4">
                  <Skeleton variant="text" />
                </div>
                <div className="col-4">
                  <Skeleton variant="text" />
                </div>
              </>
            ) : (
              <>
                {
                  list.map(asset => {
                    return (
                      <div className="col-xl-4 col-lg-4 col-md-5 col-11" key={asset.id} onClick={() => openAsset(asset.id)}>
                        <div className={classNames(styles["asset"], "d-flex justify-content-between")}>
                          <div className="d-flex align-items-center">
                            <div className={classNames(styles["avatar"])}>
                              <Avatar
                                className="me-3"
                                alt={`${asset.name}'s Logo`}
                                src={
                                  asset.logo 
                                  ? 
                                  asset.logo.formats?.thumbnail ? asset.logo.formats?.thumbnail?.url : asset.logo.url
                                  : 
                                  ""
                                }
                              />
                            </div>
                            <div className={classNames(styles["meta"])}>
                              <Typography variant="body2">
                                {asset.name}
                              </Typography>
                              <Typography variant="caption" className="d-block">
                                {asset.display_symbol}
                              </Typography>
                            </div>   
                          </div> 
                          <div>
                            {asset.price && (
                              <div className={classNames(styles["price"], "text-end")}>
                                <Typography
                                  variant="body2"
                                  className={classNames(styles["value"])}
                                >
                                  ${asset.price.usd}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  className={classNames(
                                    styles["movement"],
                                    asset.price.usd_24h_change < 0
                                      ? styles["negative"]
                                      : styles["positive"]
                                  )}
                                >
                                  {asset.price.usd_24h_change.toFixed(2)}%
                                </Typography>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </>
            )
          }

        </div>
      </div>
    </>
  );
};

export default Assets;
