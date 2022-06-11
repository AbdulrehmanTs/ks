import React from "react";
import "./styles.css";
import Blogs from "./BlogContents";
import { useParams } from "react-router-dom";
import styles from './blog.module.css'
import ReactMarkdown from 'react-markdown';

const Blog = () => {
  const { title } = useParams();

  const blog = Blogs.find(data => data.title === title)
  const { banner, heading, heading2, subHeadings, subHeadingsWithTitle, date, intro, sections, referencedFrom } = blog
  return (
    <section>
      <div className="news_banner">
        <img
          style={{ objectPosition: "center bottom", objectFit: "cover" }}
          src={require(`../../../public/images/${banner}`).default}
          alt=""
        />
      </div>
      <div className="news_container">
        <h1 className="news_heading">{heading}</h1>
        <span className="news_sub_heading">{date}</span>
        {referencedFrom && (
          <div className="reference">
            <h2> Referenced From:</h2>
            <a target="_blank" rel="noreferrer" href={referencedFrom.link}>
              {referencedFrom.text}
              {/* <img src={require(`../../../public/images/${referencedFrom.image}`).default}
                alt=""
              /> */}
            </a>
          </div>
        )}

        <div className="news_text">
          {
            intro && <>
              <ReactMarkdown components={{
                p: ({ node, ...props }) => <p className={styles.p} {...props} />,
                h2: ({ node, ...props }) => <p className={styles.h2} {...props} />,
              }} >{intro}</ReactMarkdown>
              <br />
            </>
          }


          {subHeadings &&
            subHeadings.map((item, index) => {
              return (
                < >
                  <h4 key={index} >{item.heading}</h4>
                  <p>{item.text}</p>
                  <br />
                </>
              );
            })}
          {
            subHeadingsWithTitle?.title && (
              <>
                <br />
                <br />
                <h3>{subHeadingsWithTitle.title}</h3>
                <br />
              </>
            )}
          {
            subHeadingsWithTitle?.subHeadings.map((item, index) => {
              return (
                < >
                  <h4 key={index} >{item.heading}</h4>
                  <ReactMarkdown>{item.text}</ReactMarkdown>
                  <br />
                </>
              );
            })
          }
          {heading2 && (
            <h2 className="news_heading2"
              style={{ marginTop: "2rem", marginBottom: "2rem", }}
            >
              {heading2}
            </h2>
          )}
        </div>

        {sections?.map((item, index) => {
          if (item.imageRight) {
            return (
              <div key={index} className="news_text_img_right">
                <div className="news_text_half">
                  <h4>{item.heading && item.heading}</h4>
                  <br />
                  <ReactMarkdown>{item.text}</ReactMarkdown>
                </div>
                <div className="news_img_half">
                  <img
                    src={require(`../../../public/images/${item.image}`).default}
                    alt=""
                  />
                </div>
                <br />
              </div>
            );
          } else {
            return (
              <div key={index} className="news_text_img_right">
                <div className="news_img_half">
                  <img
                    src={require(`../../../public/images/${item.image}`).default}
                    alt=""
                  />
                </div>
                <div className="news_text_half">
                  <h4>{item.heading && item.heading}</h4>
                  <br />
                  <ReactMarkdown>{item.text}</ReactMarkdown>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Blog;
