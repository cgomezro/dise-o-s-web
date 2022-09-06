/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./../../sass/landing/news.module.scss";
import classNames from "classnames";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Alert, Skeleton } from "@mui/material";
import { getPosts } from "./../../helpers/blog";
import moment from "moment";
import IconButton from "./IconButton";

const CustomForm = ({ status, message, onValidated }) => {

  // state
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");

  // misc hooks
  const { handleSubmit, control, errors, setValue } = useForm();

  // lifecycles
  useEffect(() => {
    setResponse(status);
    setFeedback(message);
    if(status === "success") {
      setValue("email", "")
    }
  },[status,message]);

  const submit = (form) => {
    onValidated({
      EMAIL: form.email,
    });
  }
  

  return (
    <form
      onSubmit={handleSubmit(submit)}
    >
      <Controller
        as={
          <TextField
            label="E-mail"
            autoComplete="new-password"
            fullWidth={true}
            variant="outlined"
            error={errors.email && true}
            helperText={errors?.email?.message}
            className="mb-3"
            inputProps={{ maxLength: 30 }}
          />
        }
        name="email"
        control={control}
        defaultValue={""}
        rules={{
          required: "This field is required.",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            message: "Please enter a valid email address.",
          },
        }}
      />
      {
        response === "error" && (
          <Alert severity="error" className="mb-3">
            {feedback}
          </Alert>  
        )
      }
      {
        response === "success" && (
          <Alert severity="success" className="mb-3">
            {feedback}
          </Alert>  
        )
      }
      <Button
        disabled={response === "sending"}
        size="large"
        variant="contained"
        color="primary"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  )
}

const News = () => {

  // state
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // lifecycles
  useEffect(() => {
    handleGetPosts();
  },[]);

  // methods
  const handleGetPosts = async () => {
    const [error, response] = await getPosts();
    setLoading(false);
    if(error) {
      return;
    }
    setPosts(response.data);
  }

  return (
    <div className={classNames(styles["news"])}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 mb-3">
            <h3><span>Insights</span>Latest News</h3>
            <p className={classNames(styles["subscribe-cta"])}>
              Subscribe to recieve<br/>email updates.
            </p>
            <MailchimpSubscribe
              url={'https://bluespherecarbon.us1.list-manage.com/subscribe/post?u=dd44cd897074f9847d1fd163a&amp;id=d07142e5a3'}
              render={({ subscribe, status, message }) => (
                <>
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                    props={this}
                  />
                </>
              )}
            />
          </div>
          <div className="col-md-8 col-12">
            <div className="row">
              {
                loading ? (
                  <div className="col-12">
                    <Skeleton variant="text"/>
                    <Skeleton variant="text"/>
                    <Skeleton variant="text"/>
                  </div>
                ) : (
                  <>
                    {
                      posts.length === 0 ? (
                        <div className="col-12 h-100">
                          No News
                        </div>
                      ) : (
                        <>
                          {
                            posts.map((post) => {
                              return (
                                <div className="col-6 mb-3" key={post.id}>
                                  <h4>{post.title}</h4>
                                  <p className={classNames(styles["timestamp"])}>
                                    {moment(post.createdAt).format(
                                      "MMM D YYYY, h:mm:ss a"
                                    )}
                                  </p>
                                  {
                                    post.cover && (
                                      <img src={post.cover?.formats?.thumbnail?.url} alt="News thumbnail" className="img-fluid w-100"/>
                                    )
                                  }
                                </div>
                              )
                            })
                          }
                        </>
                      )
                    }
                  </>
                )
              }
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <IconButton copy={"View All"} icon="news" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
